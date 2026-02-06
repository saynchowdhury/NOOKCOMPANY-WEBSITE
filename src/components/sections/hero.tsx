'use client';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden" data-navbar-theme="dark">
      <div className="relative min-h-[100svh] w-full flex flex-col">
        {/* Full-screen Background - GIF */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.gif"
            alt="The Nook Company"
            className="absolute inset-0 w-full h-full object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Top Header Utilities */}
        <div className="absolute top-6 right-8 z-[103] hidden md:flex items-center text-white">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
            <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeOpacity="0.5" />
            <path d="M6 3V6H8.5" stroke="currentColor" strokeLinecap="square" />
          </svg>
          <span className="ml-[10px] font-sans text-[13px] font-medium leading-[140%] tracking-[-0.15px] tabular-nums">
            Always On
          </span>
          <span className="ml-[12px] font-sans text-[13px] font-medium leading-[140%] tracking-[-0.15px]">
            Global
          </span>
        </div>

        {/* Main content area */}
        <div className="relative flex-1 flex flex-col justify-start pt-20 w-full z-10">
          <div className="container relative flex flex-col items-center">
            
            {/* Centered Large Serif Heading */}
            <h1
              className={`text-[32px] sm:text-[48px] lg:text-[54px] xl:text-[64px] leading-[110%] tracking-[-1.08px] font-display text-white text-center font-normal max-w-[24ch] pt-8 md:pt-16 [font-kerning:none] [font-feature-settings:'liga'_off] transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              The&nbsp;Nook&nbsp;Company
            </h1>

            {/* Floating Top-Right Text Descriptor */}
            <div
              className={`lg:absolute lg:top-1/4 lg:right-10 mt-8 lg:mt-0 max-w-[340px] px-5 transition-all duration-1000 delay-300 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex flex-col lg:gap-3 items-center lg:items-end text-center lg:text-right text-white">
                <div className="relative hidden lg:block w-[35px] h-[18px] mb-2">
                  <svg width="35" height="18" fill="white">
                    <rect y="0" width="33.7188" height="1.77441" />
                    <rect y="4" width="9.45312" height="1.77441" />
                    <rect x="11" y="4" width="3.54688" height="1.77441" />
                    <rect x="16" y="4" width="3.54688" height="1.77441" />
                    <rect x="21" y="4" width="3.54688" height="1.77441" />
                    <rect x="26" y="8" width="1.77" height="1.77441" />
                    <rect x="29" y="8" width="1.77" height="1.77441" />
                  </svg>
                </div>
                <p className="font-sans font-medium text-[15px] tracking-[-0.15px] leading-[140%] max-w-[26ch] opacity-90">
                  Intelligence is everywhere. Leverage is what&apos;s missing.
                </p>
              </div>
            </div>

            {/* Main Floating Frosted Glass Card */}
            <div
              className={`mt-16 lg:mt-24 mx-5 lg:mx-0 max-w-[500px] self-center lg:self-start lg:ml-8 transition-all duration-1000 delay-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="p-6 lg:p-8 lg:pr-10 relative rounded-2xl backdrop-blur-[15px] border border-white/20 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] bg-gradient-to-br from-black/15 via-black/5 to-transparent bg-clip-padding">
                <div className="flex relative z-10 flex-col gap-4 items-start">
                  <h2 className="font-display font-medium text-[22px] sm:text-[28px] xl:text-[40px] leading-[120%] md:leading-[110%] tracking-[-0.8px] text-white max-w-[25ch] text-left mb-2">
                    Intelligence that works independently once given direction.
                  </h2>
                  <p className="font-sans font-medium text-white/90 text-[15px] leading-[140%] max-w-[42ch] tracking-[-0.15px]">
                    The Nook Company is building the systems that give humans leverage in a future where intelligence is everywhere and effort is not enough.
                  </p>
                  
                  <a href="#vision" className="group mt-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-white text-[15px] font-medium font-sans border-b border-white/40 group-hover:border-white transition-colors pb-0.5">
                        Explore our vision
                      </span>
                      <div className="flex items-center justify-center w-[12px] h-[16px] pl-[1.5px] rounded-full border border-white/40 leading-none">
                        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                          <svg width="7" height="10" className="text-white transition-transform duration-500 group-hover:translate-x-1">
                            <rect x="0" y="0" width="1.41526" height="1.41526" fill="currentColor" />
                            <rect x="1.5" y="1.5" width="1.41526" height="1.41526" fill="currentColor" />
                            <rect x="3" y="3" width="1.41526" height="1.41526" fill="currentColor" />
                            <rect x="0" y="4.5" width="1.41526" height="4.24579" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Signature Scan-line Transition */}
      <div className="w-full bg-white/5 relative z-20">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="w-full h-[6px]"></div>
            <div className="w-full h-[1px] bg-white/20"></div>
          </div>
        ))}
        <div className="w-full h-[6px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
