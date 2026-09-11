"use client";

import {
  Alert as MuiAlert,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import type { ReactNode } from "react";

type AlertType =
  | "success"
  | "error"
  | "warning"
  | "info";

interface CustomAlertProps {
  open: boolean;
  message: ReactNode;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

const Alert = ({
  open,
  message,
  type = "success",
  onClose,
  closable = true,
}: CustomAlertProps) => {
  if (!open) {
    return null;
  }

  return (
    <MuiAlert
      severity={type}
      variant="filled"
      className="ui-alert"
      action={
        closable ? (
          <IconButton
            className="ui-alert-close"
            size="small"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : undefined
      }
    >
      <span className="ui-alert-message">
        {message}
      </span>
    </MuiAlert>
  );
};

export default Alert;