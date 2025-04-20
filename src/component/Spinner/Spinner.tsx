import React from "react";
import type { SpinnerProps } from "./Spinner.types";

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-10 w-10",
};

const colorMap = {
  primary: "text-blue-600",
  gray: "text-gray-500",
  success: "text-green-500",
  danger: "text-red-500",
};

const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "primary" }) => {
  return (
    <svg className={`animate-spin ${sizeMap[size]} ${colorMap[color]}`} viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
};

export default Spinner;
