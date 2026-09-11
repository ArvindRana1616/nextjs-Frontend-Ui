"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Button from "../UIComponents/Button/Button";

interface Product {
  id: number;
  title: string;
  price: number;
}

const CrudCard = () => {
  const [message, setMessage] = useState(
    "Click any CRUD button"
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clearProducts = () => {
  setProducts([]);
  setMessage("");
  setError("");
};

  const handleGet = async () => {
    clearProducts();
    try{
    setLoading(true);
    setError("");
    const response =  await fetch("https://dummyjson.com/products");
    if(!response.ok){
        throw new Error("Failed to fetch products");
    }
    const data = await response.json()
      setProducts(data.products);
    }catch(error){
        setError("Failed to fetch products");
    }finally{
        setLoading(false)
    }
  };

  const handlePost = async () => {
    clearProducts();
    try{
    setLoading(true)
    setError("");
     const newProduct = {
        title: "New Product",
        price: 100,
    };
    const response = await fetch (
        "https://dummyjson.com/products/add",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },

            body: JSON.stringify(newProduct),
        }
    );

    if(!response.ok){
        throw new Error("Failed to create product")
    }

    const data = await response.json();
     setMessage(
        `Product created successfully: ${data.title}`
        );
    }catch(e){
        setError("Failed to fetch products");
    }finally {
    setLoading(false);
    }

  };

  const handlePut = async () => {
    clearProducts();
  try{
    setLoading(true)
    setError("");
    const productId = 1;
    const updatedProduct = {
        title: "Updated Laptop",
        price: 55000,
    };
    const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(updatedProduct),
        }
        );
        if (!response.ok) {
            throw new Error("Failed to update product");
        }
        const data = await response.json();

        setMessage(
        `Product updated successfully: ${data.title}`
        );
        }catch(e){
            setError("Failed to fetch products");
        }finally{
            setLoading(false);
        }
  };

  
const handleDelete = async () => {
    clearProducts();
  try {
    setLoading(true);
    setError("");

    const productId = 1;

    const response = await fetch(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await response.json();

    setMessage(
      `Product deleted successfully: ${data.title}`
    );

  } catch (error) {
    setError("Failed to delete product");

  } finally {
    setLoading(false);
  }
};


  return (
    <Box
      sx={{
        p: 3,
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        boxShadow:
          "0 8px 25px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 800,
          mb: 1,
        }}
      >
        CRUD Operations
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Create, Read, Update and Delete
        operations.
      </Typography>

      {/* CRUD Buttons */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="primary"
          onClick={handleGet}
        >
          GET
        </Button>

        <Button
          variant="secondary"
          onClick={handlePost}
        >
          POST
        </Button>

        <Button
          variant="outlined"
          onClick={handlePut}
        >
          PUT
        </Button>

        <Button
          variant="outlined"
          onClick={handleDelete}
        >
          DELETE
        </Button>
      </Box>

      {/* Response */}

      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 2,
          background: "#F8FAFC",
          border: "1px solid #E5E7EB",
        }}
      >
        <Typography
          sx={{
            color: "#475569",
            fontSize: 14,
          }}
        >
          {message}
        </Typography>
      </Box>

      <div>
        {loading && (
            <Typography
                sx={{
                mt: 3,
                color: "#64748B",
                }}
            >
                Loading products...
            </Typography>
            )}
        {error && (
            <Typography
                sx={{
                mt: 3,
                color: "#DC2626",
                }}
            >
                {error}
            </Typography>
            )}

      {products.slice(0,3).map((product) => (
        <Box key={product.id}>
            <Typography>
            {product.title}
            </Typography>

            <Typography>
            ₹{product.price}
            </Typography>
        </Box>
        ))}
        </div>
    </Box>
  );
};

export default CrudCard;