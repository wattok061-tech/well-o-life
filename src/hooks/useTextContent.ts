import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export interface TextContent {
  [key: string]: string;
}

export function useTextContent() {
  const [textContent, setTextContent] = useState<TextContent>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'text_content'),
      (snapshot) => {
        const content: TextContent = {};
        snapshot.docs.forEach(doc => {
          content[doc.id] = doc.data().value;
        });
        setTextContent(content);
        setLoading(false);
      },
      (err) => {
        try {
          handleFirestoreError(err, OperationType.LIST, 'text_content');
        } catch (e) {
          setError('Failed to load text content.');
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return { textContent, loading, error };
}
