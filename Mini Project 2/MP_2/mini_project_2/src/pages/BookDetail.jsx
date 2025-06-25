import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CircularProgress, Typography, Button, Box } from '@mui/material';

export default function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://gutendex.com/books/${bookId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [bookId]);

  if (loading) return <CircularProgress sx={{ margin: 4 }} />;

  if (error)
    return (
      <Box sx={{ margin: 4 }}>
        <Typography color="error">{error}</Typography>
        <Button component={Link} to="/">
          Go Back
        </Button>
      </Box>
    );

  return (
    <Box sx={{ margin: 4 }}>
      <Button component={Link} to="/" variant="outlined" sx={{ marginBottom: 2 }}>
        Back to Home
      </Button>
      <Typography variant="h4" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Author: {book.authors?.map((a) => a.name).join(', ') || 'Unknown'}
      </Typography>
      <img
        src={book.formats['image/jpeg'] || 'https://via.placeholder.com/150x200?text=No+Image'}
        alt={book.title}
        style={{ maxWidth: '200px', marginBottom: '20px' }}
      />
            <Typography variant="body1" gutterBottom>
      {book.summaries?.join(', ') || 'None'}
      </Typography>
      {/* Add more details as you want */}
    </Box>
  );
}
