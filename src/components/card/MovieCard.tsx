"use client";

import Image from "next/image";
import type { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="border rounded p-2 shadow-md">
      <Image
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
      />
      <h2 className="font-bold mt-2">{movie.title}</h2>
      <p className="text-sm">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
