export type TagVariant = "primary" | "success" | "warning" | "error";

export interface TagBadgeProps {
  label: string;
  variant?: TagVariant;
}
