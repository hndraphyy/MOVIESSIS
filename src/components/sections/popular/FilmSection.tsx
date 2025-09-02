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
        const res = await fetch("/api/popular");
        const data: Movie[] | { results: Movie[] } = await res.json();
        setMovies(Array.isArray(data) ? data : data.results ?? []);
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
        <div className="max-w-7xl mx-auto py-24 md:py-28 px-4 text-center relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <p className="text-gray-500 col-span-full">No movies found.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FilmPopularSection;
