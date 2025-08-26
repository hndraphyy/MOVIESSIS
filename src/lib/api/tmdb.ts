import axios from "axios";
import type { Movie } from "@/types/movie";

const tmdbApi = axios.create({
  baseURL: `${process.env.NEXT_APP_BASEURL}`,
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
