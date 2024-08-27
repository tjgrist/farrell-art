// import Gallery from "./components/slider"
import imageData from "./lib/images"
import Image from "next/image"

// async function getInitialProcessedImages() {
//   const initialProcessedImages = imageData.map((i, idx) => ({
//     ...i,
//     thumbnail: i.original,
//     originalAlt: `Meegan Farrell original art piece ${idx + 1}`,
//     thumbnailAlt: `Meegan Farrell original art piece ${idx + 1}`,
//     originalTitle: i.title,
//     loading: idx === 0 ? "eager" : "lazy",
//     thumbnailLoading: idx === 0 ? "eager" : "lazy",
//   }))

//   return initialProcessedImages
// }

export default async function Home() {
//   const initialProcessedImages = await getInitialProcessedImages()

  const firstImage = imageData.find((i) => i.title === "DSC00408")

  return (
    <main className="">
        <Image priority={true} src={firstImage.original} alt={firstImage.title} width={firstImage.width} height={firstImage.height} />
      {/* <Gallery initialProcessedImages={initialProcessedImages} /> */}
    </main>
  )
}