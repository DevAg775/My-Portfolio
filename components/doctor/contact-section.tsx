"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  clinicName: string;
  clinicAddress: string;
  phone: string;
  email: string;
  consultationHours: string;
  consultationFee?: string;
  followUpFee?: string;
  languages?: string[];
  whatsappLink?: string;
  googleMapsLink?: string;
}

export function ContactSection({
  clinicName,
  clinicAddress,
  phone,
  email,
  consultationHours,
  consultationFee,
  followUpFee,
  languages,
  whatsappLink,
  googleMapsLink,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-sm">
            Get in Touch
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-2xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Connect with me</span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl bg-card shadow-xl sm:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div className="bg-gradient-to-br from-foreground to-foreground/90 p-6 text-background sm:p-8 lg:p-12">
              <h3 className="mb-1 text-[10px] uppercase tracking-widest text-background/60 sm:mb-2 sm:text-xs">
                Contact Info
              </h3>
              <p className="mb-6 font-serif text-xl font-medium sm:mb-8 sm:text-2xl lg:text-3xl">
                {clinicName}
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background/10 sm:h-10 sm:w-10">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-0.5 text-[10px] uppercase tracking-wider text-background/60 sm:mb-1 sm:text-xs">
                      Address
                    </p>
                    <p className="text-sm leading-relaxed text-background/90 sm:text-base">{clinicAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background/10 sm:h-10 sm:w-10">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] uppercase tracking-wider text-background/60 sm:mb-1 sm:text-xs">
                      Availability
                    </p>
                    <p className="text-sm text-background/90 sm:text-base">{consultationHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background/10 sm:h-10 sm:w-10">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] uppercase tracking-wider text-background/60 sm:mb-1 sm:text-xs">
                      Phone
                    </p>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-sm text-background/90 transition-colors hover:text-background sm:text-base"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Email - Hidden on mobile */}
                <div className="hidden items-start gap-4 sm:flex">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-background/60">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-background/90 transition-colors hover:text-background"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Languages - Hidden on mobile */}
              {languages && languages.length > 0 && (
                <div className="mt-6 hidden border-t border-background/10 pt-4 sm:mt-8 sm:block sm:pt-6">
                  <p className="mb-2 text-xs uppercase tracking-wider text-background/60">
                    Languages
                  </p>
                  <p className="text-sm text-background/90 sm:text-base">{languages.join(" • ")}</p>
                </div>
              )}
            </div>

            {/* Right Side - Fees & CTAs */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              {/* Fees */}
              {(consultationFee || followUpFee) && (
                <div className="mb-6 sm:mb-10">
                  <h4 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground sm:mb-6 sm:text-sm">
                    Consultation Fees
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {consultationFee && (
                      <div className="rounded-xl bg-secondary/50 p-4 sm:rounded-2xl sm:p-6">
                        <p className="mb-1 text-xs text-muted-foreground sm:text-sm">New Patient</p>
                        <p className="font-serif text-xl font-medium text-foreground sm:text-2xl lg:text-3xl">
                          {consultationFee}
                        </p>
                      </div>
                    )}
                    {followUpFee && (
                      <div className="rounded-xl bg-secondary/50 p-4 sm:rounded-2xl sm:p-6">
                        <p className="mb-1 text-xs text-muted-foreground sm:text-sm">Follow-up</p>
                        <p className="font-serif text-xl font-medium text-foreground sm:text-2xl lg:text-3xl">
                          {followUpFee}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3 sm:space-y-4">
                {whatsappLink && (
                  <Button
                    size="lg"
                    className="h-12 w-full rounded-full bg-[#25D366] text-sm hover:bg-[#128C7E] sm:h-14 sm:text-base"
                    asChild
                  >
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Message on WhatsApp
                    </Link>
                  </Button>
                )}
                {googleMapsLink && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 w-full rounded-full text-sm sm:h-14 sm:text-base"
                    asChild
                  >
                    <Link href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Get Directions
                    </Link>
                  </Button>
                )}
                {phone && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 w-full rounded-full text-sm sm:h-14 sm:text-base"
                    asChild
                  >
                    <Link href={`tel:${phone.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="sm:hidden">Call</span>
                      <span className="hidden sm:inline">Call {phone}</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
