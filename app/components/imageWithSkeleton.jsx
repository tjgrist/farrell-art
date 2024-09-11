"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import parseImageName from "../lib/parseImageName";

const ImageWithSkeleton = ({ src, title, height, width, index, showTitle = true }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      router.push(`/${e.target.alt}`);
    },
    [router]
  );

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
      )}
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        onLoad={() => setImageLoaded(true)}
        priority={index <= 10}
        className={`rounded-xs ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={handleClick}
      />
      {showTitle && <div className="flex justify-center mt-2 text-gray-600">{parseImageName(title)}</div>}
    </div>
  );
};

export default ImageWithSkeleton;
