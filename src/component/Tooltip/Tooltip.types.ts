import { ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: TooltipPosition;
}
