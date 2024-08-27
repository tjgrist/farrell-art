"use client";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useRouter } from "next/navigation";
import images from "../lib/images";
import { useCallback } from "react";
import ImageSkeleton from "./imageSkeleton";

const photos = images.map((photo) => ({
  ...photo,
  src: photo.original,
}));

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
      render={{ image: (photo, context) => ImageSkeleton(photo, context) }}
      skeleton={
        <div className="absolute top-30 bg-gray-200 animate-pulse rounded-md" />
      }
    />
  );
}
