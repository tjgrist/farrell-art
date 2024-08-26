/* 
Travis: put the name of the image here, give it a caption if you want, 
*/

import { getS3ImageUrl } from "./utils/s3ImageUrl";

const slideImages = [
  {
    original: "DSC00318.jpg",
    caption: "",
  },
  {
    original: "DSC00319.jpg",
    caption: "",
  },
  {
    original: "DSC00335.jpg",
    caption: "",
  },
  {
    original: "DSC00337.jpg",
    caption: "",
  },
  {
    original: "DSC00395.jpg",
    caption: "",
  },
  {
    original: "DSC00416.jpg",
    caption: "",
  },
  {
    original: "DSC00421.jpg",
    caption: "",
  },
  {
    original: "DSC00424.jpg",
    caption: "",
  },
  {
    original: "DSC00452.jpg",
    caption: "",
  },
  {
    original: "DSC00464.jpg",
    caption: "",
  },
  {
    original: "DSC00480.jpg",
    caption: "",
  },
  {
    original: "DSC00323.jpg",
    caption: "",
  },
  {
    original: "DSC00327.jpg",
    caption: "",
  },
  {
    original: "DSC00328.jpg",
    caption: "",
  },
  {
    original: "DSC00326.jpg",
    caption: "",
  },
  {
    original: "DSC00330.jpg",
    caption: "",
  },
  {
    original: "DSC00331.jpg",
    caption: "",
  },
  {
    original: "DSC00332.jpg",
    caption: "",
  },
  {
    original: "DSC00334.jpg",
    caption: "",
  },
  {
    original: "DSC00336.jpg",
    caption: "",
  },
  {
    original: "DSC00340.jpg",
    caption: "",
  },
  {
    original: "DSC00345.jpg",
    caption: "",
  },
  {
    original: "DSC00349.jpg",
    caption: "",
  },
  {
    original: "DSC00352.jpg",
    caption: "",
  },
  {
    original: "DSC00355.jpg",
    caption: "",
  },
  {
    original: "DSC00356.jpg",
    caption: "",
  },
  {
    original: "DSC00357.jpg",
    caption: "",
  },
  {
    original: "DSC00369.jpg",
    caption: "",
  },
  {
    original: "DSC00370.jpg",
    caption: "",
  },
  {
    original: "DSC00371.jpg",
    caption: "",
  },
  {
    original: "DSC00373.jpg",
    caption: "",
  },
  {
    original: "DSC00374.jpg",
    caption: "",
  },
  {
    original: "DSC00378.jpg",
    caption: "",
  },
  {
    original: "DSC00381.jpg",
    caption: "",
  },
  {
    original: "DSC00382.jpg",
    caption: "",
  },
  {
    original: "DSC00387.jpg",
    caption: "",
  },
  {
    original: "DSC00391.jpg",
    caption: "",
  },
  {
    original: "DSC00396.jpg",
    caption: "",
  },
  {
    original: "DSC00397.jpg",
    caption: "",
  },
  {
    original: "DSC00398.jpg",
    caption: "",
  },
  {
    original: "DSC00404.jpg",
    caption: "",
  },
  {
    original: "DSC00408.jpg",
    caption: "",
  },
  {
    original: "DSC00412.jpg",
    caption: "",
  },
  {
    original: "DSC00417.jpg",
    caption: "",
  },
  {
    original: "DSC00420.jpg",
    caption: "",
  },
  {
    original: "DSC00433.jpg",
    caption: "",
  },
  {
    original: "DSC00434.jpg",
    caption: "",
  },
  {
    original: "DSC00441.jpg",
    caption: "",
  },
  {
    original: "DSC00446.jpg",
    caption: "",
  },
  {
    original: "DSC00466.jpg",
    caption: "",
  },
  {
    original: "DSC00470.jpg",
    caption: "",
  },
  {
    original: "DSC00477.jpg",
    caption: "",
  },
  {
    original: "DSC00483.jpg",
    caption: "",
  },
  {
    original: "DSC00485.jpg",
    caption: "",
  },
  {
    original: "DSC00492.jpg",
    caption: "",
  },
  {
    original: "DSC00508.jpg",
    caption: "",
  },
  {
    original: "F665C9E7-F768-4A40-A31F-B3EF0F02FD5F.jpg",
    caption: "",
  },

  // ... add more images here by copying what's inside the curly brackets above  { .... } and pasting it on the next line
  // Add as many as you need, just be sure to edit the 'original', 'caption' properties.
  // Make sure the capitalization of 'jpg' matches that of the image you upload.
  // You can rename or delete the examples above by deleting everything in the 'curly brackets'.
];

const randomize = (array) => { 
  return array.sort(() => Math.random() - 0.5);
}

const createImages = () => {
  const randomized = randomize(slideImages);
  return randomized.map((i, idx) => { 
    const url = getS3ImageUrl(i.original);
    i.original = url;
    i.thumbnail = url;
    i.originalAlt = `Meegan Farrell original art piece ${idx + 1}`
    i.thumbnailAlt = `Meegan Farrell original art piece ${idx + 1}`
    i.originalTitle = i.original
    i.loading = idx === 0 ? "eager" : "lazy"
    i.thumbnailLoading = idx === 0 ? "eager" : "lazy"
    return i;
  });
};

export default createImages();
