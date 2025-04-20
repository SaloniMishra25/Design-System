import React from "react";
import type { TagBadgeProps } from "./TagBadge.types";

const variantMap = {
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

const TagBadge: React.FC<TagBadgeProps> = ({ label, variant = "primary" }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantMap[variant]}`}>
      {label}
    </span>
  );
};

export default TagBadge;
