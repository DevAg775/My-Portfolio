"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  doctorName: string;
  phone: string;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#timeline" },
  { label: "Credentials", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header({ doctorName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Minimal */}
          <Link 
            href="/" 
            className="font-serif text-xl font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {doctorName.split(" ").slice(0, 2).join(" ")}
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              asChild 
              className="hidden rounded-full px-6 sm:inline-flex"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-foreground transition-all hover:text-muted-foreground"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button 
            asChild 
            size="lg"
            className="mt-12 rounded-full px-8"
          >
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
