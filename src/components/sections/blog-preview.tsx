"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Solution {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const solutions: Solution[] = [
  {
    title: "Personal AI Ownership",
    description:
      "Your own AI that remembers, learns, and evolves with you — decentralized, private, and truly yours.",
    image: "/solution-1.jpg",
    tag: "DECENTRALIZED INTELLIGENCE",
  },
  {
    title: "No-Code Model Training",
    description:
      "Build and fine-tune custom AI models from simple prompts. Production-ready in minutes.",
    image: "/solution-2.jpg",
    tag: "CUSTOM AI MODELS",
  },
  {
    title: "Multiplied Cognition",
    description:
      "Deploy multiple AI agents as extensions of your mind — modular, parallel, and always working.",
    image: "/solution-3.jpg",
    tag: "MIND MULTIPLICATION",
  },
];

function useScrollReveal(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

function SolutionCard({
  item,
  index,
}: {
  item: Solution;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="transition-all ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 50}px)`,
        transitionDuration: "900ms",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <a
        href="#"
        className="group relative block aspect-[3/4] rounded-[16px] overflow-hidden shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover pixel-render transition-transform duration-700 ease-out"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Overlay that intensifies on hover */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
          }}
        />

        {/* Tag at top */}
        <div
          className="absolute top-4 left-4 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: `translateY(${hovered ? 0 : -10}px)`,
          }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-white/80">
            {item.tag}
          </span>
        </div>

        {/* Content at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <div
            className="glass-nav rounded-xl p-4 transition-all duration-500"
            style={{
              background: hovered
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0.12)",
              backdropFilter: hovered ? "blur(16px)" : "blur(9px)",
              transform: `translateY(${hovered ? -4 : 0}px)`,
            }}
          >
            <h3 className="text-white font-display text-[18px] md:text-[20px] leading-[1.2] mb-2 tracking-[-0.2px]">
              {item.title}
            </h3>
            <p
              className="text-white/70 font-sans text-[12px] md:text-[13px] font-medium tracking-[-0.15px] leading-[1.5] transition-all duration-500"
              style={{
                opacity: hovered ? 1 : 0.8,
                maxHeight: hovered ? "80px" : "40px",
              }}
            >
              {item.description}
            </p>

            {/* Arrow indicator on hover */}
            <div
              className="mt-3 flex items-center gap-2 transition-all duration-500"
              style={{
                opacity: hovered ? 1 : 0,
                transform: `translateX(${hovered ? 0 : -8}px)`,
              }}
            >
              <span className="text-white/60 font-sans text-[11px] font-semibold tracking-[0.1em] uppercase">
                Learn more
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-white/60"
              >
                <path
                  d="M2 6H10M10 6L7 3M10 6L7 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

const BlogPreview = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerVisible = useScrollReveal(headerRef);

  return (
    <section className="w-full bg-[#FEFFFC] py-[120px] md:py-[160px] lg:py-[200px]">
      <div className="container max-w-[1080px] mx-auto">
        <div
          ref={headerRef}
          className="mb-12 transition-all ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: `translateY(${headerVisible ? 0 : 30}px)`,
            transitionDuration: "800ms",
          }}
        >
          <h2 className="text-[28px] md:text-[40px] leading-[120%] tracking-[-0.8px] font-display text-primary mb-4">
            The solutions we are building
          </h2>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-[-0.15px] font-sans pb-1 border-b border-black/10 hover:border-black/40 transition-colors"
          >
            Explore our work
            <div className="flex items-center justify-center w-3 h-4 pl-[2.5px] pr-[1.5px] py-0 rounded-[50px] border border-black/10 leading-none overflow-hidden">
              <svg
                width="7"
                height="10"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <rect
                  width="1.41526"
                  height="1.41526"
                  fill="black"
                ></rect>
                <rect
                  y="2"
                  width="1.41526"
                  height="1.41526"
                  fill="black"
                ></rect>
                <rect
                  y="4"
                  width="1.41526"
                  height="1.41526"
                  fill="black"
                ></rect>
                <rect
                  x="2"
                  y="4"
                  width="1.41526"
                  height="4.24579"
                  fill="black"
                ></rect>
              </svg>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <SolutionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
