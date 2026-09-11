"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import ListAltIcon from "@mui/icons-material/ListAlt";

import "./style.css";

const products = [
  {
    id: 1,
    title: "iPhone",
    price: 100000,
  },
  {
    id: 2,
    title: "Samsung",
    price: 80000,
  },
  {
    id: 3,
    title: "OnePlus",
    price: 55000,
  },
];

const MapExample = () => {
  return (
    <Box className="map-card">

      {/* Header */}

      <Box className="map-header">

        <Box className="map-title-wrapper">

          <Box className="map-icon">
            <ListAltIcon />
          </Box>

          <Box>
            <Typography className="map-title">
              map() Example
            </Typography>

            <Typography className="map-subtitle">
              Render multiple products from an array.
            </Typography>
          </Box>

        </Box>

        <Box className="map-badge">
          Array Method
        </Box>

      </Box>


      {/* Explanation */}

      <Box className="map-info">

        <Typography>
          <strong>products.map()</strong> creates a UI element
          for every item in the array.
        </Typography>

      </Box>


      {/* Products */}

      <Box className="map-products">

        {products.map((product) => (
          <Card
            key={product.id}
            className="map-product-card"
            elevation={0}
          >
            <CardContent>

              <Typography className="map-product-title">
                {product.title}
              </Typography>

              <Typography className="map-product-price">
                ₹{product.price.toLocaleString()}
              </Typography>

            </CardContent>
          </Card>
        ))}

      </Box>


      {/* Footer */}

      <Box className="map-footer">

        <Typography>
          Method used: <strong>map()</strong>
        </Typography>

      </Box>

    </Box>
  );
};

export default MapExample;