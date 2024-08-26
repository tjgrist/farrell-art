import ImageGallery from "react-image-gallery";
import images from "./images";
import { BsArrowsFullscreen, BsFullscreenExit }from "react-icons/bs";

/*
          renderFullscreenButton={(onClick, isFullScreen) => (
            <div className="fullScreenButton">{isFullScreen ? <BsFullscreenExit style={{color: "white"}} onClick={onClick}/> : <BsArrowsFullscreen onClick={onClick}/>}</div>
          )}
*/

export default function Gallery() {
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
        />
      </div>
    </>
  );
}
