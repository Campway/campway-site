'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SITE_NAME, AVAILABLE_VANS } from '@/lib/constants';
import { FadeIn, SlideIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: 'Call for enquiries', description: 'Mon-Fri 8am-5pm AEST' },
  { icon: Mail, label: 'Email', value: 'Get in touch below', description: 'We reply within 24 hours' },
  { icon: MapPin, label: 'Location', value: 'Australia', description: 'Workshop by appointment' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri', description: '8:00 AM - 5:00 PM AEST' },
];

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vanModel: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (!formData?.name || !formData?.email || !formData?.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res?.ok) {
        throw new Error('Failed to submit');
      }
      setIsSubmitted(true);
      toast.success('Enquiry submitted successfully!');
    } catch (err: any) {
      console.error('Contact form error:', err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/campway/van7.jpg"
            alt="Campway Customs Toyota HiAce campervan ready for adventure"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4">
                <Send className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Start Your <span className="text-primary">Build</span>
              </h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Ready to transform your Toyota HiAce? Fill out the form below and we&apos;ll get back to you with a free, obligation-free quote.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-8 z-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
            {contactInfo?.map((info: any, i: number) => {
              const Icon = info?.icon ?? Phone;
              return (
                <StaggerItem key={i}>
                  <Card className="text-center py-5 bg-card/95 backdrop-blur-sm">
                    <CardContent className="p-0 px-4">
                      <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-sm mb-0.5">{info?.value}</div>
                      <div className="text-xs text-muted-foreground">{info?.description}</div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <SlideIn from="left">
                <Card className="p-6 sm:p-8">
                  <CardContent className="p-0">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2">Enquiry Received!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thanks for reaching out. Our team will review your enquiry and get back to you within 24 hours.
                        </p>
                        <Button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', vanModel: '', message: '' }); }}>
                          Submit Another Enquiry
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <h3 className="font-display text-xl font-bold mb-1">Send Us an Enquiry</h3>
                        <p className="text-sm text-muted-foreground mb-4">Fields marked with * are required. Your information is stored securely and never shared.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              value={formData?.name ?? ''}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData?.email ?? ''}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="04XX XXX XXX"
                              value={formData?.phone ?? ''}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vanModel">Van Model</Label>
                            <select
                              id="vanModel"
                              name="vanModel"
                              value={formData?.vanModel ?? ''}
                              onChange={handleChange}
                              className="flex h-10 w-full rounded-[var(--radius)] border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select a model</option>
                              <option value="Toyota HiAce LWB">Toyota HiAce LWB</option>
                              <option value="Toyota HiAce SLWB">Toyota HiAce SLWB</option>
                              <option value="Toyota HiAce Commuter">Toyota HiAce Commuter</option>
                              <option value="Not sure yet">Not sure yet</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="What kind of fitout are you looking for? Include any details about your intended use, budget, and timeline..."
                            rows={5}
                            value={formData?.message ?? ''}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                          ) : (
                            <><Send className="w-4 h-4" /> Submit Enquiry</>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </SlideIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <SlideIn from="right">
                <div className="space-y-6">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="font-display text-lg font-bold mb-4">What to Expect</h3>
                      <ul className="space-y-3">
                        {[
                          'Free consultation to discuss your needs',
                          'Detailed quote within 48 hours',
                          'CAD layout designs for approval',
                          'Regular build updates with photos',
                          'Full walkthrough at handover',
                        ]?.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src="/campway/van3.jpg"
                        alt="Completed Campway Customs Toyota HiAce van fitout with premium interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Recent build: Full camper conversion with custom timber kitchen, 200Ah lithium system, and pop-top roof.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
