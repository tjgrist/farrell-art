import { notFound } from "next/navigation";
import images from "../lib/images";
import ImageWithSkeleton from "../components/imageWithSkeleton";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const image = images.find((img) => img.title === slug);
  console.log("****", image);

  if (!image) {
    return {
      title: "Not Found",
      description: "The requested art piece could not be found.",
    };
  }

  return {
    title: `Meegan Farrell Art | ${slug}`,
    description: `Piece: ${slug} by Wisconsin artist Meegan Farrell.`,
  };
}

export default function ViewPiece({ params }) {
  const { slug } = params;
  const image = images.find((img) => img.title === slug);

  if (!image) {
    notFound();
  }

  return (
      <main>
          <ImageWithSkeleton
            src={image.original}
            alt={`Image ${slug}`}
            width={image.width}
            height={image.height}
            {...image}
            index={0}
          />
      </main>
  );
}

export async function generateStaticParams() {
  return images.map((image) => ({
    slug: image.title,
  }));
}
