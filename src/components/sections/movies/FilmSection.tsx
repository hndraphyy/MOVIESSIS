"use client";

import React, { useEffect, useState } from "react";
import GenreCard from "@/components/card/GenreCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import type { Movie } from "@/types/movie";

interface FilmSectionProps {
  genre?: string;
  title: string;
}

const FilmSection: React.FC<FilmSectionProps> = ({
  genre = "popular",
  title,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const IMG_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);

      try {
        const endpoint = genre === "popular" ? "/api/popular" : `/api/${genre}`;
        const res = await fetch(endpoint);

        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Server returned non-JSON response");
        }

        if (data.error) throw new Error(data.error);

        setMovies(data);
      } catch (err: unknown) {
        console.error("Failed to fetch movies:", err);

        let message = "Failed to fetch movies";
        if (err instanceof Error) {
          message = err.message;
        }

        setError(message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [genre]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-40 md:py-52">
        <LoadingSpinner />
      </div>
    );
  if (error)
    return <div className="text-red-500 p-4 font-semibold">{error}</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 text-left relative z-10">
      <h2 className="text-white text-[18px] md:text-[28px] font-bold mb-0 md:mb-3 py-2">
        {title}
      </h2>

      <div className="flex space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide">
        {movies.slice(0, 2).map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40 md:w-64">
            <GenreCard
              title={movie.title}
              imageUrl={
                movie.poster_path ? `${IMG_URL}${movie.poster_path}` : ""
              }
              isPriority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilmSection;
