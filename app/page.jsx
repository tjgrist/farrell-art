import EmblaCarousel from "./components/carousel";
import imageData from "./lib/images"

export default async function Home() {

  const slides = imageData.map((image) => ({
      ...image,
      src: image.original,
      alt: image.title,
  }));

  return (
    <main className="">
        <EmblaCarousel slides={slides} />
    </main>
  )
}