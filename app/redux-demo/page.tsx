"use client";

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart,decrementQuantity } from "../../Reduxstore/cartSlice";
import type { RootState } from "../../Reduxstore/store";
import {
  increment,
  decrement,
  reset,
} from "../../Reduxstore/counterSlice";

import "./redux.css";

const ReduxDemo = () => {
  const dispatch = useDispatch();

  const products = [
  {
    id: 1,
    title: "iPhone",
    price: 79999,
    quantity: 1,
  },
  {
    id: 2,
    title: "Headphones",
    price: 2999,
    quantity: 1,
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 4999,
    quantity: 1,
  },
];
  const count = useSelector(
  (state: RootState) => state.counter.value
);

const cartItems = useSelector(
  (state: RootState) => state.cart
);
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="xl">

        <Typography
          sx={{
            fontSize: { xs: 30, md: 42 },
            fontWeight: 900,
            color: "#111827",
            mb: 1,
          }}
        >
          Redux Demo
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Practical examples to understand the fundamentals of Redux demo.
        </Typography>

        {/* Practical Examples */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
            <Box className="redux-counter-card">
              <Typography className="redux-counter-title">
                Redux Counter
              </Typography>

              <Typography className="redux-counter-value">
                {count}
              </Typography>

              <Box className="redux-counter-actions">
                <Button
                  variant="contained"
                  onClick={() => dispatch(increment())}
                >
                  +
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => dispatch(decrement())}
                >
                  -
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(reset())}
                >
                  Reset
                </Button>
              </Box>
            </Box>

            <Box className="redux-cart-card">
              <Box className="redux-cart-header">
                <Box>
                  <Typography className="redux-cart-title">
                    Shopping Cart
                  </Typography>

                  <Typography className="redux-cart-subtitle">
                    Your selected products
                  </Typography>
                </Box>

                <Box className="redux-cart-count">
                  {cartItems.length}
                </Box>
              </Box>

              <Box className="redux-cart-content">
                {cartItems.length === 0 ? (
                  <Typography className="redux-cart-empty">
                    Your cart is empty
                  </Typography>
                ) : (
                  cartItems.map((item) => (
                    <Box className="redux-cart-item" key={item.id}>
                      <Box>
                        <Typography className="redux-cart-product">
                          {item.title}
                        </Typography>

                        <Typography className="redux-cart-price">
                          ₹{item.price}
                        </Typography>
                      </Box>

                      <Typography className="redux-cart-quantity">
                        Qty: {item.quantity}
                      </Typography>
                    </Box>
                  ))
                )}

                <Box className="redux-products-grid">
                  {products.map((product) => (
                    <Box className="redux-product-card" key={product.id}>
                      <Typography className="redux-product-title">
                        {product.title}
                      </Typography>

                      <Typography className="redux-product-price">
                        ₹{product.price}
                      </Typography>

                      <Button
                        variant="contained"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  ))}
                </Box>
                <Box className="redux-cart-content">
                  {cartItems.map((item) => (
                  <Box className="redux-cart-item" key={item.id}>
                  <Box>
                  <Typography className="redux-cart-product">
                  {item.title}
                  </Typography>

                  <Typography className="redux-cart-price">
                  ₹{item.price}
                  </Typography>
                  </Box>

                  <Typography className="redux-cart-quantity">
                  Qty: {item.quantity}
                  </Typography>

                  <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  >
                  Remove
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </Button>
                  </Box>
                  ))}
                </Box>
              </Box>
            </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default ReduxDemo;