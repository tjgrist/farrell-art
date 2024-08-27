'use client';

import { useCallback } from "react";
import ImageGallery from "react-image-gallery";
import { useRouter } from "next/navigation";

export default function Gallery({ initialProcessedImages }) {
  const router = useRouter();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const title = e.target.getAttribute("title");
    router.push(`/${title}`);
  }, [router]);

  return (
    <div className="slide-container">
      <ImageGallery
        showBullets={false}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        items={initialProcessedImages}
        thumbnailPosition="top"
        onClick={handleClick}
      />
    </div>
  );
}