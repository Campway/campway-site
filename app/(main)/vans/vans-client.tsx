'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, Star, Check, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AVAILABLE_VANS, FITOUT_PACKAGES } from '@/lib/constants';
import { FadeIn, SlideIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';
import { motion, AnimatePresence } from 'framer-motion';

const statusFilters = ['All', 'Available', 'Sold', 'In Build'] as const;

function getStatusColor(status: string) {
  switch (status) {
    case 'available': return 'bg-green-500 text-white';
    case 'sold': return 'bg-red-500/80 text-white';
    case 'in-build': return 'bg-yellow-500 text-black';
    default: return 'bg-muted text-foreground';
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'available': return 'Available Now';
    case 'sold': return 'Sold';
    case 'in-build': return 'In Build';
    default: return status;
  }
}

export function VansClient() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedVan, setSelectedVan] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const filtered = activeFilter === 'All'
    ? AVAILABLE_VANS
    : AVAILABLE_VANS?.filter((v: any) => {
        if (activeFilter === 'Available') return v?.status === 'available';
        if (activeFilter === 'Sold') return v?.status === 'sold';
        if (activeFilter === 'In Build') return v?.status === 'in-build';
        return true;
      });

  const openVan = selectedVan ? AVAILABLE_VANS?.find((v: any) => v?.id === selectedVan) : null;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/campway/hero.jpg"
            alt="Campway Customs Toyota HiAce campervan conversion interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Toyota HiAce Specialists
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Our <span className="text-primary">Vans</span>
              </h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Browse our collection of available campervans, previous builds, and vans currently in production. Every build is a Toyota HiAce.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-16 z-30 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {statusFilters?.map((filter: string) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({AVAILABLE_VANS?.filter((v: any) => {
                      if (filter === 'Available') return v?.status === 'available';
                      if (filter === 'Sold') return v?.status === 'sold';
                      if (filter === 'In Build') return v?.status === 'in-build';
                      return true;
                    })?.length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Van Listings */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {filtered?.map((van: any) => (
              <StaggerItem key={van?.id}>
                <div id={van?.id}>
                  <HoverLift>
                    <Card className="overflow-hidden group">
                      <div className="relative aspect-[16/10] bg-muted cursor-pointer" onClick={() => { setSelectedVan(van?.id); setGalleryIndex(0); }}>
                        <Image
                          src={van?.image ?? ''}
                          alt={van?.name ?? 'Campway Customs van'}
                          fill
                          className="object-cover transition-transform duration-slow group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(van?.status)}`}>
                            {getStatusLabel(van?.status)}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs backdrop-blur-sm">
                            <Eye className="w-3.5 h-3.5" />
                            View Photos
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h3 className="font-display text-lg font-bold leading-tight">{van?.name}</h3>
                          <Badge variant="outline" className="shrink-0 text-primary border-primary/30">
                            {van?.price}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{van?.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {(van?.features ?? [])?.slice(0, 6)?.map((feat: string, i: number) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs">
                              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span className="text-muted-foreground">{feat}</span>
                            </div>
                          ))}
                        </div>
                        {van?.status === 'available' && (
                          <Link href="/contact">
                            <Button className="w-full gap-2" size="sm">
                              Enquire About This Van
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </HoverLift>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {(filtered?.length ?? 0) === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No vans found with that filter. Try a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Fitout <span className="text-primary">Packages</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Available across all HiAce models. Packages are customisable to suit your specific requirements.
              </p>
            </div>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {FITOUT_PACKAGES?.map((pkg: any, i: number) => (
              <StaggerItem key={i}>
                <HoverLift>
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold mb-2">{pkg?.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{pkg?.description}</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {(pkg?.features ?? [])?.map((f: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <Star className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border/50">
                        <div className="text-lg font-bold text-primary mb-3">{pkg?.startingPrice}</div>
                        <Link href="/contact">
                          <Button variant="outline" size="sm" className="w-full">
                            Enquire Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selectedVan && openVan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVan(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={() => setSelectedVan(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {(openVan?.gallery?.length ?? 0) > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                  onClick={(e) => { e.stopPropagation(); setGalleryIndex((galleryIndex - 1 + (openVan?.gallery?.length ?? 1)) % (openVan?.gallery?.length ?? 1)); }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                  onClick={(e) => { e.stopPropagation(); setGalleryIndex((galleryIndex + 1) % (openVan?.gallery?.length ?? 1)); }}
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <div
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={openVan?.gallery?.[galleryIndex] ?? openVan?.image ?? ''}
                alt={openVan?.name ?? 'Van photo'}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="font-semibold text-lg">{openVan?.name}</h3>
              <p className="text-white/60 text-sm">
                Photo {galleryIndex + 1} of {openVan?.gallery?.length ?? 1}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
