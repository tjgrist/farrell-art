/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import ImageGallery from "react-image-gallery";
import { useRouter } from "next/router";

export default function Gallery({ initialProcessedImages }) {
  const router = useRouter();

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const title = e.target.getAttribute("title");
    router.push(`/${title}`);
  }, [router]);

  const renderItem = useCallback((item) => {
    return (
      <div className="image-gallery-image">
        <img
          title={item.title}
          src={item.original}
          alt={item.originalAlt}
          loading={item.loading}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }, []);

  const renderThumbInner = useCallback((item) => {
    return (
      <div className="image-gallery-thumbnail-inner">
        <img
          title={item.title}
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          loading={item.thumbnailLoading}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }, []);

  return (
    <div className="slide-container">
      <ImageGallery
        showBullets={false}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        items={initialProcessedImages}
        renderItem={renderItem}
        renderThumbInner={renderThumbInner}
        thumbnailPosition="top"
        onClick={handleClick}
      />
    </div>
  );
}