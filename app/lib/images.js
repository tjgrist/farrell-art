import imagesMetadata from "../../imagesMetadata.json";

const imageData = imagesMetadata.map(img => ({
  ...img,
}));

export default imageData; 