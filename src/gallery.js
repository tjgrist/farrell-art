import ImageGallery from "react-image-gallery";
import imageData from "./images";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Gallery() {
  const router = useRouter();
  const [processedImages, setProcessedImages] = useState(imageData);

  useEffect(() => {
    const randomize = (array) => array.sort(() => Math.random() - 0.5);
    const randomizedImages = randomize([...imageData]);

    const processedImages = randomizedImages.map((i, idx) => ({
      ...i,
      thumbnail: i.original,
      originalAlt: `Meegan Farrell original art piece ${idx + 1}`,
      thumbnailAlt: `Meegan Farrell original art piece ${idx + 1}`,
      originalTitle: i.slug,
      loading: idx === 0 ? "eager" : "lazy",
      thumbnailLoading: idx === 0 ? "eager" : "lazy",
    }));

    setProcessedImages(processedImages);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const title = e.target.getAttribute("title");
    router.push(`/${title}`);
  };

  return (
    <div className="slide-container">
      <ImageGallery
        showBullets={false}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        items={processedImages}
        lazyLoad={false}
        thumbnailPosition="top"
        onClick={handleClick}
      />
    </div>
  );
}
