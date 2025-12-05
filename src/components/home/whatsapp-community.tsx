import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type GroupItem = {
  title: string;
  subtitle?: string;
  href: string; // whatsapp invite link or phone link
};

const groups: GroupItem[] = [
  {
    title: "UK Jobs Group",
    subtitle: "Jobs and opportunities — UK",
    href: "https://chat.whatsapp.com/REPLACE_WITH_UK_GROUP_LINK",
  },
  {
    title: "India Jobs Group",
    subtitle: "Jobs and opportunities — India",
    href: "https://chat.whatsapp.com/REPLACE_WITH_INDIA_GROUP_LINK",
  },
  {
    title: "Recycle UK Group",
    subtitle: "Community recycling & local support",
    href: "https://chat.whatsapp.com/REPLACE_WITH_RECYCLE_LINK",
  },
];

export default function WhatsappCommunity() {
  const whatsappIcon = (
    <img
      src="/social/icons8-whatsapp.svg"
      alt="whatsapp"
      className="h-10 w-10"
    />
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Our Whatsapp Community</h2>
        <div className="mx-auto mt-3 w-28 h-1 rounded-full bg-cta" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <article
            key={g.href}
            className="bg-card text-card-foreground rounded-lg p-6 drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{whatsappIcon}</div>
              <h3 className="text-xl font-semibold">{g.title}</h3>
              {g.subtitle && <p className="text-sm text-muted-foreground mt-2">{g.subtitle}</p>}
            </div>

            <div className="mt-6 w-full flex justify-center">
              <a
                href={g.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Join ${g.title} on WhatsApp`}
                className="w-full"
              >
                <Button className="w-full rounded-md bg-cta text-cta-foreground hover-bg-cta">
                  Join Group
                </Button>
              </a>
            </div>
          </article>
        ))}
      </div>

      <Separator className="my-8" />

      <p className="text-center text-sm text-muted-foreground">
        Can't find your group? Contact us at{" "}
        <a href="mailto:info@prabisha.com" className="underline hover:text-primary">
          info@prabisha.com
        </a>
        .
      </p>
    </section>
  );
}