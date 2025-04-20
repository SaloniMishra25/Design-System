// src/components/Sidebar/Sidebar.tsx
import React, { useState } from "react";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar: React.FC<SidebarProps> = ({ items, collapsed = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div
      className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 text-sm w-full text-left bg-gray-700 hover:bg-gray-600"
      >
        {isCollapsed ? "→" : "Collapse ←"}
      </button>

      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.href} className="px-4 py-2 hover:bg-gray-700">
            <a href={item.href} className="block">
              {isCollapsed ? item.label.charAt(0) : item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
