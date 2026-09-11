"use client";

import {
  Tooltip as MuiTooltip,
} from "@mui/material";

import type { ReactNode } from "react";

import "./style.css";

type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

interface CustomTooltipProps {
  title: string;
  children: ReactNode;
  placement?: TooltipPlacement;
}

const Tooltip = ({
  title,
  children,
  placement = "top",
}: CustomTooltipProps) => {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      arrow
    >
      <span className="ui-tooltip-wrapper">
        {children}
      </span>
    </MuiTooltip>
  );
};

export default Tooltip;