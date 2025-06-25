import React from 'react';
import { Grid, IconButton } from '@mui/material';
import BookCard from './BookCard';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FavouriteBookCard({ book, onRemove }) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }} key={book.id}>
      <BookCard book={book} />
      <IconButton
        aria-label="remove from favourites"
        onClick={() => onRemove(book.id)}
        sx={{ position: 'absolute', top: 8, right: 8, color: '#CFD11A' }}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
}