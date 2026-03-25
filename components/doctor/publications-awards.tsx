import { ArrowUpRight } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
}

interface PublicationsAwardsSectionProps {
  publications: Publication[];
  awards: Award[];
}

export function PublicationsAwardsSection({
  publications,
  awards,
}: PublicationsAwardsSectionProps) {
  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
            Recognition
          </p>
          <h2 className="font-serif text-4xl font-medium text-foreground sm:text-5xl">
            <span className="text-balance">Publications & Awards</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Publications */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">
                Selected Publications
              </h3>
              <span className="font-mono text-sm text-muted-foreground">
                {publications.length} papers
              </span>
            </div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="group flex items-start justify-between gap-4 rounded-2xl bg-card p-5 transition-all hover:shadow-md"
                >
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 font-medium text-foreground">
                      {pub.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-muted-foreground">{pub.journal}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="text-muted-foreground">{pub.year}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">
                Awards & Recognition
              </h3>
              <span className="font-mono text-sm text-muted-foreground">
                {awards.length} awards
              </span>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="group rounded-2xl bg-card p-5 transition-all hover:shadow-md"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <p className="font-medium text-foreground">{award.title}</p>
                    <span className="flex-shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
