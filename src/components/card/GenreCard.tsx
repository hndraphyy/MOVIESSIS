"use client";
import React from "react";
import Image from "next/image";

interface GenreCardProps {
  title: string;
  imageUrl: string;
  onClick?: () => void;
}

const GenreCard: React.FC<GenreCardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div className="w-full px-1 py-2" onClick={onClick}>
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={1000}
        className="w-full rounded-lg  transform transition-transform duration-500 hover:scale-[1.02] "
        loading="lazy"
      />
      <p className="pt-3 text-[14px] md:text-base text-gray-300 font-medium">{title}</p>
    </div>
  );
};

export default GenreCard;
