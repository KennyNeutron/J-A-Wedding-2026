"use client";

import { motion } from "framer-motion";
import { STORY_MILESTONES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Story() {
  return (
    <section id="story" className="py-24 bg-soft-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Our Story</h2>
          <p className="text-text-muted">How two paths became one</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-secondary/50" />

          <div className="space-y-12 md:space-y-0">
            {STORY_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                  <div
                    className={cn(
                      "w-full md:w-5/12 bg-surface p-6 rounded-2xl shadow-sm border border-secondary/10",
                      isEven ? "md:text-right" : "md:text-left"
                    )}
                  >
                    <span className="font-script text-2xl text-accent block mb-2">
                      {milestone.date}
                    </span>
                    <h3 className="font-serif text-2xl text-text mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
