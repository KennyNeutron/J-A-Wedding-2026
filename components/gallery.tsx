"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev! + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-accent block mb-2">
            James & Angela
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Photo Gallery
          </h2>
          <p className="text-text-muted">A collection of our favorite moments</p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group break-inside-avoid shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative w-full" style={{ paddingBottom: index % 3 === 0 ? '150%' : '120%' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
                }}
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! + 1) % galleryImages.length);
                }}
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
