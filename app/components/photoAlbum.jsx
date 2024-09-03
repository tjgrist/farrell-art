"use client";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useRouter } from "next/navigation";
import images from "../lib/images";
import { useCallback } from "react";
import ImageWithSkeleton from "./imageWithSkeleton";

const processPhotos = () => 
  images.map((photo) => ({
    ...photo,
    src: photo.original,
  }));

const photos = processPhotos();

export default function Masonry() {
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      router.push(`/${e.photo.title}`);
    },
    [router]
  );
  return (
    <RowsPhotoAlbum
      photos={photos}
      onClick={handleClick}
      render={{ image: (photo, context) => ImageWithSkeleton({...photo, ...context}) }}
      skeleton={
        <div className="absolute top-30 bg-gray-200 animate-pulse rounded-md" />
      }
    />
  );
}
