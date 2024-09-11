"use client";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import images from "../lib/images";
import ImageWithSkeleton from "./imageWithSkeleton";

export default function PhotoAlbum() {
  return (
    <RowsPhotoAlbum
      photos={images}
      render={{ image: (photo, context) => ImageWithSkeleton({...photo, ...context, showTitle: false}) }}
      skeleton={
        <div className="absolute top-30 bg-gray-200 animate-pulse rounded-md" />
      }
    />
  );
}
