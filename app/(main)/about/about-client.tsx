'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Award, Truck, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SITE_NAME } from '@/lib/constants';
import { FadeIn, SlideIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';

const values = [
  { icon: Award, title: 'Quality Work', description: 'Each van is custom-built with great care and attention to detail, ensuring the highest levels of comfort, style, and reliability.' },
  { icon: Users, title: 'Qualified Carpenter', description: 'All our campervans are handcrafted by a qualified carpenter with years of experience. Every detail is handled with care and precision.' },
  { icon: Target, title: 'Real Experience', description: 'We believe that every journey should provide a real and authentic experience, where adventure meets comfort seamlessly.' },
  { icon: Truck, title: 'Built for Australia', description: 'Our builds are designed to handle the toughest Australian conditions, from outback tracks to coastal roads.' },
];

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Free initial chat to discuss your needs, budget, and timeline. We help you choose the right package for your lifestyle.' },
  { step: '02', title: 'Design', description: 'Detailed layout planning tailored to your van. We refine every detail until you\'re 100% happy with the design.' },
  { step: '03', title: 'Build', description: 'Expert construction by our qualified carpenter. Regular updates and photos throughout the entire build process.' },
  { step: '04', title: 'Handover', description: 'Full walkthrough of your completed fitout. We ensure you\'re confident with every system and feature.' },
];

export function AboutClient() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/campway/workshop.jpg"
            alt="Campway Customs qualified carpenter at work in the workshop"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                About Us
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Designed with <span className="text-primary">Intention</span>
              </h1>
              <p className="text-lg text-white/80">
                {SITE_NAME} delivers premium yet affordable custom campervan fit-outs across Australia. From off-grid power systems to smart storage solutions, we make van life stylish and accessible.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                <span className="text-primary">Why</span> Choose Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From custom-built vans to personalised service, we\u2019re here to make every journey smooth, safe, and unforgettable.
              </p>
            </div>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values?.map((val: any, i: number) => {
              const Icon = val?.icon ?? Award;
              return (
                <StaggerItem key={i}>
                  <HoverLift>
                    <Card className="h-full p-6">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2">{val?.title}</h3>
                        <p className="text-sm text-muted-foreground">{val?.description}</p>
                      </CardContent>
                    </Card>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From initial consultation to handover, here&apos;s how we bring your dream campervan to life.
              </p>
            </div>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {processSteps?.map((step: any, i: number) => (
              <StaggerItem key={i}>
                <HoverLift>
                  <Card className="h-full p-6 relative overflow-hidden">
                    <CardContent className="p-0 relative z-10">
                      <div className="text-5xl font-display font-bold text-primary/10 mb-2">{step?.step}</div>
                      <h3 className="font-display text-lg font-semibold mb-2">{step?.title}</h3>
                      <p className="text-sm text-muted-foreground">{step?.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Build Your Dream Van?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contact us today for a free consultation. We&apos;ll help you plan the perfect fitout for your Toyota HiAce.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base gap-2">
                Start Your Build
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
