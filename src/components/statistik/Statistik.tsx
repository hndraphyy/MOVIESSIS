"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatistikProps {
  value: number;
  label: string;
}

const Statistik = ({ value, label }: StatistikProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center">
      {inView ? (
        <CountUp
          end={value}
          duration={2}
          separator="."
          className="text-4xl md:text-5xl font-bold"
        />
      ) : (
        <span className="text-4xl md:text-5xl font-bold">0</span>
      )}
      <span className="mt-2 text-sm md:text-base">{label}</span>
    </div>
  );
};

export default Statistik;
