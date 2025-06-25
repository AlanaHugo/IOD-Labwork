import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

export default function BookCard({ book }) {
  const { user } = useContext(AuthContext);
  const { id, title, authors, formats } = book;
  const image =
    formats["image/jpeg"] ||
    "https://via.placeholder.com/150x200?text=No+Image";

  const [isFavourited, setIsFavourited] = useState(false);

  useEffect(() => {
    if (user) {
      const favouritesKey = `favorites_${user.username}`;
      const favs = JSON.parse(localStorage.getItem(favouritesKey)) || [];
      setIsFavourited(favs.some((fav) => fav.id === id));
    }
  }, [id, user]);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
      alert("Please log in to save favorites");
      return;
    }

    const favouritesKey = `favourites_${user.username}`;
    let favs = JSON.parse(localStorage.getItem(favouritesKey)) || [];

    if (isFavourited) {
      // Remove from favorites
      favs = favs.filter((fav) => fav.id !== id);
    } else {
      // Add to favorites
      favs.push(book);
    }

    localStorage.setItem(favouritesKey, JSON.stringify(favs));
    setIsFavourited(!isFavourited);
  };

  return (
    <Link to={`/books/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 345,
          height: 500,
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <CardHeader
          title={title}
          subheader={authors?.map((a) => a.name).join(", ") || "Unknown"}
        />
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 220,
            width: "auto",
            maxwidth: "100%",
            objectFit: "contain",
            display: "block",
            marginX: "auto",
            marginTop: 1,
            position: "relative",
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {book.subjects?.join(", ") || "No description"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={toggleFavourite}
            color={isFavourited ? "error" : "default"}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
