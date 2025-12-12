"use client";

import { Lightbulb } from "lucide-react";

const facts = [
  {
    id: 1,
    text: "The zero was invented by Aryabhata.",
  },
  {
    id: 2,
    text: "India has the world's largest postal network.",
  },
  {
    id: 3,
    text: "Yoga originated in India over 5,000 years ago.",
  },
];

export function DidYouKnow() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-yellow-500 rounded-full"></div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground uppercase">
            Did You Know?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="flex items-start gap-4 p-6 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200/50 dark:border-yellow-700/30"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
