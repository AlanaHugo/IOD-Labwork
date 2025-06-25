import React from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

export default function BookGrid({ books }) {
  return (
    <Grid container spacing={3} padding={4}>
      {books.map(book => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}