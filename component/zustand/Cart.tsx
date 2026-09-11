"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import useCartStore from "../../ZustandStore/cartStore";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    quantity: 1,
  },

];

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <Box
      sx={{
        background: "#fff",
        p: 4,
        boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h4" sx={{fontWeight:700, mb:4}}>
        Zustand Shopping Cart
      </Typography>

      <Stack spacing={2}>
        {products.map((product) => (
          <Card key={product.id} sx={{boxShadow:"none"}}>
            <CardContent>
              <Stack sx={{
                direction:"row",
                alignItems:"center",
                justifyContent:"space-between"}}
              >
                <Box sx={{boxShadow:"none"}}>
                  <Typography variant="h6" sx={{fontWeight:600}}>
                    {product.title}
                  </Typography>

                  <Typography color="text.secondary">
                    ₹{product.price}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography sx={{variant:"h5", fontWeight:"700", mb:"2"}}>
        Cart Items
      </Typography>

      {cart.length === 0 ? (
        <Typography color="text.secondary">
          Your cart is empty
        </Typography>
      ) : (
        <Stack spacing={2}>
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent>
                <Stack sx={{
                  direction:"row",
                  alignItems:"center",
                  justifyContent:"space-between"}}
                >
                  <Box>
                    <Typography sx={{
                      variant:"h6",
                      fontWeight:600}}
                    >
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary">
                      ₹{item.price}
                    </Typography>
                  </Box>

                  <Stack sx={{
                    direction:"row",
                    alignItems:"center"}}
                    spacing={1}
                  >
                    <Button
                      variant="outlined"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </Button>

                    <Typography sx={{fontWeight:600}}>
                      {item.quantity}
                    </Typography>

                    <Button
                      variant="outlined"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </Button>

                    <Button
                      color="error"
                      variant="outlined"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}