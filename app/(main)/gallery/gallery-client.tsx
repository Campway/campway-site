'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GALLERY_ITEMS } from '@/lib/constants';
import { FadeIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Interior', 'Exterior', 'Process'] as const;

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS?.filter((item: any) => item?.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null && filtered?.length) {
      setLightboxIndex((lightboxIndex + 1) % (filtered?.length ?? 1));
    }
  };
  const goPrev = () => {
    if (lightboxIndex !== null && filtered?.length) {
      setLightboxIndex((lightboxIndex - 1 + (filtered?.length ?? 1)) % (filtered?.length ?? 1));
    }
  };

  const currentItem = lightboxIndex !== null ? filtered?.[lightboxIndex] : null;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Camera className="w-4 h-4" />
                Our Portfolio
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Project <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Browse our completed Toyota HiAce conversions. Every build showcases our commitment to quality craftsmanship.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories?.map((cat: string) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {filtered?.map((item: any, i: number) => (
              <StaggerItem key={item?.id ?? i}>
                <HoverLift>
                  <Card
                    className="overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image
                        src={item?.image ?? ''}
                        alt={item?.title ?? 'Gallery image'}
                        fill
                        className="object-cover transition-transform duration-slow group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-normal flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Camera className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                          {item?.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1">{item?.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item?.description}</p>
                    </div>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Image
                src={currentItem?.image ?? ''}
                alt={currentItem?.title ?? 'Gallery image'}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="font-semibold text-lg">{currentItem?.title}</h3>
              <p className="text-white/60 text-sm">{currentItem?.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
