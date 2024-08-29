import EmblaCarousel from "./components/carousel";
import imageData from "./lib/images"
import Image from "next/image"

export default async function Home() {
  const imageName = process.env.NEXT_PUBLIC_IMAGE_NAME

  const randomImage = imageData[Math.floor(Math.random() * imageData.length)]

  let firstImage = imageData.find(i => i.title === imageName);

  if (!firstImage) {
    firstImage = randomImage
  }

  const slides = imageData.map((image) => ({
      ...image,
      src: image.original,
      alt: image.title,
  }));

  // put the firstImage at the start of slides 
  const firstImageIndex = slides.findIndex(i => i.title === firstImage.title)

  return (
    <main className="">
        <EmblaCarousel slides={slides} startIndex={firstImageIndex} />
    </main>
  )
}