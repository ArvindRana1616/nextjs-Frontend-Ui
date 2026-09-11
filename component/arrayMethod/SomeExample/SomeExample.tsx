"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

import "./style.css";

interface Product {
  id: number;
  title: string;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "iPhone",
    stock: 5,
  },
  {
    id: 2,
    title: "Samsung",
    stock: 0,
  },
  {
    id: 3,
    title: "OnePlus",
    stock: 8,
  },
];

const SomeExample = () => {

    const hasOutOfStock = products.some(
        (product: Product) => product.stock === 0
    );



  return (
    <Box className="some-card">

      {/* Header */}

      <Box className="some-header">

        <Box className="some-title-wrapper">

          <Box className="some-icon">
            <InventoryIcon />
          </Box>

          <Box>
            <Typography className="some-title">
              some() Example
            </Typography>

            <Typography className="some-subtitle">
              Check if at least one product is out of stock.
            </Typography>
          </Box>

        </Box>

        <Box className="some-badge">
          Array Method
        </Box>

      </Box>


      {/* Result */}

      <Card className="some-result" elevation={0}>
        <CardContent>

          <Box className="some-result-header">

            {hasOutOfStock ? (
              <WarningIcon className="warning-icon" />
            ) : (
              <CheckCircleIcon className="success-icon" />
            )}

            <Box>
              <Typography className="some-result-title">
                {hasOutOfStock
                  ? "Out of Stock Product Found"
                  : "All Products Are Available"}
              </Typography>

              <Typography className="some-result-text">
                {hasOutOfStock
                  ? "At least one product has zero stock."
                  : "Every product currently has stock available."}
              </Typography>
            </Box>

          </Box>

        </CardContent>
      </Card>


      {/* Products */}

      <Box className="some-products">

        {products.map((product) => (
          <Box
            key={product.id}
            className="some-product"
          >

            <Box>
              <Typography className="some-product-title">
                {product.title}
              </Typography>

              <Typography className="some-product-stock">
                Stock: {product.stock}
              </Typography>
            </Box>

            <Chip
              label={
                product.stock === 0
                  ? "Out of Stock"
                  : "Available"
              }
              size="small"
              color={
                product.stock === 0
                  ? "error"
                  : "success"
              }
            />

          </Box>
        ))}

      </Box>


      {/* Code Logic */}

      <Box className="some-info">

        <Typography>
          <strong>some()</strong> returns{" "}
          <strong>true</strong> if at least one item
          satisfies the condition.
        </Typography>

      </Box>


      {/* Footer */}

      <Box className="some-footer">

        <Typography>
          Method used: <strong>some()</strong>
        </Typography>

      </Box>

    </Box>
  );
};

export default SomeExample;