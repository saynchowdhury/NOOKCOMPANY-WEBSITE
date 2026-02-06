import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#FEFFFC] pt-[120px] md:pt-[160px] xl:pt-[200px] 2xl:pt-[220px]">
      <div className="container px-5 md:px-8 xl:px-12 2xl:px-30 mx-auto text-center">
        {/* Top Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/nook-logo.png"
            alt="The Nook Company"
            width={48}
            height={48}
            className="opacity-60 rounded-sm"
          />
        </div>

        {/* CTA Heading */}
        <div className="max-w-[720px] mx-auto mb-6">
          <h2 className="font-display text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.8px] text-zinc-900 [font-kerning:none]">
            The Nook Company is building the systems that give humans leverage in a future where intelligence is everywhere and effort is not enough.
          </h2>
        </div>

        {/* Bottom Navigation & Utilities */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 mt-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="/" className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Home</a>
            <a href="/about" className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
            <a href="#vision" className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Vision</a>
            <a href="/privacy" className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-9 h-9 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
              aria-label="Follow us on X"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-9 h-9 flex items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Global Signature Line */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
          <p className="font-sans text-[13px] font-medium text-zinc-400">
            &copy; The Nook Company 2026
          </p>
        </div>
      </div>

        {/* Footer Image */}
        <div className="w-full mt-12">
          <div className="relative w-full" style={{ aspectRatio: '16 / 4' }}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83d0d676-f923-471a-8f72-b5aa71a991c9/Untitled-design-1770401829847.png?width=8000&height=8000&resize=contain"
              alt="The Nook Company - train on golden landscape"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
