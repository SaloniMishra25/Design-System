export type TagVariant = "primary" | "success" | "warning" | "neutral" | "error";

export interface TagBadgeProps {
  label: string;
  variant?: TagVariant;
}
