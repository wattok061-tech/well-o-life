import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Story {
  id: string;
  name?: string;
  title?: string;
  diagnosis?: string;
  raised?: string;
  goal?: string;
  percent?: string;
  progress?: number;
  image?: string;
  imageUrl?: string;
  story?: string;
  journey?: string;
  dreams?: string;
  [key: string]: any;
}

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchStories() {
      try {
        const { data, error: fetchError } = await supabase
          .from('stories')
          .select('*')
          .order('id', { ascending: true });

        if (fetchError) throw fetchError;
        
        if (isMounted) {
          setStories(data || []);
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Error fetching stories:', err);
        if (isMounted) {
          setError('Failed to load stories. Please try again later.');
          setLoading(false);
        }
      }
    }

    fetchStories();

    const channel = supabase
      .channel('public:stories')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'stories' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setStories(prev => [...prev, payload.new as Story]);
        } else if (payload.eventType === 'UPDATE') {
          setStories(prev => prev.map(story => story.id === payload.new.id ? payload.new as Story : story));
        } else if (payload.eventType === 'DELETE') {
          setStories(prev => prev.filter(story => story.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { stories, loading, error };
}
