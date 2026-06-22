"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GalleryImage } from "@/lib/gallery";

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev! + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 400;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-bg-alt-3 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-accent block mb-2 overflow-visible">
            James & Angela
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Photo Gallery
          </h2>
          <p className="text-text-muted">A collection of our favorite moments</p>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-px bg-secondary/50" />
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4 md:mx-0"
          >
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.6, ease: "easeOut" }}
                className="relative flex-none w-[80vw] md:w-[400px] h-[50vh] md:h-[600px] snap-center rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 group/item"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover/item:scale-[1.03]"
                  sizes="(max-width: 768px) 80vw, 400px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex hover:bg-surface"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex hover:bg-surface"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
                }}
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! + 1) % images.length);
                }}
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-5xl h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
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
