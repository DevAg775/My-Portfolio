import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  researchGate?: string;
}

interface FooterProps {
  doctorName: string;
  clinicName: string;
  clinicAddress: string;
  phone: string;
  email: string;
  socialLinks: SocialLinks;
}

export function Footer({
  doctorName,
  socialLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-8">
          {/* Left - Name & Copyright */}
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
            <Link 
              href="/" 
              className="font-serif text-lg font-medium text-foreground sm:text-xl"
            >
              {doctorName}
            </Link>
            <span className="hidden text-muted-foreground sm:inline">•</span>
            <p className="text-xs text-muted-foreground sm:text-sm">
              © {currentYear}
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground sm:h-10 sm:w-10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground sm:h-10 sm:w-10"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
