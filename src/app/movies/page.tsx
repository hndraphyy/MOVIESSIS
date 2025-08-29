import FilmSection from "@/components/sections/movies/FilmSection";

const genres = [
  { title: "Action", key: "action" },
  { title: "Comedy", key: "comedy" },
  { title: "Drama", key: "drama" },
  { title: "Horror", key: "horror" },
];

export default function PopularPage() {
  return (
    <main className="bg-gray-900 min-h-screen py-20 md:py-24">
      {genres.map((g) => (
        <FilmSection key={g.key} title={`${g.title} Movies`} genre={g.key} />
      ))}
    </main>
  );
}
