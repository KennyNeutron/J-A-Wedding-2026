"use client";

import { motion } from "framer-motion";
import { BIBLE_VERSES } from "@/lib/constants";

interface BibleVerseProps {
  index: number;
}

export function BibleVerse({ index }: BibleVerseProps) {
  const verse = BIBLE_VERSES[index];
  
  if (!verse) return null;

  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-text leading-relaxed mb-6">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <cite className="font-sans text-sm tracking-[0.2em] uppercase text-text-muted not-italic">
            — {verse.reference}
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
