import imagesMetadata from "../imagesMetadata.json";

const imageData = imagesMetadata.map(img => ({
  ...img,
  thumbnail: img.original,
  caption: img.title,
  title: img.title,
}));

export default imageData;