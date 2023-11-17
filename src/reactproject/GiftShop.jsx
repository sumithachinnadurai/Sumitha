// GiftShop.js
import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const products = [
  { id: 1, name: "Custom Mug", price: "$10.99", image: "mug.jpg" },
  { id: 2, name: "Personalized T-shirt", price: "$19.99", image: "tshirt.jpg" },
  // Add more products as needed
];

const GiftShop = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our Customized Gift Shop
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <img
                  src={
                    require(`./https://img.freepik.com/free-photo/set-christmas-presents-with-golden-ribbon-globes_23-2148343314.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais/${product.image}`)
                      .default
                  }
                  alt={product.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GiftShop;
