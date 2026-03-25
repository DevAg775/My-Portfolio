"use client";

import { Award, GraduationCap, BadgeCheck, FileCheck } from "lucide-react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  image?: string;
  credentialId?: string;
}

interface CertificationsGalleryProps {
  certifications: Certification[];
}

function getCertIcon(name: string) {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("degree") || lowerName.includes("mbbs") || lowerName.includes("dnb") || lowerName.includes("md") || lowerName.includes("fnb") || lowerName.includes("idccm")) {
    return GraduationCap;
  }
  if (lowerName.includes("registration") || lowerName.includes("council")) {
    return FileCheck;
  }
  if (lowerName.includes("certification") || lowerName.includes("certified") || lowerName.includes("acls")) {
    return BadgeCheck;
  }
  return Award;
}

function getIconColor(name: string) {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("degree") || lowerName.includes("mbbs") || lowerName.includes("dnb") || lowerName.includes("md") || lowerName.includes("fnb") || lowerName.includes("idccm")) {
    return "bg-blue-100 text-blue-600";
  }
  if (lowerName.includes("registration") || lowerName.includes("council")) {
    return "bg-emerald-100 text-emerald-600";
  }
  if (lowerName.includes("certification") || lowerName.includes("certified") || lowerName.includes("acls")) {
    return "bg-amber-100 text-amber-600";
  }
  return "bg-violet-100 text-violet-600";
}

export function CertificationsGallery({
  certifications,
}: CertificationsGalleryProps) {
  return (
    <section id="certifications" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-16">
          <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-sm">
            Credentials
          </p>
          <h2 className="font-serif text-2xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Skills & Certifications</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = getCertIcon(cert.name);
            const iconColor = getIconColor(cert.name);
            return (
              <div
                key={cert.id}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-border hover:shadow-lg sm:rounded-2xl sm:p-6"
              >
                {/* Year Badge */}
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                  <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:px-3 sm:py-1 sm:text-xs">
                    {cert.year}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-1 pr-12 text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:mb-2 sm:pr-16 sm:text-base">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {cert.issuer}
                </p>

                {/* Credential ID - Hidden on mobile */}
                {cert.credentialId && (
                  <p className="mt-2 hidden text-xs text-muted-foreground/70 sm:block">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full sm:h-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
