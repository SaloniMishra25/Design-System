// src/components/Navbar/Navbar.tsx
import React from "react";
import type { NavbarProps } from "./Navbar.types";

const Navbar: React.FC<NavbarProps> = ({ brand = "Logo", links }) => {
  return (
    <nav className="bg-white border-b shadow px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">{brand}</div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
