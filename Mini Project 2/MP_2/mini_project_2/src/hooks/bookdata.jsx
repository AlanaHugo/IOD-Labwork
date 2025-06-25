import { useState, useEffect } from 'react';

export function useGutendexBooks(filterGenre = '') {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Build URL with genre filter if provided
    const url = filterGenre
      ? `https://gutendex.com/books/?topic=${encodeURIComponent(filterGenre)}`
      : 'https://gutendex.com/books/';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Problem with network response');
        return res.json();
      })
      .then((data) => {
        // data.results is an array of books
        setBooks(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch');
        setLoading(false);
      });
  }, [filterGenre]);

  return { books, loading, error };
}