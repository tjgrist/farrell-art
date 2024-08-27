const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
const region = process.env.NEXT_PUBLIC_S3_REGION;
const s3url = `https://${bucketName}.s3.${region}.amazonaws.com`;

const slideImages = [
  {
    original: `${s3url}/F665C9E7-F768-4A40-A31F-B3EF0F02FD5F.jpg`,
    caption: "",
    title: "F665C9E7-F768-4A40-A31F-B3EF0F02FD5F"
  },
  {
    original: `${s3url}/DSC00318.jpg`,
    caption: "",
    title: "DSC00318"
  },
  {
    original: `${s3url}/DSC00319.jpg`,
    caption: "",
    title: "DSC00319"
  },
  {
    original: `${s3url}/DSC00335.jpg`,
    caption: "",
    title: "DSC00335"
  },
  {
    original: `${s3url}/DSC00337.jpg`,
    caption: "",
    title: "DSC00337"
  },
  {
    original: `${s3url}/DSC00395.jpg`,
    caption: "",
    title: "DSC00395"
  },
  {
    original: `${s3url}/DSC00416.jpg`,
    caption: "",
    title: "DSC00416"
  },
  {
    original: `${s3url}/DSC00421.jpg`,
    caption: "",
    title: "DSC00421"
  },
  {
    original: `${s3url}/DSC00424.jpg`,
    caption: "",
    title: "DSC00424"
  },
  {
    original: `${s3url}/DSC00452.jpg`,
    caption: "",
    title: "DSC00452"
  },
  {
    original: `${s3url}/DSC00464.jpg`,
    caption: "",
    title: "DSC00464"
  },
  {
    original: `${s3url}/DSC00480.jpg`,
    caption: "",
    title: "DSC00480"
  },
  {
    original: `${s3url}/DSC00323.jpg`,
    caption: "",
    title: "DSC00323"
  },
  {
    original: `${s3url}/DSC00327.jpg`,
    caption: "",
    title: "DSC00327"
  },
  {
    original: `${s3url}/DSC00328.jpg`,
    caption: "",
    title: "DSC00328"
  },
  {
    original: `${s3url}/DSC00326.jpg`,
    caption: "",
    title: "DSC00326"
  },
  {
    original: `${s3url}/DSC00330.jpg`,
    caption: "",
    title: "DSC00330"
  },
  {
    original: `${s3url}/DSC00331.jpg`,
    caption: "",
    title: "DSC00331"
  },
  {
    original: `${s3url}/DSC00332.jpg`,
    caption: "",
    title: "DSC00332"
  },
  {
    original: `${s3url}/DSC00334.jpg`,
    caption: "",
    title: "DSC00334"
  },
  {
    original: `${s3url}/DSC00336.jpg`,
    caption: "",
    title: "DSC00336"
  },
  {
    original: `${s3url}/DSC00340.jpg`,
    caption: "",
    title: "DSC00340"
  },
  {
    original: `${s3url}/DSC00345.jpg`,
    caption: "",
    title: "DSC00345"
  },
  {
    original: `${s3url}/DSC00349.jpg`,
    caption: "",
    title: "DSC00349"
  },
  {
    original: `${s3url}/DSC00352.jpg`,
    caption: "",
    title: "DSC00352"
  },
  {
    original: `${s3url}/DSC00355.jpg`,
    caption: "",
    title: "DSC00355"
  },
  {
    original: `${s3url}/DSC00356.jpg`,
    caption: "",
    title: "DSC00356"
  },
  {
    original: `${s3url}/DSC00357.jpg`,
    caption: "",
    title: "DSC00357"
  },
  {
    original: `${s3url}/DSC00369.jpg`,
    caption: "",
    title: "DSC00369"
  },
  {
    original: `${s3url}/DSC00370.jpg`,
    caption: "",
    title: "DSC00370"
  },
  {
    original: `${s3url}/DSC00371.jpg`,
    caption: "",
    title: "DSC00371"
  },
  {
    original: `${s3url}/DSC00373.jpg`,
    caption: "",
    title: "DSC00373"
  },
  {
    original: `${s3url}/DSC00374.jpg`,
    caption: "",
    title: "DSC00374"
  },
  {
    original: `${s3url}/DSC00378.jpg`,
    caption: "",
    title: "DSC00378"
  },
  {
    original: `${s3url}/DSC00381.jpg`,
    caption: "",
    title: "DSC00381"
  },
  {
    original: `${s3url}/DSC00382.jpg`,
    caption: "",
    title: "DSC00382"
  },
  {
    original: `${s3url}/DSC00387.jpg`,
    caption: "",
    title: "DSC00387"
  },
  {
    original: `${s3url}/DSC00391.jpg`,
    caption: "",
    title: "DSC00391"
  },
  {
    original: `${s3url}/DSC00396.jpg`,
    caption: "",
    title: "DSC00396"
  },
  {
    original: `${s3url}/DSC00397.jpg`,
    caption: "",
    title: "DSC00397"
  },
  {
    original: `${s3url}/DSC00398.jpg`,
    caption: "",
    title: "DSC00398"
  },
  {
    original: `${s3url}/DSC00404.jpg`,
    caption: "",
    title: "DSC00404"
  },
  {
    original: `${s3url}/DSC00408.jpg`,
    caption: "",
    title: "DSC00408"
  },
  {
    original: `${s3url}/DSC00412.jpg`,
    caption: "",
    title: "DSC00412"
  },
  {
    original: `${s3url}/DSC00417.jpg`,
    caption: "",
    title: "DSC00417"
  },
  {
    original: `${s3url}/DSC00420.jpg`,
    caption: "",
    title: "DSC00420"
  },
  {
    original: `${s3url}/DSC00433.jpg`,
    caption: "",
    title: "DSC00433"
  },
  {
    original: `${s3url}/DSC00434.jpg`,
    caption: "",
    title: "DSC00434"
  },
  {
    original: `${s3url}/DSC00441.jpg`,
    caption: "",
    title: "DSC00441"
  },
  {
    original: `${s3url}/DSC00446.jpg`,
    caption: "",
    title: "DSC00446"
  },
  {
    original: `${s3url}/DSC00466.jpg`,
    caption: "",
    title: "DSC00466"
  },
  {
    original: `${s3url}/DSC00470.jpg`,
    caption: "",
    title: "DSC00470"
  },
  {
    original: `${s3url}/DSC00477.jpg`,
    caption: "",
    title: "DSC00477"
  },
  {
    original: `${s3url}/DSC00483.jpg`,
    caption: "",
    title: "DSC00483"
  },
  {
    original: `${s3url}/DSC00485.jpg`,
    caption: "",
    title: "DSC00485"
  },
  {
    original: `${s3url}/DSC00492.jpg`,
    caption: "",
    title: "DSC00492"
  },
  {
    original: `${s3url}/DSC00508.jpg`,
    caption: "",
    title: "DSC00508"
  },
  {
    original: `${s3url}/IMG_3064-2.jpg`,
    caption: "",
    title: "IMG_3064-2"
  },
];

export default slideImages;