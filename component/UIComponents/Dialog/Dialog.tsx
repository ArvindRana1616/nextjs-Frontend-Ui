"use client";

import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import type { ReactNode } from "react";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  showCloseButton?: boolean;
}

const Dialog = ({
  open,
  onClose,
  title,
  children,
  actions,
  showCloseButton = true,
}: CustomDialogProps) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
    paper: {
      className: "ui-dialog-paper",
    },
  }}
    >
      <DialogTitle
        className="ui-dialog-title"
        sx={{
          fontWeight: 800,
          color: "#111827",
          pr: 6,
        }}
      >
        {title}

        {showCloseButton && (
          <IconButton
            className="ui-dialog-close"
            onClick={onClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent
        className="ui-dialog-content"
        dividers
        sx={{
          color: "#475569",
          fontSize: 15,
          lineHeight: 1.7,
        }}
      >
        {children}
      </DialogContent>

      {actions && (
        <DialogActions
          sx={{
            px: 3,
            py: 2,
            gap: 1,
          }}
        >
          {actions}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;