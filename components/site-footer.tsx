import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-[100px] h-[42px]">
              <Image
                src="/campway/logo.png"
                alt="Campway Customs logo"
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/vans" className="hover:text-foreground transition-colors">Our Vans</Link>
            <Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <a
              href="https://www.instagram.com/campwaycustoms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/campwaycustoms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © 2025 {SITE_NAME}. All rights reserved. Custom Campervan Fit-Outs — Melbourne, Australia.
        </div>
      </div>
    </footer>
  );
}
