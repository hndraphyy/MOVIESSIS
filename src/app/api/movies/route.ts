import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS}`,
      },
      params: { language: "en-US", page: 1 },
    });

    return NextResponse.json(res.data.results);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
