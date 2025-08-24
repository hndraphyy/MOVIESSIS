"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[900px] w-full">
      {/* Hero Text */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-32 md:pt-40 lg:pt-48 px-4 text-center relative z-10">
        <h1 className="text-white font-semibold leading-tight lg:leading-[85px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          BRING YOUR FAVORITE MOVIES TO LIFE WITH
          <span className="text-primary"> MOVIESSIS</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-md md:text-lg max-w-4xl mx-auto pt-5">
          Dive into an amazing world of films, explore popular titles, trending
          hits, and upcoming releases—all in one place. Your next movie
          adventure starts here!
        </p>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 h-[450px] -z-10">
        {/* Gradient Shadow / Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-bgcolor/90 to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-bgcolor/90 to-transparent z-10" />

        <Image
          src="/assets/images/herosectionimg.webp"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="relative z-0"
          priority
        />
      </div>

      {/* Overlay Shadow / Gradient */}
    </section>
  );
};

export default HeroSection;
