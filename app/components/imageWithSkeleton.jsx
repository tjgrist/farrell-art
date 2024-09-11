"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImageWithSkeleton = ({ src, alt, title, height, width, index, showTitle = true }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(
    () => {
      router.push(`/${alt}`);
    },
    [router, alt]
  );

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImageLoaded(true)}
        priority={index <= 10}
        className={`rounded-xs ${
          imageLoaded ? "opacity-100 cursor-pointer" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={handleClick}
      />
      {imageLoaded && showTitle && <div className="flex justify-center mt-2 text-gray-600">{title}</div>}
    </div>
  );
};

export default ImageWithSkeleton;
