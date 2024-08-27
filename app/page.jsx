import imageData from "./lib/images"
import Image from "next/image"

export default async function Home() {
  const imageName = process.env.NEXT_PUBLIC_IMAGE_NAME

  const randomImage = imageData[Math.floor(Math.random() * imageData.length)]

  const firstImage = imageData.find(i => i.title === imageName || randomImage );

  return (
    <main className="">
        <Image priority={true} src={firstImage.original} alt={firstImage.title} width={firstImage.width} height={firstImage.height} />
    </main>
  )
}