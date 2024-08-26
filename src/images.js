/* 
Travis: put the name of the image here, give it a caption if you want, 
and get it's height and width properties by right-clicking and looking at the images 'Properties' on Windows,
or right-clicking and then 'Get Info' on Mac
*/

import { getS3ImageUrl } from "./utils/s3ImageUrl";

const slideImages = [
  {
    original: "DSC00318.jpg",
    thumbnail: "DSC00318.jpg",
    caption: "",
    originalWidth: 3161,
    originalHeight: 2118,
  },
  {
    original: "DSC00319.jpg",
    thumbnail: "DSC00319.jpg",
    caption: "",
    originalWidth: 2806,
    originalHeight: 1849,
  },
  {
    original: "DSC00335.jpg",
    thumbnail: "DSC00335.jpg",
    caption: "",
    originalWidth: 2867,
    originalHeight: 2125,
  },
  {
    original: "DSC00337.jpg",
    thumbnail: "DSC00337.jpg",
    caption: "",
    originalWidth: 2963,
    originalHeight: 2209,
  },
  {
    original: "DSC00395.jpg",
    thumbnail: "DSC00395.jpg",
    caption: "",
    originalWidth: 2823,
    originalHeight: 2220,
  },
  {
    original: "DSC00416.jpg",
    thumbnail: "DSC00416.jpg",
    caption: "",
    originalWidth: 3128,
    originalHeight: 3806,
  },
  {
    original: "DSC00421.jpg",
    thumbnail: "DSC00421.jpg",
    caption: "",
    originalWidth: 4083,
    originalHeight: 3028,
  },
  {
    original: "DSC00424.jpg",
    thumbnail: "DSC00424.jpg",
    caption: "",
    originalWidth: 4326,
    originalHeight: 3179,
  },
  {
    original: "DSC00452.jpg",
    thumbnail: "DSC00452.jpg",
    caption: "",
    originalWidth: 2005,
    originalHeight: 2187,
  },
  {
    original: "DSC00464.jpg",
    thumbnail: "DSC00464.jpg",
    caption: "",
    originalWidth: 2359,
    originalHeight: 2208,
  },
  {
    original: "DSC00480.jpg",
    thumbnail: "DSC00480.jpg",
    caption: "",
    originalWidth: 2820,
    originalHeight: 2201,
  },
  {
    original: "DSC00323.jpg",
    thumbnail: "DSC00323.jpg",
    caption: "",
    originalWidth: 3967,
    originalHeight: 2647,
  },
  {
    original: "DSC00327.jpg",
    thumbnail: "DSC00327.jpg",
    caption: "",
    originalWidth: 2962,
    originalHeight: 2552,
  },
  {
    original: "DSC00328.jpg",
    thumbnail: "DSC00328.jpg",
    caption: "",
    originalWidth: 2905,
    originalHeight: 2249,
  },
  {
    original: "DSC00326.jpg",
    thumbnail: "DSC00326.jpg",
    caption: "",
    originalWidth: 3160,
    originalHeight: 2318,
  },
  {
    original: "DSC00330.jpg",
    thumbnail: "DSC00330.jpg",
    caption: "",
    originalWidth: 1981,
    originalHeight: 2687,
  },
  {
    original: "DSC00331.jpg",
    thumbnail: "DSC00331.jpg",
    caption: "",
    originalWidth: 2556,
    originalHeight: 3435,
  },
  {
    original: "DSC00332.jpg",
    thumbnail: "DSC00332.jpg",
    caption: "",
    originalWidth: 2238,
    originalHeight: 3032,
  },
  {
    original: "DSC00334.jpg",
    thumbnail: "DSC00334.jpg",
    caption: "",
    originalWidth: 2836,
    originalHeight: 2107,
  },
  {
    original: "DSC00336.jpg",
    thumbnail: "DSC00336.jpg",
    caption: "",
    originalWidth: 2918,
    originalHeight: 2476,
  },
  {
    original: "DSC00340.jpg",
    thumbnail: "DSC00340.jpg",
    caption: "",
    originalWidth: 3057,
    originalHeight: 2499,
  },
  {
    original: "DSC00345.jpg",
    thumbnail: "DSC00345.jpg",
    caption: "",
    originalWidth: 2840,
    originalHeight: 2105,
  },
  {
    original: "DSC00349.jpg",
    thumbnail: "DSC00349.jpg",
    caption: "",
    originalWidth: 1824,
    originalHeight: 2283,
  },
  {
    original: "DSC00352.jpg",
    thumbnail: "DSC00352.jpg",
    caption: "",
    originalWidth: 2329,
    originalHeight: 3105,
  },
  {
    original: "DSC00355.jpg",
    thumbnail: "DSC00355.jpg",
    caption: "",
    originalWidth: 2269,
    originalHeight: 1738,
  },
  {
    original: "DSC00356.jpg",
    thumbnail: "DSC00356.jpg",
    caption: "",
    originalWidth: 2789,
    originalHeight: 3580,
  },
  {
    original: "DSC00357.jpg",
    thumbnail: "DSC00357.jpg",
    caption: "",
    originalWidth: 2903,
    originalHeight: 3899,
  },
  {
    original: "DSC00369.jpg",
    thumbnail: "DSC00369.jpg",
    caption: "",
    originalWidth: 3104,
    originalHeight: 2340,
  },
  {
    original: "DSC00370.jpg",
    thumbnail: "DSC00370.jpg",
    caption: "",
    originalWidth: 3159,
    originalHeight: 2354,
  },
  {
    original: "DSC00371.jpg",
    thumbnail: "DSC00371.jpg",
    caption: "",
    originalWidth: 3450,
    originalHeight: 2354,
  },
  {
    original: "DSC00373.jpg",
    thumbnail: "DSC00373.jpg",
    caption: "",
    originalWidth: 3239,
    originalHeight: 2484,
  },
  {
    original: "DSC00374.jpg",
    thumbnail: "DSC00374.jpg",
    caption: "",
    originalWidth: 3523,
    originalHeight: 2533,
  },
  {
    original: "DSC00378.jpg",
    thumbnail: "DSC00378.jpg",
    caption: "",
    originalWidth: 3867,
    originalHeight: 2753,
  },
  {
    original: "DSC00381.jpg",
    thumbnail: "DSC00381.jpg",
    caption: "",
    originalWidth: 1544,
    originalHeight: 2317,
  },
  {
    original: "DSC00382.jpg",
    thumbnail: "DSC00382.jpg",
    caption: "",
    originalWidth: 1547,
    originalHeight: 2353,
  },
  {
    original: "DSC00387.jpg",
    thumbnail: "DSC00387.jpg ",
    caption: "",
    originalWidth: 2835,
    originalHeight: 1959,
  },
  {
    original: "DSC00391.jpg",
    thumbnail: "DSC00391.jpg",
    caption: "",
    originalWidth: 1910,
    originalHeight: 2822,
  },
  {
    original: "DSC00396.jpg",
    thumbnail: "DSC00396.jpg",
    caption: "",
    originalWidth: 1532,
    originalHeight: 1696,
  },
  {
    original: "DSC00397.jpg",
    thumbnail: "DSC00397.jpg",
    caption: "",
    originalWidth: 2221,
    originalHeight: 2562,
  },
  {
    original: "DSC00398.jpg",
    thumbnail: "DSC00398.jpg",
    caption: "",
    originalWidth: 1838,
    originalHeight: 2022,
  },
  {
    original: "DSC00404.jpg",
    thumbnail: "DSC00404.jpg",
    caption: "",
    originalWidth: 3018,
    originalHeight: 2221,
  },
  {
    original: "DSC00408.jpg",
    thumbnail: "DSC00408.jpg",
    caption: "",
    originalWidth: 2838,
    originalHeight: 2178,
  },
  {
    original: "DSC00412.jpg",
    thumbnail: "DSC00412.jpg",
    caption: "",
    originalWidth: 2969,
    originalHeight: 2420,
  },
  {
    original: "DSC00417.jpg",
    thumbnail: "DSC00417.jpg",
    caption: "",
    originalWidth: 2988,
    originalHeight: 4357,
  },
  {
    original: "DSC00420.jpg",
    thumbnail: "DSC00420.jpg",
    caption: "",
    originalWidth: 2955,
    originalHeight: 3755,
  },
  {
    original: "DSC00433.jpg",
    thumbnail: "DSC00433.jpg",
    caption: "",
    originalWidth: 4350,
    originalHeight: 3025,
  },
  {
    original: "DSC00434.jpg",
    thumbnail: "DSC00434.jpg",
    caption: "",
    originalWidth: 3245,
    originalHeight: 2276,
  },
  {
    original: "DSC00441.jpg",
    thumbnail: "DSC00441.jpg",
    caption: "",
    originalWidth: 3195,
    originalHeight: 3144,
  },
  {
    original: "DSC00446.jpg",
    thumbnail: "DSC00446.jpg",
    caption: "",
    originalWidth: 3040,
    originalHeight: 3142,
  },
  {
    original: "DSC00466.jpg",
    thumbnail: "DSC00466.jpg",
    caption: "",
    originalWidth: 2676,
    originalHeight: 2473,
  },
  {
    original: "DSC00470.jpg",
    thumbnail: "DSC00470.jpg",
    caption: "",
    originalWidth: 3489,
    originalHeight: 3205,
  },
  {
    original: "DSC00477.jpg",
    thumbnail: "DSC00477.jpg",
    caption: "",
    originalWidth: 3491,
    originalHeight: 2404,
  },
  {
    original: "DSC00483.jpg",
    thumbnail: "DSC00483.jpg",
    caption: "",
    originalWidth: 3084,
    originalHeight: 2791,
  },
  {
    original: "DSC00485.jpg",
    thumbnail: "DSC00485.jpg",
    caption: "",
    originalWidth: 3422,
    originalHeight: 2492,
  },
  {
    original: "DSC00492.jpg",
    thumbnail: "DSC00492.jpg",
    caption: "",
    originalWidth: 3937,
    originalHeight: 2884,
  },
  {
    original: "DSC00508.jpg",
    thumbnail: "DSC00508.jpg",
    caption: "",
    originalWidth: 3161,
    originalHeight: 3860,
  },
  {
    original: "F665C9E7-F768-4A40-A31F-B3EF0F02FD5F.jpg",
    thumbnail: "F665C9E7-F768-4A40-A31F-B3EF0F02FD5F.jpg",
    caption: "",
    originalWidth: 900,
    originalHeight: 646,
  },

  // ... add more images here by copying what's inside the curly brackets above  { .... } and pasting it on the next line
  // Add as many as you need, just be sure to edit the 'original', 'thumbnail', 'caption', 'originalWidth', and 'originalHeight' properties.
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
    i.originalWidth = null
    i.originalHeight = null
    return i;
  });
};

export default createImages();
