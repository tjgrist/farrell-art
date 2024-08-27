"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageSkeleton = ({ src, title }, { height, width, index}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
      )}
      <Image
        src={src}
        alt={`Meegan Farrell original art piece ${title}`}
        width={width}
        height={height}
        onLoad={() => setImageLoaded(true)}
        priority={index <= 10}
        className={`rounded-xs ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </div>
  );
};

export default ImageSkeleton;
