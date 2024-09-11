"use client";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import images from "../lib/images";
import ImageWithSkeleton from "./imageWithSkeleton";

const processPhotos = () => 
  images.map((photo) => ({
    ...photo,
    src: photo.original,
  }));

const photos = processPhotos();

export default function PhotoAlbum() {

  return (
    <RowsPhotoAlbum
      photos={photos}
      render={{ image: (photo, context) => ImageWithSkeleton({...photo, ...context, showTitle: false}) }}
      skeleton={
        <div className="absolute top-30 bg-gray-200 animate-pulse rounded-md" />
      }
    />
  );
}
