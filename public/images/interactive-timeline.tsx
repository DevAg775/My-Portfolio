"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Briefcase, Award, ChevronRight, Code } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "education" | "employment" | "achievement" | "project";
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  url?: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

type FilterType = "all" | "education" | "employment" | "project" | "achievement";

const typeConfig = {
  education: {
    icon: GraduationCap,
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-600",
    tag: "Education",
  },
  employment: {
    icon: Briefcase,
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    tag: "Experience",
  },
  project: {
    icon: Code,
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10 text-purple-600",
    tag: "Project",
  },
  achievement: {
    icon: Award,
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10 text-amber-600",
    tag: "Achievement",
  },
};

export function InteractiveTimeline({ items }: InteractiveTimelineProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Education", value: "education" },
    { label: "Projects", value: "project" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.type === activeFilter);

  const sortedItems = [...filteredItems].sort(
    (a, b) => parseInt(b.startDate) - parseInt(a.startDate)
  );

  return (
    <section id="timeline" className="bg-secondary/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-sm">
            Career Journey
          </p>
          <h2 className="font-serif text-2xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Professional Experience</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm",
                activeFilter === filter.value
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="space-y-3 sm:space-y-4">
          {sortedItems.map((item) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 sm:rounded-2xl",
                  config.border,
                  isExpanded ? "shadow-lg" : "hover:shadow-md"
                )}
              >
                {/* Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    config.gradient
                  )}
                />

                {/* Content */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="relative flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl",
                      config.iconBg
                    )}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  {/* Main Content */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex flex-wrap items-center gap-1 sm:mb-1 sm:gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground sm:text-xs">
                        {item.startDate}
                        {item.endDate && item.endDate !== item.startDate && ` — ${item.endDate}`}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-primary sm:text-sm">
                      {item.institution}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 sm:h-5 sm:w-5",
                      isExpanded && "rotate-90"
                    )}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/50 px-4 py-3 sm:px-5 sm:py-4">
                      <div className="ml-0 sm:ml-16">
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {item.description}
                        </p>
                        {item.location && (
                          <p className="mt-2 text-[10px] text-muted-foreground/70 sm:text-xs">
                            {item.location}
                          </p>
                        )}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            View Project →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
