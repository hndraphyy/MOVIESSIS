"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { suggestSearch } from "@/lib/api/tmdb";

export default function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length === 0) {
        setSuggestions([]);
        setShowDropdown(false);
        return;
      }

      const results = await suggestSearch(query);
      setSuggestions(results);
      setShowDropdown(results.length > 0);
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node))
        setShowDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full md:max-w-xs" ref={dropdownRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowDropdown(false);

          if (query.trim() === "") {
            router.push("/movies");
          } else {
            router.push(`/search?query=${encodeURIComponent(query)}`);
          }
        }}
        className="relative"
      >
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-800 text-white text-sm pl-10 pr-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-gray-600"
        />
      </form>

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-gray-900 border border-gray-700 mt-1 rounded-md shadow-2xl overflow-hidden">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              onClick={() => {
                setQuery(movie.title);
                setShowDropdown(false);
                router.push(`/search?query=${encodeURIComponent(movie.title)}`);
              }}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm text-gray-300 flex items-center gap-2 border-b border-gray-800 last:border-none"
            >
              <Search size={12} className="text-gray-500" />
              <span className="truncate">{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
