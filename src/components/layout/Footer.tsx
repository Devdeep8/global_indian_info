import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Global Indians</h3>
            <p className="text-sm text-muted-foreground">
              Connecting and celebrating the achievements of Indians worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/business" className="text-muted-foreground hover:text-primary">Business</Link></li>
              <li><Link href="/category/technology" className="text-muted-foreground hover:text-primary">Technology</Link></li>
              <li><Link href="/category/culture" className="text-muted-foreground hover:text-primary">Culture</Link></li>
              <li><Link href="/category/politics" className="text-muted-foreground hover:text-primary">Politics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@globalindians.info</li>
              <li>Phone: +91 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Global Indians. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Powered by</span>
            <Link href="https://prabisha.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary flex items-center">
              Prabisha <Globe className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
