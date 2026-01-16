import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#3a3a3a] text-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-gray-600">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-sm font-light">2023</div>
          <div className="text-sm font-light">Curriculum Vitae</div>
          <div className="text-sm font-light">Sharon Kravanja</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center relative">
          {/* Handwritten Name */}
          <div className="font-handwriting text-4xl md:text-5xl text-[#8b9dc3] mb-4">
            Sharon Kravanja
          </div>

          {/* Portfolio Text with Decorative Elements */}
          <div className="relative inline-block">
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              P
              <span className="relative inline-block">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-handwriting text-[#8b9dc3]">
                  23
                </span>
              </span>
              rtf
              <span className="relative inline-block">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                  ✦
                </span>
              </span>
              li
              <span className="relative inline-block">
                o
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-handwriting text-[#8b9dc3]">
                  CV
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-8">
            <span className="inline-block border-2 border-white rounded-full px-8 py-2 text-lg md:text-xl font-light tracking-wide">
              UX/UI Designer
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-600 h-12"></div>
    </section>
  );
};

export default HeroSection;
