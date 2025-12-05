import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaWhatsapp } from "react-icons/fa";
type GroupItem = {
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
};
const groups: GroupItem[] = [
  {
    title: "UK Jobs Group",
    subtitle: "Jobs and opportunities — UK",
    href: "https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s",
    icon: FaWhatsapp,
  },
  {
    title: "India Jobs Group",
    subtitle: "Jobs and opportunities — India",
    href: "https://chat.whatsapp.com/KGbEPtFJF76D8yQkN2iGC2",
    icon: FaWhatsapp,
  },
  {
    title: "Recycle UK Group",
    subtitle: "Community recycling & local support",
    href: "https://chat.whatsapp.com/EJcrwn2WfuFK51UjazLlNp",
    icon: FaWhatsapp,
  },
];
export default function WhatsappCommunity() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Whatsapp Community
        </h2>
        <div className="mx-auto mt-3 w-28 h-1 rounded-full bg-cta" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <article
            key={g.href}
            className="bg-card text-card-foreground rounded-lg p-6 drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-center text-center">
              {g.icon && (
                <g.icon
                  className="text-center mx-auto mb-2"
                  style={{ fontSize: "3rem", color: "#25D366" }}
                />
              )}
              <h3 className="text-xl font-semibold">{g.title}</h3>
              {g.subtitle && (
                <p className="text-sm text-muted-foreground mt-2">
                  {g.subtitle}
                </p>
              )}
            </div>
            <div className="mt-6 w-full flex justify-center">
              <a
                href={g.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Join ${g.title} on WhatsApp`}
                className="w-full"
              >
                <Button className="w-full cursor-pointer border-2 rounded-md bg-cta text-cta-foreground hover-bg-cta">
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
        <a
          href="mailto:info@prabisha.com"
          className="underline hover:text-primary"
        >
          info@prabisha.com
        </a>
        .
      </p>
    </section>
  );
}
