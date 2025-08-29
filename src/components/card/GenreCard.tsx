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
    <div className="w-full" onClick={onClick}>
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={1000}
        className="w-full rounded-lg"
        loading="lazy"
      />
      <div className="pt-3 text-white font-medium">{title}</div>
    </div>
  );
};

export default GenreCard;
