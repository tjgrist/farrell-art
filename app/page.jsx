import EmblaCarousel from "./components/carousel";
import imageData from "./lib/images"

function prepareSlides(imageData) {
  return imageData.map((image) => ({
    ...image,
    src: image.original,
    alt: image.alt,
  }));
}

export default async function Home() {
  const slides = prepareSlides(imageData);

  return (
    <main>
      <EmblaCarousel slides={slides} />
    </main>
  );
}