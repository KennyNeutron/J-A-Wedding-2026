"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { COUPLE, DETAILS } from "@/lib/constants";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img_main.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-6 drop-shadow-md">
            We are getting married
          </h2>
          
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-8 drop-shadow-lg">
            {COUPLE.groom} & {COUPLE.bride}
          </h1>
          
          <p className="font-serif text-xl md:text-2xl mb-12 drop-shadow-md">
            {DETAILS.dateStr} • {DETAILS.venue}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              onClick={() => scrollTo("#details")}
            >
              View Details
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-none"
              onClick={() => scrollTo("#rsvp")}
            >
              RSVP Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating flower decorations could go here */}
    </section>
  );
}
