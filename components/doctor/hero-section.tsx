"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImage: string;
  emergencyAvailable: boolean;
  stats: Stat[];
  whatsappLink?: string;
  googleMapsLink?: string;
  phone?: string;
}

export function HeroSection({
  name,
  title,
  tagline,
  profileImage,
  stats,
  whatsappLink,
  googleMapsLink,
  phone,
}: HeroSectionProps) {
  return (
    <section id="about" className="relative min-h-[100dvh] overflow-hidden">
      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 hidden opacity-30 sm:block">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl lg:h-[600px] lg:w-[600px]" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary blur-3xl lg:h-[400px] lg:w-[400px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center pb-8 text-center sm:pb-12 lg:pb-24">
          {/* Small Badge - Hidden on mobile */}
          <div className="mb-6 hidden items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs backdrop-blur-sm sm:inline-flex sm:px-4 sm:py-2 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-muted-foreground">Available for Projects</span>
          </div>

          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-8">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-card ring-offset-2 ring-offset-background sm:h-32 sm:w-32 sm:ring-offset-4 lg:h-40 lg:w-40">
              <Image
                src={profileImage}
                alt={`Portrait of ${name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="mb-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:mb-4 sm:text-5xl lg:text-6xl">
            <span className="text-balance">{name}</span>
          </h1>

          {/* Title */}
          <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:text-lg">
            {title}
          </p>

          {/* Tagline - Shorter on mobile */}
          <p className="mx-auto mb-8 max-w-xs text-balance text-lg font-light leading-relaxed text-foreground/80 sm:mb-12 sm:max-w-2xl sm:text-2xl lg:text-3xl">
            {tagline}
          </p>

          {/* 3 CTA Buttons */}
          <div className="flex w-full flex-col gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
            
            
            {phone && (
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-6 text-sm sm:h-14 sm:px-8 sm:text-base"
                asChild
              >
                <Link href={`tel:${phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-border/50 py-6 sm:py-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-2xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:mt-2 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-widest sm:text-xs">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent sm:h-12" />
        </div>
      </div>
    </section>
  );
}
