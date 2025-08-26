import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_APP_BASEURL}/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_API_READ_ACCESS}`,
        },
        params: { language: "en-US", page: 1 },
      }
    );

    return NextResponse.json(res.data.results);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
