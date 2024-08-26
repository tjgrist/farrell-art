import ImageGallery from "react-image-gallery";
import imageData from "./images";
import { useMemo } from "react";

// import { BsArrowsFullscreen, BsFullscreenExit }from "react-icons/bs";

/*
          renderFullscreenButton={(onClick, isFullScreen) => (
            <div className="fullScreenButton">{isFullScreen ? <BsFullscreenExit style={{color: "white"}} onClick={onClick}/> : <BsArrowsFullscreen onClick={onClick}/>}</div>
          )}
*/

export default function Gallery() {

  const handleClick = (e) => {
      e.preventDefault();
      window.open(e.target.title, '_blank', 'noopener,noreferrer');
  }

  const randomize = (array) => { 
    return array.sort(() => Math.random() - 0.5);
  }

  const images = useMemo(() => {
    const randomized = randomize(imageData);
    return randomized.map((i, idx) => { 
      i.originalAlt = `Meegan Farrell original art piece ${idx + 1}`
      i.thumbnailAlt = `Meegan Farrell original art piece ${idx + 1}`
      i.originalTitle = i.original
      i.loading = idx === 0 ? "eager" : "lazy"
      i.thumbnailLoading = idx === 0 ? "eager" : "lazy"
      i.originalWidth = null
      i.originalHeight = null
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
