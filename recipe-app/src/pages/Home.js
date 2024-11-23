import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://source.unsplash.com/featured/?spaghetti"
  },
  {
    title: "Chicken Curry",
    description:
      "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
    image: "https://source.unsplash.com/featured/?chicken-curry"
  },
  {
    title: "Chocolate Cake",
    description:
      "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    image: "https://source.unsplash.com/featured/?chocolate-cake"
  }
];

function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Leckerhaus
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover delicious recipes and culinary inspiration. Whether you're a
        beginner or a seasoned chef, we have something for everyone.
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
