"use client";

import Image from "next/image";
import type { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className=" w-full shadow-md">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={800}
        height={1000}
        className="w-full rounded-lg transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default MovieCard;
