"use client";

import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outlined";

type ButtonSize =
  | "small"
  | "medium"
  | "large";

interface CustomButtonProps
  extends Omit<MuiButtonProps, "variant" | "size"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  sx,
  ...props
}: CustomButtonProps) => {
  const muiVariant: "contained" | "outlined" | "text" =
    variant === "outlined"
      ? "outlined"
      : "contained";

  return (
    <MuiButton
      variant={muiVariant}
      size={size}
      disabled={disabled || loading}
      {...props}
      sx={{
        textTransform: "none",
        fontWeight: 700,
        borderRadius: 2,
        minWidth: 110,

        ...(variant === "primary" && {
          backgroundColor: "#2563EB",

          "&:hover": {
            backgroundColor: "#1D4ED8",
          },
        }),

        ...(variant === "secondary" && {
          backgroundColor: "#64748B",

          "&:hover": {
            backgroundColor: "#475569",
          },
        }),

        ...(variant === "outlined" && {
          borderColor: "#2563EB",
          color: "#2563EB",

          "&:hover": {
            borderColor: "#1D4ED8",
            backgroundColor: "#EFF6FF",
          },
        }),

        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress
          size={20}
          sx={{
            color: "inherit",
          }}
        />
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;