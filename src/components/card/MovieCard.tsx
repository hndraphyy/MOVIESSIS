"use client";

import Image from "next/image";
import type { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const hasPoster = !!movie.poster_path;

  return (
    <div className="w-full shadow-md">
      {hasPoster ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={800}
          height={1000}
          className="w-full rounded-lg transform transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center rounded-lg">
          <span className="text-gray-400 text-sm px-2 text-center">
            {movie.title}
          </span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
