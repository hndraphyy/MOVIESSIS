import axios from "axios";
import type { Movie, MovieApiResponse } from "@/types/movie";

const tmdbApi = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_API_READ_ACCESS}`,
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const res = await tmdbApi.get<MovieApiResponse>("/movie/popular", {
      params: { language: "en-US", page: 1 },
    });
    return res.data.results;
  } catch (err) {
    console.error("Failed to fetch popular movies:", err);
    return [];
  }
};

export const GENRES: Record<string, number> = {
  Comedy: 35,
  Horror: 27,
  Drama: 18,
  Action: 28,
};

export const getMoviesByGenre = async (
  genreId: number,
  page = 1
): Promise<Movie[]> => {
  try {
    const res = await tmdbApi.get<MovieApiResponse>("/discover/movie", {
      params: { language: "en-US", page, with_genres: genreId },
    });
    return res.data.results;
  } catch (err) {
    console.error(`Failed to fetch movies for genre ${genreId}:`, err);
    return [];
  }
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const res = await tmdbApi.get<MovieApiResponse>("/trending/movie/week");
    return res.data.results;
  } catch (err) {
    console.error("Failed to fetch trending movies:", err);
    return [];
  }
};

export const searchMovie = async (query: string): Promise<Movie[]> => {
  try {
    const res = await tmdbApi.get<MovieApiResponse>("/search/movie", {
      params: {
        query,
        language: "en-US",
        page: 1,
        include_adult: false,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error("Failed to search movies : ", err);
    return [];
  }
};
