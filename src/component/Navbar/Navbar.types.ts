// src/components/Navbar/Navbar.types.ts
export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface NavbarProps {
    brand?: string;
    links: NavItem[];
  }
  