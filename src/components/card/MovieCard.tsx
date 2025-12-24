"use client";

import Image from "next/image";
import type { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const hasPoster = !!movie.poster_path;
  const IMG_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

  return (
    <div className="w-full">
      {hasPoster ? (
        <div className="text-start">
          <div>
            <Image
              src={`${IMG_URL}${movie.poster_path}`}
              alt={movie.title}
              width={800}
              height={1000}
              className="w-full rounded-lg transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <p className="pt-3 text-[14px] md:text-base text-gray-300 font-medium truncate w-full">
            {movie.title}
          </p>
        </div>
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
