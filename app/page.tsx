import { Metadata } from "next";
import doctorData from "@/data/doctor-profile.json";
import { Header } from "@/components/doctor/header";
import { HeroSection } from "@/components/doctor/hero-section";
import { InteractiveTimeline } from "@/components/doctor/interactive-timeline";
import { CertificationsGallery } from "@/components/doctor/certifications-gallery";
import { ServicesSection } from "@/components/doctor/services-section";

import { ContactSection } from "@/components/doctor/contact-section";
import { Footer } from "@/components/doctor/footer";

type TimelineItemType = "education" | "employment" | "achievement";

interface TimelineItem {
  id: string;
  type: TimelineItemType;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

const { siteConfig, personal, socialLinks, stats, timeline, certifications, services, specializations, languages } = doctorData;

// Type assertion for timeline items
const typedTimeline: TimelineItem[] = timeline as TimelineItem[];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${personal.name} - ${personal.specialty}`,
    template: `%s | ${personal.name}`,
  },
  description: `${personal.name} is a ${personal.specialty}. ${personal.bio.slice(0, 150)}...`,
  keywords: [
    personal.name,
    personal.specialty,
    "developer",
    "front-stack",
    "web development",
    "portfolio",
    ...specializations,
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  publisher: personal.clinicName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "profile",
    firstName: personal.name.split(" ")[0],
    lastName: personal.name.split(" ")[1],
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: `${personal.name} - ${personal.specialty}`,
    description: personal.tagline,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personal.name} - ${personal.specialty}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} - ${personal.specialty}`,
    description: personal.tagline,
    images: ["/og-image.jpg"],
    creator: "@devansh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  description: personal.bio,
  image: personal.profileImage,
  email: personal.email,
  jobTitle: personal.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: personal.clinicAddress,
  },
  sameAs: [
    socialLinks.linkedin,
    socialLinks.twitter,
    socialLinks.instagram,
  ].filter(Boolean),
  knowsAbout: specializations,
  worksFor: {
    "@type": "Organization",
    name: personal.clinicName,
  },
};

export default function DoctorLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header doctorName={personal.name} phone={personal.phone} />

      <main>
        <HeroSection
          name={personal.name}
          title={personal.title}
          // specialty={personal.specialty}
          tagline={personal.tagline}
          bio={personal.bio}
          profileImage={personal.profileImage}
          // clinicAddress={personal.clinicAddress}
          // consultationHours={personal.consultationHours}
          emergencyAvailable={personal.emergencyAvailable}
          stats={stats}
          whatsappLink={personal.whatsappLink}
          googleMapsLink={personal.googleMapsLink}
          phone={personal.phone}
        />

        <InteractiveTimeline items={typedTimeline} />

        <CertificationsGallery certifications={certifications} />

        <ServicesSection
          services={services}
          specializations={specializations}
        />

        

    

        <ContactSection
          clinicName={personal.clinicName}
          clinicAddress={personal.clinicAddress}
          phone={personal.phone}
          email={personal.email}
          consultationHours={personal.consultationHours}
          languages={languages}
          whatsappLink={personal.whatsappLink}
          googleMapsLink={personal.googleMapsLink}
        />
      </main>

      <Footer
        doctorName={personal.name}
        clinicName={personal.clinicName}
        clinicAddress={personal.clinicAddress}
        phone={personal.phone}
        email={personal.email}
        socialLinks={socialLinks}
      />
    </>
  );
}
