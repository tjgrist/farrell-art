import { notFound } from "next/navigation";
import images from "../lib/images";
import ImageWithSkeleton from "../components/imageWithSkeleton";

function getImage(slug) { return images.find((img) => img.title.includes(slug)) };

export async function generateMetadata({ params }) {
  const { slug } = params;
  const image = getImage(slug);

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
  const image = getImage(slug);

  if (!image) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center">
      <main className="w-full">
        <div className="flex justify-center">
          <ImageWithSkeleton
            src={image.original}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image}
            index={0}
          />
        </div>
      </main>
    </div>
  );
}

// export async function generateStaticParams() {
//   return images.map((image) => ({
//     slug: image.title,
//   }));
// }
