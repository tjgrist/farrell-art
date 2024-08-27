"use client";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { useRouter } from "next/navigation";
import photos from "../lib/images";
import { useCallback } from "react";

const images = photos.map((photo) => ({
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

  return <MasonryPhotoAlbum photos={images} onClick={handleClick} />;
}
