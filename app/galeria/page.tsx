import { getGalleryImages } from '@/lib/gallery';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Galeria | MCB',
  description: 'Galeria zdjęć Multidyscyplinarnego Centrum Badawczego UKSW. Zobacz naszą infrastrukturę i wydarzenia.',
};

export const revalidate = 0;

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Galeria
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Zapraszamy do obejrzenia zdjęć naszej infrastruktury, laboratoriów oraz relacji z wydarzeń.
          </p>
        </div>

        <GalleryGrid images={images} />
      </div>
    </div>
  );
}
