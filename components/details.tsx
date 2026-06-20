"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { DETAILS } from "@/lib/constants";
import { Button } from "./ui/button";

export function Details() {
  const cards = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "When",
      content: DETAILS.dateStr,
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time",
      content: DETAILS.timeStr,
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Where",
      content: DETAILS.venue,
      subcontent: DETAILS.address,
    },
    {
      icon: <Shirt className="w-8 h-8 text-primary" />,
      title: "Dress Code",
      content: DETAILS.dressCode,
    },
  ];

  return (
    <section id="details" className="py-24 bg-surface">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Wedding Details</h2>
          <p className="text-text-muted">Everything you need to know</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-secondary/10"
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-full">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl mb-2">{card.title}</h3>
              <p className="text-text-muted font-medium">{card.content}</p>
              {card.subcontent && (
                <p className="text-text-muted text-sm mt-2 whitespace-pre-line">
                  {card.subcontent}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href={DETAILS.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
