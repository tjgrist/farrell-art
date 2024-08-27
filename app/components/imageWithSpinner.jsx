'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageWithSpinner = ({ src, alt, width, height, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithSpinner;