import { searchMovie } from "@/lib/api/tmdb";
import MovieCard from "@/components/card/MovieCard";
import { Movie } from "@/types/movie";

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.query?.trim() || "";
  let results: Movie[] = [];

  if (query) {
    try {
      results = await searchMovie(query);
    } catch (err) {
      console.error("Search error:", err);
    }
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto py-24 md:py-28 px-4 text-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {results.length > 0 ? (
            results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-gray-500 col-span-full">
              {query
                ? "Tidak ada hasil ditemukan."
                : "Masukkan kata kunci pencarian."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
