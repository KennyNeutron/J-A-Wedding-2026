"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { WEDDING_DATE } from "@/lib/constants";
import { motion } from "framer-motion";

export function Countdown() {
  const { timeLeft, isMounted, isOver } = useCountdown(WEDDING_DATE);

  if (!isMounted) {
    return (
      <div className="py-20 text-center flex flex-col items-center min-h-[300px] justify-center bg-surface">
        <div className="animate-pulse flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-24 h-24 rounded-lg bg-secondary/30" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-surface" id="countdown">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-12">
            The Countdown
          </h2>

          {isOver ? (
            <div className="text-2xl md:text-4xl font-script text-accent">
              We&apos;re Getting Married Today!
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-background rounded-2xl shadow-sm border border-secondary/20"
                >
                  <span className="text-3xl md:text-5xl font-serif text-text">
                    {value}
                  </span>
                  <span className="text-xs md:text-sm text-text-muted uppercase tracking-widest mt-2">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
