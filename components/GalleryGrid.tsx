'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-lg">Galeria jest obecnie pusta.</p>
        <p className="text-sm text-gray-400 mt-2">Zdjęcia pojawią się tutaj wkrótce.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={image}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-all hover:shadow-md"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={`/gallery/${image}`}
              alt={`Zdjęcie z galerii ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                Powiększ
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)} // Click outside/on image to close
        >
          {/* Close button (visual aid, though clicking anywhere works) */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Zamknij"
          >
            <X size={32} />
          </button>

          <div className="relative h-full w-full max-h-[90vh] max-w-7xl flex items-center justify-center">
            <Image
              src={`/gallery/${selectedImage}`}
              alt="Powiększone zdjęcie"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
