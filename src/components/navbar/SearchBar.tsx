"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  size?: "sm" | "md";
}

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  size = "md",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-3 bg-gray-800 rounded-lg px-3 mt-5 md:mt-0 ${
        size === "sm" ? "py-1.5" : "py-2"
      }`}
    >
      <Search size={22} className="text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent py-1 text-white outline-none w-full placeholder-gray-400 text-sm"
      />
    </form>
  );
}
