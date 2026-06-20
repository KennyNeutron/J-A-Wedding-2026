import fs from "node:fs";
import path from "node:path";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export function getGalleryImages(): GalleryImage[] {
  const imageDir = path.join(process.cwd(), "public/images");
  
  if (!fs.existsSync(imageDir)) {
    return [];
  }

  const files = fs.readdirSync(imageDir);
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  
  const images = files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return supportedExtensions.includes(ext);
    })
    .sort() // Sort alphabetically
    .map((file, index) => ({
      id: `img-${index}`,
      src: `/images/${file}`,
      alt: `James and Angela wedding photo ${index + 1}`,
    }));

  return images;
}
