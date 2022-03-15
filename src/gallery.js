import ImageGallery from "react-image-gallery";
import images from "./images";

export default function Gallery() {
  return (
    <>
      <div className="slide-container">
        <ImageGallery
          showBullets={false}
          showPlayButton={false}
          showNav={false}
          items={images}
        />
      </div>
    </>
  );
}