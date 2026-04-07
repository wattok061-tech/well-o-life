import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface TextContent {
  [key: string]: string;
}

export function useTextContent() {
  const [textContent, setTextContent] = useState<TextContent>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchTextContent() {
      try {
        const { data, error: fetchError } = await supabase
          .from('text_content')
          .select('*');

        if (fetchError) throw fetchError;
        
        if (isMounted) {
          const content: TextContent = {};
          data?.forEach((doc: any) => {
            content[doc.id] = doc.value;
          });
          setTextContent(content);
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Error fetching text content:', err);
        if (isMounted) {
          setError('Failed to load text content.');
          setLoading(false);
        }
      }
    }

    fetchTextContent();

    const channel = supabase
      .channel('public:text_content')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'text_content' }, (payload) => {
        if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
          setTextContent(prev => ({ ...prev, [payload.new.id]: payload.new.value }));
        } else if (payload.eventType === 'DELETE') {
          setTextContent(prev => {
            const next = { ...prev };
            delete next[payload.old.id];
            return next;
          });
        }
      })
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { textContent, loading, error };
}
