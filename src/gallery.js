import ImageGallery from "react-image-gallery";
import createImages from "./images";

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

  return (
    <>
      <div className="slide-container">
        <ImageGallery
          showBullets={false}
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
          items={createImages}
          lazyLoad={false}
          thumbnailPosition="top"
          onClick={handleClick}
        />
      </div>
    </>
  );
}
