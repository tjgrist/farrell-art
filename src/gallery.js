import ImageGallery from "react-image-gallery";
import imageData from "./images";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Gallery() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const title = e.target.getAttribute("title");
    router.push(`/${title}`);
  };

  const randomize = (array) => { 
    return array.sort(() => Math.random() - 0.5);
  }
  
  const images = useMemo(() => {
    const randomized = randomize(imageData);
    return randomized.map((i, idx) => { 
      i.thumbnail = i.original;
      i.originalAlt = `Meegan Farrell original art piece ${idx + 1}`
      i.thumbnailAlt = `Meegan Farrell original art piece ${idx + 1}`
      i.originalTitle = i.slug
      i.loading = idx === 0 ? "eager" : "lazy"
      i.thumbnailLoading = idx === 0 ? "eager" : "lazy"
      return i;
    });
  }, []);

  return (
    <>
      <div className="slide-container">
        <ImageGallery
          showBullets={false}
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
          items={images}
          lazyLoad={false}
          thumbnailPosition="top"
          onClick={handleClick}
        />
      </div>
    </>
  );
}
