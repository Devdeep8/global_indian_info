"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Countries", value: "206" },
  { label: "Global Indians", value: "32M" },
  { label: "Readers", value: "500K+" },
  { label: "Stories", value: "10K+" },
];

export function WorldInNumbers() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground uppercase">
              World In Numbers
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting the diaspora through numbers that matter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
