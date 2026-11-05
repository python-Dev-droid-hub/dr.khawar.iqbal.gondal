import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Design System",
  description: "Internal UI review page for the Dr. Khawar Iqbal Gondal website.",
  path: "/dev/ui",
  noIndex: true,
});

function Swatch({
  name,
  className,
  hex,
}: {
  name: string;
  className: string;
  hex: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-16 rounded-2xl border border-teal-950/10 ${className}`} />
      <p className="text-sm font-medium text-teal-950">{name}</p>
      <p className="text-xs text-muted">{hex}</p>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-teal-950/10 py-14 last:border-b-0">
      <h2 className="mb-8 font-serif text-2xl text-heading md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-cream pb-24 pt-28 md:pt-32">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          /dev/ui
        </p>
        <h1 className="mt-3 font-serif text-4xl text-heading md:text-5xl">
          Design system
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Review tokens and reusable UI components before assembling the
          homepage. Select any text to preview the gold selection color.
        </p>

        <Block title="Color tokens">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Swatch name="teal-950" className="bg-teal-950" hex="#011839" />
            <Swatch name="teal-900" className="bg-teal-900" hex="#0A2A4E" />
            <Swatch name="teal-800" className="bg-teal-800" hex="#143A5C" />
            <Swatch name="cream" className="bg-cream" hex="#F7F5F0" />
            <Swatch name="cream-dark" className="bg-cream-dark" hex="#EFE9DC" />
            <Swatch name="gold" className="bg-gold" hex="#C9A15B" />
            <Swatch name="gold-light" className="bg-gold-light" hex="#E6C98A" />
            <Swatch name="gold-dark" className="bg-gold-dark" hex="#A9803B" />
            <Swatch name="muted" className="bg-muted" hex="#5B6B6E" />
            <Swatch
              name="gold-gradient"
              className="bg-gold-gradient"
              hex="light → dark"
            />
          </div>
        </Block>

        <Block title="Typography">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted">
                Playfair Display — headings
              </p>
              <p className="font-serif text-4xl text-heading md:text-5xl">
                Precision Surgery. Faster Recovery.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted">
                Inter — body
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Minimally invasive laparoscopic care focused on less pain,
                smaller scars, and a quicker return to daily life for patients
                in Gujrat and Mandi Bahauddin.
              </p>
            </div>
          </div>
        </Block>

        <Block title="SectionHeading">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="About the Surgeon"
              title="Meet Dr. Khawar Iqbal Gondal"
              description="Centered default with gold eyebrow and side lines."
              align="center"
            />
            <SectionHeading
              eyebrow="Surgical Care"
              title="Left-aligned heading"
              description="Use align=&quot;left&quot; inside split layouts."
              align="left"
            />
          </div>
          <div className="mt-10 rounded-card bg-teal-hero p-8 md:p-12">
            <SectionHeading
              eyebrow="Results"
              title="Light heading on teal"
              description="Pass light for cream text on dark sections."
              align="center"
              light
            />
          </div>
        </Block>

        <Block title="Button">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-sm font-medium text-muted">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="gold">
                  Book Appointment
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button variant="outline">Get Directions</Button>
                <Button variant="dark">WhatsApp Us</Button>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium text-muted">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div className="rounded-card bg-teal-hero p-8">
              <p className="mb-4 text-sm font-medium text-cream/70">
                onDark backgrounds
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" onDark>
                  Book Appointment
                </Button>
                <Button variant="outline" onDark>
                  WhatsApp Us
                </Button>
                <Button variant="dark" onDark>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Badge / Pill">
          <div className="flex flex-wrap gap-3">
            <Badge variant="gold">Laparoscopic</Badge>
            <Badge variant="teal">15+ Years</Badge>
            <Badge variant="cream">Same-Day Discharge</Badge>
            <Badge variant="outline">FCPS Surgery</Badge>
          </div>
        </Block>

        <Block title="GlassCard">
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-7">
              <h3 className="font-serif text-2xl text-heading">
                Shifa Hospital
              </h3>
              <p className="mt-2 text-sm text-muted">
                Jail Road, Gujrat · Mon to Fri · +92 326 6493614
              </p>
              <Button variant="dark" size="sm" className="mt-6">
                Get Directions
              </Button>
            </GlassCard>
            <div className="rounded-card bg-teal-hero p-6">
              <GlassCard className="p-7">
                <h3 className="font-serif text-2xl text-heading">
                  Over dark surface
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Frosted glass with border-white/40 and soft layered shadow.
                </p>
              </GlassCard>
            </div>
          </div>
        </Block>

        <Block title="Accordion">
          <GlassCard className="px-6 md:px-8">
            <Accordion items={faqs.slice(0, 4)} />
          </GlassCard>
        </Block>

        <Block title="Container">
          <div className="rounded-card border border-dashed border-teal-800/30 bg-cream-dark/50 py-10 text-center text-sm text-muted">
            This content sits inside Container (max-w-site · responsive padding).
          </div>
        </Block>
      </Container>
    </main>
  );
}
