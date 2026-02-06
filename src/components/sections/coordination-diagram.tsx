"use client";

import React, { useEffect, useRef, useState } from 'react';

const CoordinationDiagram: React.FC = () => {
  const [isCoordinatorActive, setIsCoordinatorActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const rows = 3;
  const cols = 6;
  const coordinatorIndex = { r: 1, c: 2 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = setTimeout(() => setIsCoordinatorActive(true), 1000);
          return () => clearTimeout(timeout);
        } else {
          setIsCoordinatorActive(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getPos = (r: number, c: number) => ({
    x: 60 + c * 40,
    y: 40 + r * 40
  });

  const coordPos = getPos(coordinatorIndex.r, coordinatorIndex.c);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#FEFFFC] py-[120px] md:py-[160px] xl:py-[200px] px-5 md:px-8 xl:px-12"
    >
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column - Problem 2 */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-[#A1A1AA]">
              Core Problem
            </p>
            <h2 className="text-[28px] md:text-[36px] xl:text-[40px] font-display font-normal leading-[1.2] tracking-[-0.8px] text-black max-w-[18ch]">
              Humans are becoming the bottleneck in an <span className="text-[#A1A1AA] border-b border-[#A1A1AA]/30">automated world.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-[400px]">
            {['Coordination', 'Supervision', 'Micromanagement', 'Review Cycles'].map((item) => (
              <div key={item} className="flex flex-col gap-1">
                <span className="text-[15px] font-sans font-medium tracking-[-0.15px] text-black">
                  {item}
                </span>
                <div className="h-[1px] w-full bg-black/10" />
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-[15px] font-sans font-medium leading-[140%] tracking-[-0.15px] text-[#52525B] max-w-[42ch]">
              As systems grow more powerful, coordination becomes harder. People micromanage tools instead of directing outcomes. Speed increases, but control collapses.
            </p>
          </div>

          <div className="pt-4 border-t border-black/5">
            <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-[#A1A1AA] mb-3">
              The Nook Company Vision
            </p>
            <p className="font-display font-normal text-[22px] md:text-[28px] leading-[120%] tracking-[-0.5px] text-black max-w-[24ch]">
              Systems where humans set intent and intelligence executes.
            </p>
          </div>
        </div>

        {/* Right Diagram Column */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] max-w-[500px] border border-black/5 rounded-[24px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)] flex items-center justify-center p-8">
            <svg 
              viewBox="0 0 320 200" 
              className="w-full h-full overflow-visible"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: rows }).map((_, r) => (
                Array.from({ length: cols }).map((_, c) => {
                  if (r === coordinatorIndex.r && c === coordinatorIndex.c) return null;
                  
                  const target = getPos(r, c);
                  const isVisible = isCoordinatorActive;
                  
                  return (
                    <line
                      key={`line-${r}-${c}`}
                      x1={coordPos.x}
                      y1={coordPos.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${(r * cols + c) * 50}ms` }}
                    />
                  );
                })
              ))}

              {Array.from({ length: rows }).map((_, r) => (
                Array.from({ length: cols }).map((_, c) => {
                  const pos = getPos(r, c);
                  const isCoordinator = r === coordinatorIndex.r && c === coordinatorIndex.c;
                  
                  return (
                    <g key={`node-${r}-${c}`}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="16"
                        className={`transition-all duration-700 ease-in-out ${
                          isCoordinator 
                          ? (isCoordinatorActive ? 'stroke-black fill-white' : 'stroke-black/10 fill-transparent')
                          : 'stroke-black/10 fill-transparent'
                        }`}
                        strokeWidth="1"
                      />
                      
                      {!isCoordinator && (
                        <rect
                          x={pos.x - 2}
                          y={pos.y - 2}
                          width="4"
                          height="4"
                          fill="rgba(0, 0, 0, 0.05)"
                          className={`transition-opacity duration-500 ${isCoordinatorActive ? 'opacity-30' : 'opacity-100'}`}
                        />
                      )}

                      {isCoordinator && (
                        <g className={`transition-opacity duration-700 ${isCoordinatorActive ? 'opacity-100' : 'opacity-0'}`}>
                          <rect x={pos.x - 4} y={pos.y + 2} width="8" height="1.5" fill="black" />
                          <circle cx={pos.x} cy={pos.y - 2} r="2.5" stroke="black" strokeWidth="1" />
                        </g>
                      )}
                    </g>
                  );
                })
              ))}
            </svg>

            <div className={`absolute top-1/4 right-1/4 bg-white/80 backdrop-blur-sm border border-black/5 p-2 rounded-lg shadow-sm transition-all duration-1000 transform ${isCoordinatorActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <span className="text-[10px] font-sans font-medium text-black/40">Intent received...</span>
            </div>
            <div className={`absolute bottom-1/4 left-1/4 bg-white/80 backdrop-blur-sm border border-black/5 p-2 rounded-lg shadow-sm transition-all duration-1000 delay-300 transform ${isCoordinatorActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <span className="text-[10px] font-sans font-medium text-black/40">Executing autonomously</span>
            </div>
          </div>
        </div>
      </div>

      {/* Signature scan-line divider */}
      <div className="mt-[120px] md:mt-[160px] xl:mt-[200px] flex flex-col gap-[6px] w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <span 
            key={i} 
            className="h-[1px] bg-black/5 w-full" 
            style={{ opacity: 1 - (i * 0.15) }}
          />
        ))}
      </div>
    </section>
  );
};

export default CoordinationDiagram;
