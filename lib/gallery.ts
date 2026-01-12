import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
  try {
    const galleryDir = path.join(process.cwd(), 'public/gallery');

    // Ensure directory exists
    if (!fs.existsSync(galleryDir)) {
      console.warn(`Gallery directory not found at: ${galleryDir}`);
      return [];
    }

    const files = fs.readdirSync(galleryDir);

    // Filter for common image extensions and sort alphabetically
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b)); // Explicit alphabetical sort

    return images;
  } catch (error) {
    console.error("Error reading gallery images:", error);
    return [];
  }
}
