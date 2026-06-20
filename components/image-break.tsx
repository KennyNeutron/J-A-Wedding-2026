"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageBreakProps {
  images: { src: string; alt: string }[];
  layout?: "single" | "duo" | "trio";
}

export function ImageBreak({ images, layout = "single" }: ImageBreakProps) {
  if (layout === "single") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/5" />
      </motion.div>
    );
  }

  if (layout === "duo") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 px-2 md:px-4 max-w-7xl mx-auto py-2">
        {images.slice(0, 2).map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </motion.div>
        ))}
      </div>
    );
  }

  // trio
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 px-2 md:px-4 max-w-7xl mx-auto py-2">
      {images.slice(0, 3).map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.6 }}
          className={`relative overflow-hidden rounded-2xl ${
            i === 0 && images.length === 3 ? "col-span-2 md:col-span-1 h-[35vh] md:h-[50vh]" : "h-[35vh] md:h-[50vh]"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </motion.div>
      ))}
    </div>
  );
}
