"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-teal-950/8 bg-cream/90 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="relative z-[60] flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center"
          aria-label={`${doctor.name} — home`}
        >
          <Image
            src={solid ? "/images/logo.png" : "/images/logo-on-dark.png"}
            alt="Dr. Khawar Laparoscopy & Surgical Centre"
            width={926}
            height={343}
            className="h-11 w-auto max-w-[200px] object-contain min-[400px]:h-12 min-[400px]:max-w-[240px] md:h-12 md:max-w-[240px] lg:h-[3.75rem] lg:max-w-[340px]"
            sizes="(max-width: 768px) 240px, 340px"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-2.5 py-2 text-sm font-medium transition",
                  solid
                    ? active
                      ? "text-teal-950"
                      : "text-muted hover:text-teal-950"
                    : active
                      ? "text-cream"
                      : "text-cream/75 hover:text-cream",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gold transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/book"
            variant="gold"
            size="sm"
            className="hidden lg:inline-flex lg:px-5 lg:py-2.5 lg:text-sm"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden",
              solid
                ? "border-teal-950/15 text-teal-950"
                : "border-cream/30 text-cream",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[55] bg-cream xl:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="flex h-full flex-col pb-10 pt-24">
              <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
                {mainNav.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block border-b border-teal-950/8 py-4 font-serif text-2xl text-heading sm:text-3xl",
                          active && "text-gold-dark",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-4">
                <Button href="/book" className="w-full" onClick={() => setOpen(false)}>
                  Book Appointment
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <div className="grid gap-3">
                  {hospitals.map((hospital) => (
                    <a
                      key={hospital.id}
                      href={hospital.phoneHref}
                      className="flex items-center gap-3 rounded-2xl border border-teal-950/10 bg-white/70 px-4 py-3 text-sm text-teal-950"
                    >
                      <Phone className="h-4 w-4 text-gold" aria-hidden />
                      <span>
                        <span className="block font-medium">{hospital.name}</span>
                        <span className="text-muted">{hospital.phone}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
