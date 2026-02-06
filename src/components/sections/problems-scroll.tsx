"use client";

import React, { useRef, useEffect, useState } from "react";

const problems = [
  {
    number: "01",
    headline: "Own Your Personal AI.",
    tag: "DECENTRALIZATION OF AI",
    points: [
      "AI as a personal, persistent asset.",
      "Ownership, memory, and continuity over time.",
      "Your intelligence, not a shared assistant.",
    ],
  },
  {
    number: "02",
    headline: "Build and Train Custom AI Models.",
    tag: "CREATING AI MODELS ARE NOW EASY",
    points: [
      "Prompt intent, get fine-tuned models.",
      "No-code pipelines for custom training.",
      "Ship production AI in minutes, not months.",
    ],
  },
  {
    number: "03",
    headline: "Your Mind. Multiplied.",
    tag: "INTELLIGENCE AS AN OPERATING SYSTEM",
    points: [
      "Multiple AI selves acting as extensions of one mind.",
      "Cognition that is modular and externalized.",
      "A future where intelligence scales with you.",
    ],
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress 0 when element top hits bottom of viewport, 1 when element bottom leaves top
      const total = rect.height + windowH;
      const scrolled = windowH - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      setIsVisible(rect.top < windowH * 0.85 && rect.bottom > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return { progress, isVisible };
}

function ProblemCard({
  item,
  index,
}: {
  item: (typeof problems)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { progress, isVisible } = useScrollProgress(ref);
  const [hovered, setHovered] = useState(false);

  // Stagger entrance based on scroll progress
  const entered = isVisible && progress > 0.15;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative py-20 md:py-28 lg:py-36 
        border-t border-black/5 first:border-t-0
        transition-colors duration-700 cursor-default
        ${hovered ? "bg-black" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 xl:px-12 relative">
        {/* Animated background number */}
        <div
          className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none transition-all duration-1000 ease-out"
          style={{
            opacity: entered ? (hovered ? 0.08 : 0.03) : 0,
            transform: `translateY(-50%) scale(${entered ? 1 : 0.8}) translateX(${entered ? 0 : 40}px)`,
          }}
        >
          <span
            className={`font-display text-[180px] md:text-[260px] lg:text-[340px] leading-none tracking-[-12px] font-normal transition-colors duration-700 ${
              hovered ? "text-white" : "text-black"
            }`}
          >
            {item.number}
          </span>
        </div>

        {/* Tag */}
        <div
          className="transition-all ease-out"
          style={{
            opacity: entered ? 1 : 0,
            transform: `translateX(${entered ? 0 : -30}px)`,
            transitionDuration: "800ms",
            transitionDelay: "0ms",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-700 ${
                hovered ? "bg-white scale-150" : "bg-black/30"
              }`}
            />
            <span
              className={`font-sans text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors duration-700 ${
                hovered ? "text-white/60" : "text-[#A1A1AA]"
              }`}
            >
              Problem {item.number}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          className="transition-all ease-out"
          style={{
            opacity: entered ? 1 : 0,
            transform: `translateY(${entered ? 0 : 40}px)`,
            transitionDuration: "900ms",
            transitionDelay: "120ms",
          }}
        >
          <h2
            className={`font-display font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-1.5px] max-w-[16ch] transition-colors duration-700 ${
              hovered ? "text-white" : "text-black"
            }`}
          >
            {item.headline}
          </h2>
        </div>

        {/* Tag line */}
        <div
          className="transition-all ease-out"
          style={{
            opacity: entered ? 1 : 0,
            transform: `translateY(${entered ? 0 : 20}px)`,
            transitionDuration: "800ms",
            transitionDelay: "250ms",
          }}
        >
          <p
            className={`mt-4 md:mt-6 font-sans text-[12px] md:text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-700 ${
              hovered ? "text-white/40" : "text-black/25"
            }`}
          >
            {item.tag}
          </p>
        </div>

        {/* Animated divider */}
        <div
          className="mt-8 md:mt-10 h-[1px] origin-left transition-all ease-out"
          style={{
            transform: `scaleX(${entered ? 1 : 0})`,
            opacity: entered ? 1 : 0,
            transitionDuration: "1200ms",
            transitionDelay: "350ms",
            maxWidth: "520px",
            backgroundColor: hovered
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.08)",
          }}
        />

        {/* Points with staggered entrance */}
        <div className="mt-8 md:mt-10 space-y-4">
          {item.points.map((point, i) => (
            <div
              key={i}
              className="transition-all ease-out"
              style={{
                opacity: entered ? 1 : 0,
                transform: `translateX(${entered ? 0 : 24}px)`,
                transitionDuration: "800ms",
                transitionDelay: `${450 + i * 120}ms`,
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-[7px] w-1 h-1 rounded-full shrink-0 transition-all duration-700 ${
                    hovered
                      ? "bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      : "bg-black/20"
                  }`}
                />
                <p
                  className={`font-sans text-[15px] md:text-[17px] leading-[155%] tracking-[-0.2px] transition-colors duration-700 ${
                    hovered ? "text-white/75" : "text-[#52525B]"
                  }`}
                >
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div
          className="absolute top-20 md:top-28 lg:top-36 right-5 md:right-8 xl:right-12 transition-all duration-700 ease-out"
          style={{
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1 : 0.7})`,
            transitionDelay: "200ms",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col gap-1.5">
              {problems.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 rounded-full ${
                    i === index
                      ? hovered
                        ? "w-1.5 h-6 bg-white/60"
                        : "w-1.5 h-6 bg-black/30"
                      : hovered
                        ? "w-1.5 h-1.5 bg-white/15"
                        : "w-1.5 h-1.5 bg-black/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProblemsScroll: React.FC = () => {
  return (
    <section id="vision" className="bg-[#FEFFFC] w-full">
      {problems.map((item, index) => (
        <ProblemCard key={item.number} item={item} index={index} />
      ))}
    </section>
  );
};

export default ProblemsScroll;
