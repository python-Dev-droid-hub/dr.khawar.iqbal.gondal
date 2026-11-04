"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** True only for fine-pointer hover devices when motion is allowed. */
export function useCanParallax() {
  const reduceMotion = useReducedMotion();
  const [canParallax, setCanParallax] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setCanParallax(false);
      return;
    }

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanParallax(media.matches);
    sync();

    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [reduceMotion]);

  return { canParallax, reduceMotion: !!reduceMotion };
}
