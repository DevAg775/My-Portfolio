"use client";

import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
  specializations: string[];
}

export function ServicesSection({
  services,
  specializations,
}: ServicesSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 grid gap-4 sm:mb-16 sm:gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-sm">
              My Services
            </p>
            <h2 className="font-serif text-2xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Web development expertise</span>
            </h2>
          </div>
          {/* Hidden on mobile */}
          <p className="hidden max-w-md text-pretty text-muted-foreground sm:block lg:text-right lg:text-lg">
            Building responsive and scalable web applications using modern technologies and best practices.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="mb-12 border-t border-border sm:mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-border"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-muted-foreground sm:py-6 lg:py-8"
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  <span className="font-mono text-xs text-muted-foreground sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium text-foreground sm:text-xl lg:text-2xl">
                    {service.title}
                  </h3>
                </div>
                <div
                  className={cn(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 sm:h-10 sm:w-10",
                    expandedIndex === index && "rotate-45 bg-foreground text-background"
                  )}
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  expandedIndex === index
                    ? "grid-rows-[1fr] pb-4 sm:pb-8"
                    : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex items-start gap-3 pl-8 sm:gap-6 sm:pl-12 lg:pl-16">
                    <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                      {service.description}
                    </p>
                    <ArrowRight className="mt-0.5 hidden h-4 w-4 flex-shrink-0 text-muted-foreground sm:block sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="rounded-2xl bg-secondary/50 p-5 sm:rounded-3xl sm:p-8 lg:p-12">
          <div className="mb-4 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
              Areas of Expertise
            </h3>
            <span className="text-xs text-muted-foreground sm:text-sm">
              {specializations.length} specializations
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="cursor-default rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-foreground sm:px-4 sm:py-2 sm:text-sm"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
