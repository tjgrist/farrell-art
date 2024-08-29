import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export default async function getContentFromS3(fileName) {
    const client = new S3Client({
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
      },
    });
  
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `page-contents/${fileName}`,
    });
  
    try {
      const response = await client.send(command);
      return await response.Body.transformToString();
    } catch (error) {
      console.error("Error fetching content from S3:", error);
      return null;
    }
  }