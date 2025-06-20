import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.natgeofe.com/k/1d33938b-3d02-4773-91e3-70b113c3b8c7/lion-male-roar.jpg?wp=1&w=1084.125&h=609"
        title="lion"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lion
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          A lion is a large, powerful cat, Panthera leo known for its
          distinctive mane in males and social behavior within prides
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg"
        title="tiger"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tiger
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          The tiger Panthera tigris is a large cat and a member of the genus 
          Panthera native to Asia. It has a powerful, muscular body 
          with a large head and paws.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}
