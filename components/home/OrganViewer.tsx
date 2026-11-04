"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";

const OrganModel = dynamic(() => import("@/components/home/OrganModel"), {
  ssr: false,
  loading: () => null,
});

function OrganFallback({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src={doctor.hero.organ.src}
        alt={doctor.hero.organ.alt}
        width={520}
        height={520}
        className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(201,161,91,0.2)]"
        sizes="(max-width: 1024px) 70vw, 420px"
        priority={priority}
      />
    </div>
  );
}

function useIsMobileViewport(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [breakpoint]);

  return isMobile;
}

type OrganViewerProps = {
  className?: string;
};

export default function OrganViewer({ className }: OrganViewerProps) {
  const isMobile = useIsMobileViewport(1024);
  const [mounted, setMounted] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const handleReady = useCallback(() => setModelReady(true), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isMobile) {
    return <OrganFallback className={className} priority />;
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      <OrganFallback
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          modelReady ? "pointer-events-none opacity-0" : "opacity-100",
        )}
        priority
      />
      <OrganModel
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          modelReady ? "opacity-100" : "opacity-0",
        )}
        interactive
        onReady={handleReady}
      />
    </div>
  );
}
