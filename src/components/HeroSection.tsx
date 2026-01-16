import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#3d3d3d] text-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-[#5a5a5a]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center text-sm tracking-wide">
          <div className="font-light">2023</div>
          <div className="font-light">Curriculum Vitae</div>
          <div className="font-light">Sharon Kravanja</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center relative max-w-5xl">
          {/* Handwritten Name with Decorative Curve */}
          <div className="relative mb-2">
            <svg 
              className="absolute left-1/2 -translate-x-1/2 -top-4 w-64 h-32" 
              viewBox="0 0 250 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 20 100 Q 125 20, 230 100" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
            <div className="font-handwriting text-5xl md:text-6xl text-[#8b9dc3] relative z-10">
              Sharon Kravanja
            </div>
          </div>

          {/* Portfolio Text with Decorative Elements */}
          <div className="relative inline-block mt-4">
            <h1 className="font-serif text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight leading-none">
              P
              <span className="relative inline-block mx-1">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-handwriting text-[#8b9dc3] font-normal">
                  23
                </span>
              </span>
              rtf
              <span className="relative inline-block mx-1">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-[#8b9dc3]">
                  ✦
                </span>
              </span>
              li
              <span className="relative inline-block mx-1">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-handwriting text-[#8b9dc3] font-normal">
                  CV
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-10">
            <span className="inline-block border-2 border-white rounded-full px-10 py-3 text-xl md:text-2xl font-light tracking-wider">
              UX/UI Designer
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-[#5a5a5a]"></div>
    </section>
  );
};

export default HeroSection;
