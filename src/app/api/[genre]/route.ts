import { NextRequest, NextResponse } from "next/server";
import { getMoviesByGenre, GENRES } from "@/lib/api/tmdb";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ genre: string }> } // <== harus Promise
) {
  try {
    const { genre } = await context.params; // ambil genre dari Promise

    const formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
    const genreId = GENRES[formattedGenre];

    if (!genreId) {
      return NextResponse.json(
        { error: "Invalid genre. Available: Comedy, Horror, Drama, Action" },
        { status: 400 }
      );
    }

    const movies = await getMoviesByGenre(genreId);
    return NextResponse.json(movies, { status: 200 });
  } catch (err) {
    console.error("Error fetching movies by genre:", err);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}
