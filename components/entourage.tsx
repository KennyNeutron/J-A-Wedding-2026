"use client";

import { motion } from "framer-motion";
import { ENTOURAGE } from "@/lib/constants";

export function Entourage() {
  const sections = [
    { title: "Officiating Pastor", names: ENTOURAGE.officiatingPastor, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Groom's Parents", names: ENTOURAGE.groomsParents, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Bride's Parents", names: ENTOURAGE.bridesParents, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Principal Sponsors", names: ENTOURAGE.principalSponsors, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Best Man", names: ENTOURAGE.bestMan, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Maid of Honor", names: ENTOURAGE.maidOfHonor, subtitle: undefined, isBridalParty: false, columns: undefined },
    { title: "Secondary Sponsors", names: ENTOURAGE.secondarySponsors, subtitle: undefined, isBridalParty: false, columns: undefined },
    {
      title: "To Guide us on our Way Ahead",
      names: [] as string[],
      subtitle: undefined,
      isBridalParty: true,
      columns: [
        { title: "Groomsmen", names: ENTOURAGE.groomsmen },
        { title: "Bridesmaids", names: ENTOURAGE.bridesmaids },
      ],
    },
  ];

  return (
    <section id="entourage" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">The Entourage</h2>
          <p className="text-text-muted">The family and friends standing by our side</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-surface p-8 rounded-2xl shadow-sm text-center border border-secondary/10 ${
                section.title === "Officiating Pastor" ||
                section.title === "Principal Sponsors" ||
                section.title === "Secondary Sponsors" ||
                section.title === "To Guide us on our Way Ahead"
                  ? "md:col-span-2 lg:col-span-6"
                  : "md:col-span-1 lg:col-span-3"
              }`}
            >
              {section.subtitle && (
                <p className="text-xs text-text-muted italic mb-2 tracking-wide">{section.subtitle}</p>
              )}
              <h3 className="font-script text-3xl text-accent mb-6 overflow-visible">
                {section.title}
              </h3>
              
              {section.isBridalParty && section.columns ? (
                <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto text-center">
                  {section.columns.map((col) => (
                    <div key={col.title} className="flex flex-col gap-3">
                      <h4 className="font-serif text-lg text-primary font-medium mb-2">
                        {col.title}
                      </h4>
                      {col.names.map((name) => (
                        <span key={name} className="font-serif text-lg text-text">
                          {name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={
                  section.title === "Principal Sponsors"
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto"
                    : "flex flex-col gap-3"
                }>
                  {section.names.map((name) => {
                    if (name.includes("\n")) {
                      const [role, actualName] = name.split("\n");
                      return (
                        <div key={name} className="mb-2">
                          <div className="text-sm text-text-muted italic mb-1">{role}</div>
                          <div className="font-serif text-lg text-text">{actualName}</div>
                        </div>
                      );
                    }
                    return (
                      <span key={name} className="font-serif text-lg text-text">
                        {name}
                      </span>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
