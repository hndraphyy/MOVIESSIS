"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { menuItems } from "./menu";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    pathname === path ? "text-primary" : "text-gray-300 hover:text-primary";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bgcolor/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-primary font-bold text-3xl md:text-4xl tracking-wide transition"
        >
          MOVIESSIS
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={`${getLinkClass(
                path
              )} text-base font-light tracking-wide transition-colors`}
            >
              {name}
            </Link>
          ))}
          <SearchBar
            placeholder="Search movies..."
            onSearch={(query) => console.log("Searching for:", query)}
            size="sm"
          />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-bgcolor flex flex-col p-4 transition-opacity  ${
          isOpen
            ? "opacity-100 h-[100vh] bg-bgcolor"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2 border-b border-gray-600 text-sm pb-4">
          <Link
            href="/"
            className="text-primary font-bold text-3xl md:text-4xl tracking-wide transition"
          >
            MOVIESSIS
          </Link>
          <button
            className="text-white"
            aria-label="Close Menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search movies..."
          onSearch={(query) => console.log("Searching for:", query)}
          size="sm"
        />

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 py-5">
          {menuItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={`${
                pathname === path
                  ? "text-primary"
                  : "text-gray-300 hover:text-primary"
              } text-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-600 text-sm text-gray-500">
          © {new Date().getFullYear()} MOVIESSIS. All rights reserved.
        </div>
      </div>
    </header>
  );
}
