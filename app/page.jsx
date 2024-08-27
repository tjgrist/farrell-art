import imageData from "./lib/images"
import Image from "next/image"

export default async function Home() {
  const imageName = process.env.NEXT_PUBLIC_IMAGE_NAME

  const randomImage = imageData[Math.floor(Math.random() * imageData.length)]

  let firstImage = imageData.find(i => i.title === imageName);

  if (!firstImage) {
    firstImage = randomImage
  }

  return (
    <main className="">
        <Image priority={true} src={firstImage.original} alt={firstImage.title} width={firstImage.width} height={firstImage.height} />
    </main>
  )
}