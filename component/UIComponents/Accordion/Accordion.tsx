"use client";

import { useState } from "react";

import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { ReactNode } from "react";

import "./style.css";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface CustomAccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
}

const Accordion = ({
  items,
  multiple = false,
}: CustomAccordionProps) => {

  const [openId, setOpenId] = useState<string | null>(
    null
  );

  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleSingleChange = (id: string) => {
    setOpenId((previousId) =>
      previousId === id ? null : id
    );
  };

  const handleMultipleChange = (id: string) => {
    setOpenIds((previousIds) => {
      if (previousIds.includes(id)) {
        return previousIds.filter(
          (itemId) => itemId !== id
        );
      }

      return [...previousIds, id];
    });
  };

  return (
    <div className="ui-accordion">

      {items.map((item) => {

        const isOpen = multiple
          ? openIds.includes(item.id)
          : openId === item.id;

        return (
          <MuiAccordion
            key={item.id}
            expanded={isOpen}
            onChange={() =>
              multiple
                ? handleMultipleChange(item.id)
                : handleSingleChange(item.id)
            }
            className="ui-accordion-item"
          >

            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="ui-accordion-summary"
            >
              <Typography className="ui-accordion-title">
                {item.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className="ui-accordion-details">
              {item.content}
            </AccordionDetails>

          </MuiAccordion>
        );
      })}

    </div>
  );
};

export default Accordion;