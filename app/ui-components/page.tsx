"use client";

import { Box, Container, Typography } from "@mui/material";
import Button from "../../component/UIComponents/Button/Button";
import Card from "../../component/UIComponents/Card/Card";
import Alert from "../../component/UIComponents/Alert/Alert";
import { useState } from "react";
import Dialog from "../../component/UIComponents/Dialog/Dialog";
import Tabs from "../../component/UIComponents/Tab/Tabs";
import Accordion from "../../component/UIComponents/Accordion/Accordion";
import Tooltip from "../../component/UIComponents/Tooltip/Tooltip";
import Loader from "../../component/UIComponents/Loader/Loader";

type AlertType =
  | "success"
  | "error"
  | "warning"
  | "info";

const UIComponents = () => {
  const [alertType, setAlertType] =useState<AlertType | null>(null);
  const handleAlert = (type: AlertType) => {setAlertType(type);};
  const [openDialog, setOpenDialog] = useState(false);

  const getMessage = () => {
    switch (alertType) {
      case "success":
        return "Data saved successfully!";

      case "error":
        return "Something went wrong. Please try again.";

      case "warning":
        return "Please check your information.";

      case "info":
        return "A new update is available.";

      default:
        return "";
    }
  };
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="xl">

        {/* Page Heading */}

        <Typography
          sx={{
            fontSize: { xs: 30, md: 42 },
            fontWeight: 900,
            color: "#111827",
            mb: 1,
          }}
        >
          UI Components
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Reusable UI components built with React and MUI
          for common application interfaces.
        </Typography>

        {/* Components Grid */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
            mt: 8,
          }}
        >

          {/* Button Component */}

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
              Button
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Reusable button with different variants,
              sizes and loading state.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button variant="primary">
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outlined">
                Outlined
              </Button>

              <Button size="small">
                Small
              </Button>

              <Button size="large">
                Large
              </Button>

              <Button loading>
                Loading
              </Button>

              <Button disabled>
                Disabled
              </Button>
            </Box>
          </Box>

          <Card
            title="React Development"
            description="Reusable Card component with image, custom content and actions."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            imageAlt="React development"
            hover={true}
            actions={
              <>
                <Button variant="primary">
                  View
                </Button>

                <Button variant="outlined">
                  Edit
                </Button>
              </>
            }
          >
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#475569",
                  mb: 0.5,
                }}
              >
                <strong>Technology:</strong> React
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#475569",
                  mb: 0.5,
                }}
              >
                <strong>Language:</strong> TypeScript
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#475569",
                }}
              >
                <strong>Framework:</strong> Next.js
              </Typography>
            </Box>
          </Card>
          {/* =========================
              ALERT COMPONENT
          ========================= */}

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
                color: "#111827",
                mb: 1,
              }}
            >
              Alert / Snackbar
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Display success, error, warning and info
              messages based on user actions.
            </Typography>

            {/* Alert Buttons */}
            <Box sx={{display: "flex",gap: 2,flexWrap: "wrap",}}>
              <Button
                variant="primary"
                onClick={() => handleAlert("success")}
              >
                Success
              </Button>

              <Button
                variant="secondary"
                onClick={() => handleAlert("error")}
              >
                Error
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleAlert("warning")}
              >
                Warning
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleAlert("info")}
              >
                Info
              </Button>
            </Box>

            {/* Alert Message */}

            {alertType && (
              <Box sx={{ mt: 3 }}>
                <Alert
                  open={true}
                  type={alertType}
                  message={getMessage()}
                  onClose={() => setAlertType(null)}
                />
              </Box>
            )}
          </Box>

          {/* =========================
              DIALOG COMPONENT
            ========================= */}

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
                color: "#111827",
                mb: 1,
              }}
            >
              Dialog / Modal
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Reusable dialog component for confirmations,
              forms and important user actions.
            </Typography>

            <Button
              variant="primary"
              onClick={() => setOpenDialog(true)}
            >
              Open Dialog
            </Button>

            {/* Dialog */}

            <Dialog
              open={openDialog}
              onClose={() => setOpenDialog(false)}
              title="Confirm Action"
              actions={
                <>
                  <Button
                    variant="outlined"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() => setOpenDialog(false)}
                  >
                    Confirm
                  </Button>
                </>
              }
            >
              <Typography>
                Are you sure you want to continue?
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748B",
                  fontSize: 14,
                }}
              >
                This action will update your information.
              </Typography>
            </Dialog>
          </Box>

          {/* =========================
              TABS
          ========================= */}

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
              }}
            >
              Tabs
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Switch between different sections of
              content.
            </Typography>

            <Tabs
              tabs={[
                {
                  label: "Profile",
                  value: "profile",
                  content: (
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        Profile
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                        }}
                      >
                        Name: Arvind
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                        }}
                      >
                        Email: arvind@example.com
                      </Typography>
                    </Box>
                  ),
                },

                {
                  label: "Orders",
                  value: "orders",
                  content: (
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        Orders
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                        }}
                      >
                        You have 5 recent orders.
                      </Typography>
                    </Box>
                  ),
                },

                {
                  label: "Settings",
                  value: "settings",
                  content: (
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        Settings
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                        }}
                      >
                        Manage your account settings here.
                      </Typography>
                    </Box>
                  ),
                },
              ]}
          />
          </Box>

          {/* =========================
              ACCORDION
          ========================= */}

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
              Accordion
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Expand and collapse sections with single
              or multiple open options.
            </Typography>

            <Accordion
              items={[
                {
                  id: "react",
                  title: "What is React?",
                  content: (
                    <Typography>
                      React is a JavaScript library used for
                      building user interfaces.
                    </Typography>
                  ),
                },

                {
                  id: "typescript",
                  title: "What is TypeScript?",
                  content: (
                    <Typography>
                      TypeScript adds static typing to
                      JavaScript and helps catch errors early.
                    </Typography>
                  ),
                },

                {
                  id: "nextjs",
                  title: "What is Next.js?",
                  content: (
                    <Typography>
                      Next.js is a React framework used for
                      building modern web applications.
                    </Typography>
                  ),
                },
              ]}
            />
          </Box>

          {/* =========================
            TOOLTIP
        ========================= */}

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
              Tooltip
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mb: 3,
              }}
            >
              Display additional information when the user
              hovers over an element.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Tooltip title="Delete this item">
                <Button variant="primary">
                  Delete
                </Button>
              </Tooltip>

              <Tooltip
                title="Edit your profile"
                placement="bottom"
              >
                <Button variant="outlined">
                  Edit
                </Button>
              </Tooltip>

              <Tooltip
                title="View more information"
                placement="right"
              >
                <Button variant="secondary">
                  View
                </Button>
              </Tooltip>
            </Box>
          </Box>
        
        {/* =========================
            LOADER / SPINNER
        ========================= */}

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
            Loader / Spinner
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 14,
              mb: 3,
            }}
          >
            Reusable loading indicator for API calls and
            asynchronous operations.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Loader
              loading={true}
              size="small"
              text="Loading..."
            />

            <Loader
              loading={true}
              size="medium"
              text="Loading products..."
            />

            <Loader
              loading={true}
              size="large"
              text="Please wait..."
            />
          </Box>
        </Box>


        </Box>
      </Container>

    </Box>
  );
};

export default UIComponents;