"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  
  {
    label: "React Basics",
    path: "/react-basics",
  },
  {
    label: "Array Methods",
    path: "/array-methods",
  },
  {
    label: "API",
    path: "/api",
  },
  {
    label: "Hooks",
    path: "/hooks",
  },
  {
    label: "Forms",
    path: "/forms",
  },
  {
    label: "Context API",
    path: "/context-api",
  },
  {
    label: "Redux Demo",
    path: "/redux-demo",
  },
  {
    label: "Zustand Demo",
    path: "/zustand-demo",
  },
  {
    label: "UI Components",
    path: "/ui-components",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar
            sx={{
                maxWidth: "1400px",
                width: "100%",
                p: 0,
                mx: "auto",
                justifyContent: "space-between",

                "@media (min-width:600px)": {
                px: 0,
                },
            }}
            >
          {/* Logo */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AutoAwesomeIcon
              sx={{
                color: "#2563EB",
                fontSize: 30,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#111827",
                fontSize:"1rem"
              }}
            >
              React Interview Playground
            </Typography>
          </Box>

          {/* Desktop Menu */}

          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              gap: .5,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.path}
                className={pathname === item.path ? "active" : ""}
                sx={{
                  color: "#374151",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 2,

                  transition: ".3s",

                  "&:hover, &.active": {
                    bgcolor: "#2563EB",
                    color: "#fff",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}

          <IconButton
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 270,
            mt: 2,
          }}
        >
          <Typography
            sx={{
              px: 3,
              pb: 2,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            React Playground
          </Typography>

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.label}
                 component={Link}
                  href={item.path}
                  onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                  mx: 1,

                  "&:hover": {
                    bgcolor: "#2563EB",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}