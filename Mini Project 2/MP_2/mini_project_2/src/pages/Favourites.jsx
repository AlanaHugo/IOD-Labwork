import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Grid, Typography, Box, Button } from '@mui/material';
import FavouriteBookCard from '../components/FavouritesCard';
import { Link } from 'react-router-dom';

export default function Favourites() {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (user) {
      const favouritesKey = `favourites_${user.username}`;
      const favs = JSON.parse(localStorage.getItem(favouritesKey)) || [];
      setFavourites(favs);
    }
  }, [user]);

  const handleRemove = (bookId) => {
    if (!user) return;
    const favouritesKey = `favourites_${user.username}`;
    const updatedFavourites = favourites.filter(book => book.id !== bookId);
    setFavourites(updatedFavourites);
    localStorage.setItem(favouritesKey, JSON.stringify(updatedFavourites));
  };

  if (!user) {
    return (
      <Box sx={{ margin: 4 }}>
        <Typography variant="h6" gutterBottom>
          You must be logged in to view your favourites.
        </Typography>
        <Button component={Link} to="/login" variant="outlined">
          Login
        </Button>
      </Box>
    );
  }

  if (favourites.length === 0) {
    return (
      <Box sx={{ margin: 4 }}>
        <Typography variant="h6" gutterBottom>
          You have no favourite books yet.
        </Typography>
        <Button component={Link} to="/" variant="outlined">
          Browse Books
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Favourite Books
      </Typography>
      <Grid container spacing={3}>
        {favourites.map((book) => (
          <FavouriteBookCard key={book.id} book={book} onRemove={handleRemove} />
        ))}
      </Grid>
    </Box>
  );
}