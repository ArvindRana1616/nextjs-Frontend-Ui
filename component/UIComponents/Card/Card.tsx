"use client";

import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";

import type { ReactNode } from "react";

interface CustomCardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  actions?: ReactNode;
  hover?: boolean;
}

const Card = ({
  title,
  description,
  image,
  imageAlt = "Card image",
  children,
  actions,
  hover = true,
}: CustomCardProps) => {
  return (
    <MuiCard
      sx={{
        height: "100%",
        borderRadius: 3,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.06)",
        overflow: "hidden",
        transition: "all 0.3s ease",

        ...(hover && {
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow:
              "0 14px 30px rgba(15, 23, 42, 0.12)",
          },
        }),
      }}
    >
      {/* Image */}

      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={imageAlt}
        />
      )}

      {/* Content */}

      <CardContent>
        {title && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "#111827",
              mb: 1,
            }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        )}

        {/* Custom Content */}

        {children}
      </CardContent>

      {/* Actions */}

      {actions && (
        <CardActions
          sx={{
            px: 2,
            pb: 2,
          }}
        >
          {actions}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;