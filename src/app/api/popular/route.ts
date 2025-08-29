import { NextResponse } from "next/server";
import { getPopularMovies } from "@/lib/api/tmdb";

export async function GET() {
  try {
    const movies = await getPopularMovies();
    return NextResponse.json(movies);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
