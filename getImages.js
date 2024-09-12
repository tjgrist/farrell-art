const { S3Client, ListObjectsV2Command, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const sharp = require('sharp');
const fs = require('fs').promises;

// Configure the S3 client
const s3Client = new S3Client({
  region: "us-east-1", // replace with your region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  },
});

const bucketName = "meegan-farrell-art-bucket"; // replace with your bucket name

async function getImageDimensions(imageBuffer) {
  const metadata = await sharp(imageBuffer).metadata();
  return { width: metadata.width, height: metadata.height };
}

function parseImageName(input) {
  const filename = input.split('/').pop();
  
  const withoutFileExtension = filename.replace(/\.[^/.]+$/, "");
  
  return withoutFileExtension;
}

function parseTitle(input) {
  const filename = input.split('/').pop();

  const withoutFileExtension = filename.replace(/\.[^/.]+$/, "");

  if (!/^\d{2}/.test(withoutFileExtension)) {
    return "";
  }
  
  // Remove leading digits
  const withoutDigits = withoutFileExtension.replace(/^\d+/, '');
  
  // Add space before capital letters, trim, and escape any existing quotes
  const parsed = withoutDigits.replace(/([A-Z])/g, ' $1').trim().replace(/"/g, '\\"');

  // Return the result wrapped in quotes
  return `"${parsed}"`;
}

async function getImagesMetadata() {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
  });

  const data = await s3Client.send(command);
  const images = [];

  for (const object of data.Contents) {
    if (object.Key.match(/\.(jpg|jpeg|png|gif)$/i)) {
      const getObjectCommand = new GetObjectCommand({
        Bucket: bucketName,
        Key: object.Key,
      });

      const url = await getSignedUrl(s3Client, getObjectCommand, { expiresIn: 3600 });
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { width, height } = await getImageDimensions(buffer);

      images.push({
        original: `https://${bucketName}.s3.amazonaws.com/${object.Key}`,
        src: `https://${bucketName}.s3.amazonaws.com/${object.Key}`,
        alt: parseImageName(object.Key),
        title: parseTitle(object.Key),
        width,
        height,
      });
    }
  }

  return images;
}

async function main() {
  try {
    console.log("Fetching image metadata...");
    const images = await getImagesMetadata();
    await fs.writeFile('imagesMetadata.json', JSON.stringify(images, null, 2));
    console.log('Image metadata has been saved to imagesMetadata.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();