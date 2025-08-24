"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatistikSection = () => {
  const [stats, setStats] = useState([
    { value: 0, label: "Total Movies" },
    { value: 0, label: "Total TV Shows" },
    { value: 0, label: "Total Hours Produced" },
    { value: 0, label: "Total Actors" },
  ]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const [moviesRes, tvRes, personsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`),
          fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`),
        ]);

        const moviesData = await moviesRes.json();
        const tvData = await tvRes.json();
        const personsData = await personsRes.json();

        setStats([
          { value: moviesData.total_results, label: "Total Movies" },
          { value: tvData.total_results, label: "Total TV Shows" },
          { value: tvData.total_results * 0.5, label: "Total Hours Produced" }, // contoh dummy perhitungan
          { value: personsData.total_results, label: "Total Actors" },
        ]);
      } catch (error) {
        console.error("Failed to fetch TMDB stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map(({ value, label }, index) => (
            <AnimatedStat key={index} value={value} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStat = ({ value, label }: { value: number; label: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center">
      {inView ? (
        <CountUp end={value} duration={2} separator="." className="text-4xl md:text-5xl font-bold" />
      ) : (
        <span className="text-4xl md:text-5xl font-bold">0</span>
      )}
      <span className="mt-2 text-sm md:text-base">{label}</span>
    </div>
  );
};

export default StatistikSection;
