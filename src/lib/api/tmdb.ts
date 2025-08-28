import axios from "axios";
import type { Movie } from "@/types/movie";

const tmdbApi = axios.create({
  baseURL: process.env.NEXT_APP_BASEURL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_API_READ_ACCESS}`,
    "Content-Type": "application/json",
  },
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const res = await tmdbApi.get("/movie/popular", {
      params: { language: "en-US", page: 1 },
    });
    return res.data.results;
  } catch (err) {
    console.error("Failed to fetch popular movies:", err);
    return [];
  }
};

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchFromTMDB(endpoint: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch " + endpoint);
  return res.json();
}
