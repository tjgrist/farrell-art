import Image from 'next/image';
import { notFound } from 'next/navigation';
import images from '../lib/images';
import ImageWithSpinner from '../components/imageWithSpinner';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const image = images.find(img => img.title === slug);

  if (!image) {
    return {
      title: 'Not Found',
      description: 'The requested art piece could not be found.',
    };
  }

  return {
    title: `Meegan Farrell Art | ${slug}`,
    description: `Piece: ${slug} by Wisconsin artist Meegan Farrell.`,
  };
}

export default function ViewPiece({ params }) {
  const { slug } = params;
  const image = images.find(img => img.title === slug);

  if (!image) {
    notFound();
  }

  return (
    <div>
      <main>
        <div>
          <ImageWithSpinner
            src={image.original}
            alt={`Image ${slug}`}
            width={image.width}
            height={image.height}
          />
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return images.map((image) => ({
    slug: image.title,
  }));
}