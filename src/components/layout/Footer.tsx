import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
};

const quickLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Important Links", href: "/important-links" },
  { label: "Contact", href: "/contact" },
];

const socialLinks: LinkItem[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/globalindiansinfo/",
    external: true,
    icon: <Facebook className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/globalindian_in",
    external: true,
    icon: <Twitter className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/globalindiansinfo/",
    external: true,
    icon: <Instagram className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in",
    external: true,
    icon: <Linkedin className="inline-block mr-2 h-4 w-4" />,
  },
];

const associates: LinkItem[] = [
  {
    label: "Prabisha India",
    href: "https://www.prabisha.com/",
    external: true,
    icon: <Globe className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Pratyush Kumar",
    href: "https://www.pratyushkumar.co.uk/",
    external: true,
    icon: <Globe className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Prisha The Explorer",
    href: "https://www.prishatheexplorer.com/",
    external: true,
    icon: <Globe className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "Admin Login",
    href: "/pcsadmin",
    external: false,
    icon: <Globe className="inline-block mr-2 h-4 w-4" />,
  },
];

const contacts: LinkItem[] = [
  {
    label: "+44-7867090363",
    href: "tel:+447867090363",
    icon: <Phone className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "+91-8792396989",
    href: "tel:+918792396989",
    icon: <Phone className="inline-block mr-2 h-4 w-4" />,
  },
  {
    label: "info@prabisha.com",
    href: "mailto:info@prabisha.com",
    icon: <Mail className="inline-block mr-2 h-4 w-4" />,
  },
];

export function Footer() {
  const whatsappPhone = "+447867090363";
  const whatsappMessage = encodeURIComponent(
    "I want to find out about your support and services"
  );

  return (
    <>
      <Separator className="my-6" />

      <section className="mx-2">
        <footer className="bg-background text-foreground">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
              <div className="col-span-1">
                <Link href="/" className="inline-block">
                  <img
                    className="site-footer-logo h-16 w-auto"
                    src="/global_indians.png"
                    alt="site_logo"
                  />
                </Link>
              </div>

              <div className="col-span-1">
                <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  {quickLinks.map((l) => (
                    <li key={l.href}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-primary"
                        >
                          <span className="mr-2" />
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="flex items-center hover:text-primary"
                        >
                          <span className="mr-2" />
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
                <ul className="space-y-2 text-sm">
                  {socialLinks.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary"
                      >
                        {s.icon}
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h5 className="text-lg font-semibold mb-3">Our Associates</h5>
                <ul className="space-y-2 text-sm">
                  {associates.map((a) => (
                    <li key={a.href}>
                      {a.external ? (
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-primary whitespace-nowrap"
                        >
                          {a.icon}
                          <span>{a.label}</span>
                        </a>
                      ) : (
                        <Link
                          href={a.href}
                          className="flex items-center hover:text-primary whitespace-nowrap"
                        >
                          {a.icon}
                          <span>{a.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h5 className="text-lg font-semibold mb-3">Contact Us</h5>
                <ul className="space-y-2 text-sm">
                  {contacts.map((c) => (
                    <li key={c.href} className="flex items-center">
                      {c.icon}
                      {c.href.startsWith("mailto:") ||
                      c.href.startsWith("tel:") ? (
                        <a href={c.href} className="hover:text-primary">
                          {c.label}
                        </a>
                      ) : (
                        <span>{c.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mt-2 pt-2 flex flex-col md:flex-row justify-center items-center text-sm text-muted-foreground">
              <p className="text-center md:text-left">
                Global Indians Info © {new Date().getFullYear()} . All Rights
                Reserved . || Powered by{" "}
                <a
                  href="https://prabisha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary"
                >
                  Prabisha Consulting
                </a>
              </p>
            </div>
          </div>

          {/* WhatsApp floating button using shadcn Button for styling */}
          <div className="fixed right-4 bottom-4 z-50">
            <a
              href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                whatsappPhone
              )}&text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <Button className="rounded-full p-3 shadow-lg bg-cta text-cta-foreground hover-bg-cta">
                <img
                  src="/social-media-icons/whatsapp-icon.svg"
                  alt="WhatsApp"
                  className="h-6 w-6"
                />
              </Button>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
