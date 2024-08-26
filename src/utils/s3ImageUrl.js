// utils/s3ImageUrl.js

export function getS3ImageUrl(imageName) {
    const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
    const region = process.env.NEXT_PUBLIC_S3_REGION;
    return `https://${bucketName}.s3.${region}.amazonaws.com/${imageName}`;
  }