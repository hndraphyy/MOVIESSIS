"use client";

import { useEffect, useState } from "react";
import Statistik from "@/components/statistik/Statistik";
import { fetchFromTMDB } from "@/lib/api/tmdb";

interface Stat {
  value: number;
  label: string;
}

const StatistikSection = () => {
  const [stats, setStats] = useState<Stat[]>([
    { value: 0, label: "Total Movies" },
    { value: 0, label: "Total TV Shows" },
    { value: 0, label: "Total Hours Produced" },
    { value: 0, label: "Total Actors" },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [moviesData, tvData, personsData] = await Promise.all([
          fetchFromTMDB("movie/popular"),
          fetchFromTMDB("tv/popular"),
          fetchFromTMDB("person/popular"),
        ]);

        setStats([
          { value: moviesData.total_results, label: "Total Movies" },
          { value: tvData.total_results, label: "Total TV Shows" },
          { value: Math.floor(tvData.total_results * 0.5), label: "Total Hours Produced" },
          { value: personsData.total_results, label: "Total Actors" },
        ]);
      } catch (error) {
        console.error("Failed to fetch TMDB stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <Statistik key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikSection;
