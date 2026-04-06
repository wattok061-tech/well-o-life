import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export interface News {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

export function useNews() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const newsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as News[];
        setNews(newsData);
        setLoading(false);
      },
      (err) => {
        try {
          handleFirestoreError(err, OperationType.LIST, 'news');
        } catch (e) {
          setError('Failed to load news. Please try again later.');
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return { news, loading, error };
}
