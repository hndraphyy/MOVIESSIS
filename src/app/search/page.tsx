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
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-24 md:py-28 px-4 text-center relative z-10 w-full">
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">
            {query ? "No results found." : "Enter search keywords."}
          </p>
        )}
      </div>
    </section>
  );
}
