'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Shield, Star, Palette, Zap, ChevronRight, Settings, Truck, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SERVICES, GALLERY_ITEMS, AVAILABLE_VANS, SITE_NAME } from '@/lib/constants';
import { FadeIn, SlideIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';

const serviceIcons: Record<string, any> = {
  wrench: Wrench,
  settings: Settings,
  truck: Truck,
  package: Package,
};

const whyChooseUs = [
  { icon: Shield, title: 'Quality Work', description: 'Each van is custom-built with great care and attention to detail, ensuring the highest levels of comfort, style, and reliability.' },
  { icon: Wrench, title: 'Qualified Carpenter', description: 'All our campervans are handcrafted by a qualified carpenter with years of experience. Every detail is handled with care and precision.' },
  { icon: Palette, title: 'Real Experience', description: 'We believe that every journey should provide a real and authentic experience, where adventure meets comfort seamlessly.' },
  { icon: Zap, title: 'Full Electrical', description: 'Complete 12V/240V systems, solar panels, lithium batteries, and smart charging solutions for off-grid living.' },
];

export function HomeClient() {
  const availableVans = AVAILABLE_VANS?.filter((v: any) => v?.status === 'available');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/campway/hero.jpg"
            alt="Campway Customs Toyota HiAce campervan conversion with warm LED lighting, custom kitchen and lounge area"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Truck className="w-4 h-4" />
              Melbourne, Australia
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Custom{' '}
              <span className="text-primary">&amp; Ready-to-Roll</span>{' '}
              Campervans
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Designed with intention. Built to last. We design, build, buy, and upgrade vans that match your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/vans">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Browse Available Vans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-white/30 text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Explore <span className="text-primary">Our Van Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We design, build, buy, and upgrade vans that match your journey.
              </p>
            </div>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {SERVICES?.map((svc: any) => {
              const Icon = serviceIcons?.[svc?.icon] ?? Wrench;
              return (
                <StaggerItem key={svc?.id}>
                  <HoverLift>
                    <Card className="h-full p-6 text-center">
                      <CardContent className="p-0">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2">{svc?.name}</h3>
                        <p className="text-sm text-muted-foreground">{svc?.description}</p>
                      </CardContent>
                    </Card>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Available Vans Preview */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  Get <span className="text-primary">Inspired</span> By Our Work!
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Explore our top picks of hand-selected vans that combine style, comfort, and performance for your perfect getaway.
                </p>
              </div>
              <Link href="/vans">
                <Button variant="outline" className="gap-2">
                  View All Vans
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {AVAILABLE_VANS?.slice(0, 3)?.map((van: any) => (
              <StaggerItem key={van?.id}>
                <HoverLift>
                  <Link href={`/vans#${van?.id}`}>
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="relative aspect-[4/3] bg-muted">
                        <Image
                          src={van?.image ?? ''}
                          alt={van?.name ?? 'Campway Customs van build'}
                          fill
                          className="object-cover transition-transform duration-slow group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            van?.status === 'available' ? 'bg-green-500 text-white' :
                            van?.status === 'sold' ? 'bg-red-500 text-white' :
                            'bg-yellow-500 text-black'
                          }`}>
                            {van?.status === 'available' ? 'Available' : van?.status === 'sold' ? 'Sold' : 'In Build'}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-display text-base font-semibold mb-1 line-clamp-1">{van?.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{van?.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn from="left">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/campway/workshop.jpg"
                  alt="Campway Customs qualified carpenter at work on custom van build"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SlideIn>
            <SlideIn from="right">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  <span className="text-primary">Why</span> Choose Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  From custom-built vans to personalised service, we\u2019re here to make every journey smooth, safe, and unforgettable.
                </p>
                <div className="space-y-6">
                  {whyChooseUs?.map((item: any, i: number) => {
                    const Icon = item?.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold mb-1">{item?.title}</h3>
                          <p className="text-sm text-muted-foreground">{item?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/campway/van9.jpg"
            alt="Campway Customs completed van interior with premium finishes"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to Start Your Build?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Get in touch with our team to discuss your dream campervan. Free consultation and obligation-free quotes.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
