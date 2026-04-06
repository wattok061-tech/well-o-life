import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export interface Story {
  id: string;
  name: string;
  diagnosis: string;
  raised: string;
  goal: string;
  percent: string;
  progress: number;
  image: string;
  story: string;
  journey: string;
  dreams: string;
}

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'stories'));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const storiesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Story[];
        setStories(storiesData);
        setLoading(false);
      },
      (err) => {
        try {
          handleFirestoreError(err, OperationType.LIST, 'stories');
        } catch (e) {
          setError('Failed to load stories. Please try again later.');
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return { stories, loading, error };
}
