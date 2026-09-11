"use client";

import { useState } from "react";

import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";

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
];

const ProductSearch = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box className="product-search-card">

      {/* Header */}

      <Box className="product-search-header">

        <Box className="product-search-title-wrapper">

          <Box className="product-search-icon">
            <SearchIcon />
          </Box>

          <Box>
            <Typography className="product-search-title">
              Product Search
            </Typography>

            <Typography className="product-search-subtitle">
              Search products using filter and string methods.
            </Typography>
          </Box>

        </Box>

        <Box className="product-search-badge">
          filter + includes
        </Box>

      </Box>


      {/* Search */}

      <TextField
        fullWidth
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="product-search-input"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />


      {/* Result Count */}

      <Box className="product-result-header">

        <Typography>
          Search Results
        </Typography>

        <Box className="product-count">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "Product"
            : "Products"}
        </Box>

      </Box>


      {/* Products */}

      {filteredProducts.length > 0 ? (

        <Grid container spacing={2}>

          {filteredProducts.map((product) => (

            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >

              <Card
                className="product-card"
                elevation={0}
              >

                <CardContent className="product-card-content">

                  <Box className="product-card-icon">
                    {product.title.charAt(0)}
                  </Box>

                  <Box>

                    <Typography
                      variant="h6"
                      className="product-title"
                    >
                      {product.title}
                    </Typography>

                    <Typography className="product-price">
                      ₹{product.price.toLocaleString()}
                    </Typography>

                  </Box>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      ) : (

        <Box className="product-empty">

          <SearchOffIcon />

          <Typography>
            No products found
          </Typography>

          <Typography>
            Try searching for another product.
          </Typography>

        </Box>

      )}

    </Box>
  );
};

export default ProductSearch;