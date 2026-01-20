"use client";
import React from "react";
import Image from "next/image";

interface GenreCardProps {
  title: string;
  imageUrl: string;
  onClick?: () => void;
  isPriority?: boolean;
}

const GenreCard: React.FC<GenreCardProps> = ({
  title,
  imageUrl,
  onClick,
  isPriority,
}) => {
  return (
    <div className="w-full px-1 py-2" onClick={onClick}>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={450}
        className="w-full rounded-lg  transform transition-transform duration-500 hover:scale-[1.02] "
        sizes="(max-width: 768px) 50vw, 33vw"
        priority={isPriority}
      />
      <p className="pt-3 text-[14px] md:text-base text-gray-300 font-medium truncate w-full">
        {title}
      </p>
    </div>
  );
};

export default GenreCard;
