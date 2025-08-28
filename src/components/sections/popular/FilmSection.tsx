"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/card/MovieCard";
import { Movie } from "@/types/movie";

import LoadingSpinner from "@/components/loading/LoadingSpinner";

const FilmPopularSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movie");
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="max-w-7xl m-auto py-24 md:py-28 px-4 text-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FilmPopularSection;
