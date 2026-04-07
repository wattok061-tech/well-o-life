import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface News {
  id: string;
  title?: string;
  date?: string;
  image?: string;
  imageUrl?: string;
  content?: string;
  [key: string]: any;
}

export function useNews() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNews() {
      try {
        const { data, error: fetchError } = await supabase
          .from('news')
          .select('*')
          .order('date', { ascending: false });

        if (fetchError) throw fetchError;
        
        if (isMounted) {
          setNews(data || []);
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Error fetching news:', err);
        if (isMounted) {
          setError('Failed to load news. Please try again later.');
          setLoading(false);
        }
      }
    }

    fetchNews();

    const channel = supabase
      .channel('public:news')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'news' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setNews(prev => [payload.new as News, ...prev].sort((a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA;
          }));
        } else if (payload.eventType === 'UPDATE') {
          setNews(prev => prev.map(item => item.id === payload.new.id ? payload.new as News : item));
        } else if (payload.eventType === 'DELETE') {
          setNews(prev => prev.filter(item => item.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { news, loading, error };
}
