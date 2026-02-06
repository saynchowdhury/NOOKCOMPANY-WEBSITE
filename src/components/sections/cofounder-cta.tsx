import React from 'react';
import Image from 'next/image';

const CofounderCTA = () => {
  return (
    <section className="w-full bg-[#FEFFFC] py-20 md:py-32 lg:py-40 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full rounded-[32px] overflow-hidden aspect-[16/9] md:aspect-[21/9] lg:min-h-[600px] shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83d0d676-f923-471a-8f72-b5aa71a991c9-generalintelligencecompany-com/assets/images/cofounder-bg-7.avif"
              alt="The Nook Company Landscape"
              fill
              priority
              className="object-cover pixel-render"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 lg:p-20">
            <div className="max-w-[600px]">
              <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-white/60 mb-4">
                Core Problem
              </p>
              <h2 className="text-white font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] mb-6">
                The future rewards leverage, not effort.
              </h2>
              <p className="text-white/90 font-sans text-[15px] leading-[140%] tracking-[-0.01em] mb-6 max-w-[400px]">
                Automation favors institutions with scale. Individuals and small teams fall behind without intelligent infrastructure. The gap widens quietly, but permanently.
              </p>
              
              <div className="pt-6 border-t border-white/10 max-w-[400px]">
                <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-white/50 mb-3">
                  The Nook Company Vision
                </p>
                <p className="font-display font-normal text-[22px] md:text-[28px] leading-[120%] tracking-[-0.5px] text-white max-w-[24ch]">
                  Personal access to the same leverage as institutions.
                </p>
              </div>
            </div>

            {/* Bottom Left Badge */}
            <div className="mt-auto flex items-start gap-3 max-w-[280px]">
              <div className="flex-shrink-0 mt-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white/80 font-sans text-[13px] leading-[1.3] font-medium italic">
                Intelligence everywhere. Effort is not enough.
              </p>
            </div>

            {/* Floating Notification UI */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 animate-in fade-in slide-in-from-top-4 duration-1000">
              <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-4 w-[300px] md:w-[360px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                      <Image
                        src="/nook-logo.png"
                        alt="Nook"
                        width={14}
                        height={14}
                        className="rounded-sm"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-black/40 uppercase tracking-wider">The Nook Company</span>
                  </div>
                  <span className="text-[11px] text-black/30 font-medium">now</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[13px] font-semibold text-black leading-tight">
                    Leverage deployed for your team
                  </p>
                  <p className="text-[12px] text-black/60 leading-tight">
                    Intelligent systems now handling operations autonomously...
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute top-[20%] right-[30%] opacity-40">
              <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 80C50 60 150 20 200 10" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CofounderCTA;
