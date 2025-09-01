"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  size?: "sm" | "md";
}

export default function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim() === "") {
      router.push("/movies");
      return;
    }
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 md:mt-0">
      <label htmlFor="search" className="absolute left-3 top-2 cursor-text">
        <Search size={20} className="text-gray-400" />
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" text-white outline-none w-full placeholder-gray-400 text-sm bg-gray-800/80 px-2 py-2 pl-10 rounded-md"
      />
    </form>
  );
}
