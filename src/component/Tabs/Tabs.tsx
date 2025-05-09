// src/components/Tabs/Tabs.tsx
import React from "react";
import type { TabsProps } from "./Tabs.types";

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 font-medium text-sm transition-all duration-200 ${
            activeTab === tab.value
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
