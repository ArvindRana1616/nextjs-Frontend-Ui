"use client";

import { useState } from "react";
import {
  Box,
  Tabs as MuiTabs,
  Tab,
} from "@mui/material";

import type { ReactNode, SyntheticEvent } from "react";

import "./style.css";

interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}

const Tabs = ({
  tabs,
  defaultValue,
}: CustomTabsProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultValue || tabs[0]?.value || ""
  );

  const handleChange = (
    _event: SyntheticEvent,
    newValue: string
  ) => {
    setActiveTab(newValue);
  };

  const activeTabData = tabs.find(
    (tab) => tab.value === activeTab
  );

  return (
    <Box className="ui-tabs">

      {/* Tabs Header */}

      <MuiTabs
        className="ui-tabs-header"
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab) => (
          <Tab
            className="ui-tab"
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </MuiTabs>

      {/* Active Tab Content */}

      <Box className="ui-tabs-content">
        {activeTabData?.content}
      </Box>

    </Box>
  );
};

export default Tabs;