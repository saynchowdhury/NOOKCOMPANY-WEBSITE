import React from 'react';

const VisionNarrative: React.FC = () => {
  return (
    <section 
      id="vision"
      className="bg-[#FEFFFC] w-full" 
      style={{ 
        paddingTop: 'clamp(120px, 15vw, 220px)', 
        paddingBottom: 'clamp(120px, 15vw, 220px)' 
      }}
    >
      <div className="container max-w-[1080px] mx-auto px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Column: Pixel Art Flower Illustration */}
          <div className="flex justify-center md:justify-start items-center overflow-hidden">
            <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[550px] flex items-center justify-center">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83d0d676-f923-471a-8f72-b5aa71a991c9-generalintelligencecompany-com/assets/images/images_1.png"
                alt="Pixel art illustration"
                className="w-full h-full object-contain pixel-render"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Right Column: Problem 1 */}
          <div className="flex flex-col gap-8 md:gap-12">
            
            <div className="flex flex-col gap-6 max-w-[42ch]">
              <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-[#A1A1AA]">
                Core Problem
              </p>
              <p className="font-sans text-[15px] leading-[140%] tracking-[-0.15px] text-foreground">
                AI can think, generate, and respond &mdash; but it doesn&apos;t own outcomes.
              </p>
              <p className="font-sans text-[15px] leading-[140%] tracking-[-0.15px] text-foreground">
                Humans are still stuck prompting, supervising, and repeating themselves. Intelligence is present, but leverage is missing.
              </p>
            </div>

            <div className="max-w-[18ch]">
              <h2 
                className="font-display font-normal text-[32px] md:text-[40px] leading-[110%] tracking-[-0.8px] text-foreground"
                style={{ fontKerning: 'none', fontFeatureSettings: '"liga" off' }}
              >
                Intelligence exists, but it doesn&apos;t take responsibility.
              </h2>
            </div>

            <div className="pt-4 border-t border-black/5">
              <p className="font-sans text-[13px] font-medium tracking-wider uppercase text-[#A1A1AA] mb-3">
                The Nook Company Vision
              </p>
              <p className="font-display font-normal text-[22px] md:text-[28px] leading-[120%] tracking-[-0.5px] text-foreground max-w-[24ch]">
                Intelligence that works independently once given direction.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionNarrative;
