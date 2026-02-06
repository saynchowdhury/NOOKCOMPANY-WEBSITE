"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-[112] w-full lg:max-w-fit mx-auto lg:rounded-[12px] transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[background-color,border-color,box-shadow,backdrop-filter] lg:border border-white/20 backdrop-blur-[9px] ${
          isScrolled 
            ? "bg-white/80 lg:shadow-[0_4px_12px_rgba(0,0,0,0.08)]" 
            : "bg-gradient-to-r from-[rgba(249,250,247,0.12)] to-[rgba(249,250,247,0.18)] lg:shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]"
        }`}
      >
        <div className="flex gap-6 items-center px-5 py-3 lg:px-3 lg:py-2 w-full justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative w-[36px] h-[36px] transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <Image
                src="/nook-logo.png"
                alt="The Nook Company"
                width={36}
                height={36}
                className="rounded-sm object-contain"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden gap-6 items-center lg:flex">
            {['About', 'Vision'].map((item) => (
              <Link 
                key={item}
                href={item === 'Vision' ? '#vision' : `/${item.toLowerCase()}`}
                className="font-medium text-[15px] leading-[140%] tracking-[-0.15px] text-white hover:opacity-80 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-sans"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center lg:gap-6">
            {/* Mobile Menu Toggle */}
            <button 
              className="flex relative flex-col justify-center items-center w-9 h-9 rounded-lg backdrop-blur-sm focus:outline-none group cursor-pointer lg:hidden" 
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`block w-3.25 h-0.25 rounded-full transition-all duration-220 ease-in-out origin-center bg-white ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : 'rotate-0 translate-y-0'}`}></span>
              <span className={`block w-3.25 h-0.25 rounded-full transition-all duration-160 ease-in-out origin-center bg-white mt-1 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`block w-3.25 h-0.25 rounded-full transition-all duration-220 ease-in-out origin-center bg-white mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] h-dvh transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 flex flex-col justify-center items-center px-8 h-full">
          <div className="flex flex-col items-center space-y-6">
            {['Home', 'About', 'Vision'].map((item, idx) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : item === 'Vision' ? '#vision' : `/${item.toLowerCase()}`}
                className={`text-5xl font-medium font-display transition-all duration-500 delay-[${idx * 100}ms] ${
                  mobileMenuOpen ? "opacity-100 blur-0 translate-x-0" : "opacity-0 blur-lg -translate-x-10"
                } ${item === 'Home' ? 'text-black' : 'text-neutral-500 hover:text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Footer Area */}
        <div className={`absolute right-0 left-0 bottom-12 z-20 transition-all duration-700 delay-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full flex flex-col items-center gap-6">
            <p className="font-sans font-medium text-[13px] tracking-[-0.13px] text-neutral-500">
              &copy; The Nook Company 2026
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200">
                <span className="sr-only">LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200">
                <span className="sr-only">X</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
