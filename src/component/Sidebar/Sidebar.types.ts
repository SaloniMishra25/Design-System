// src/components/Sidebar/Sidebar.types.ts
export interface SidebarItem {
    label: string;
    icon?: React.ReactNode;
    href: string;
  }
  
  export interface SidebarProps {
    items: SidebarItem[];
    collapsed?: boolean;
  }
  