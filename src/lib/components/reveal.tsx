"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "scale" | "left" | "mask";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
  }
  return observer;
}

/**
 * Scroll reveal. The element is only hidden under `html.js` (see globals.css),
 * so content is visible without JavaScript, when printed, and with reduced motion.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  variant = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = getObserver();
    if (!io) {
      node.classList.add("is-visible");
      return;
    }
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      data-reveal={variant}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
