"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { COUPLE, DETAILS, WEDDING_DATE } from "@/lib/constants";
import { useCountdown } from "@/hooks/use-countdown";

export function Hero() {
  const { timeLeft, isMounted, isOver } = useCountdown(WEDDING_DATE);

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
        className="absolute inset-0 z-0 bg-cover bg-[center_30%] bg-no-repeat"
        style={{
          backgroundImage: "url('/img_main.jpg')",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(180, 106, 215, 0.18), rgba(250, 248, 251, 0.55))" }} />
        <div className="absolute inset-0 bg-black/10" style={{ boxShadow: "inset 0 0 150px rgba(0,0,0,0.5)" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-text mt-16 flex flex-col items-center justify-center min-h-screen pb-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <h2 className="font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-6 text-white drop-shadow-md">
            We are getting married
          </h2>
          
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 text-primary drop-shadow-sm leading-[1.1] overflow-visible px-[0.2em]">
            {COUPLE.groom} & {COUPLE.bride}
          </h1>
          
          <p className="font-serif text-lg md:text-xl mb-12 text-text">
            {DETAILS.dateStr} • {DETAILS.venue}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              size="lg"
              variant="outline"
              className="bg-surface/50 backdrop-blur-sm text-text border-primary/20 hover:bg-surface hover:text-primary transition-colors"
              onClick={() => scrollTo("#details")}
            >
              View Details
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-none shadow-md transition-colors"
              onClick={() => scrollTo("#rsvp")}
            >
              RSVP Now
            </Button>
          </div>

          {/* Countdown Integrated inside Hero */}
          {isMounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-2xl mx-auto"
            >
              {isOver ? (
                <div className="text-xl md:text-3xl font-script text-accent leading-[1.1] overflow-visible">
                  We&apos;re Getting Married Today!
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                      key={unit}
                      className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-surface/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/60"
                    >
                      <span className="text-2xl md:text-4xl font-serif text-primary">
                        {value}
                      </span>
                      <span className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest mt-1">
                        {unit}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
