import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#f5f3f0] text-black flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Photo with Decorative Elements */}
        <div className="relative flex justify-center">
          {/* Photo Placeholder Circle */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Main circular photo placeholder */}
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-xl">
              {/* Placeholder for image - you'll add the actual image later */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                Photo Placeholder
              </div>
            </div>

            {/* Decorative Text Elements Around Circle */}
            {/* Top Left - creative */}
            <div className="absolute -top-8 left-8 font-handwriting text-[#8b9dc3] text-2xl flex items-center gap-2">
              creative
              <span className="text-3xl">✦</span>
            </div>

            {/* Top Right - detail-oriented */}
            <div className="absolute -top-4 right-4 font-handwriting text-[#8b9dc3] text-2xl flex items-center gap-2">
              <span className="text-4xl">✦</span>
              detail-oriented
            </div>

            {/* Left - sociable */}
            <div className="absolute top-1/3 -left-16 font-handwriting text-[#8b9dc3] text-2xl">
              sociable
            </div>

            {/* Right - empathic */}
            <div className="absolute top-1/2 -right-12 font-handwriting text-[#8b9dc3] text-2xl">
              empathic
            </div>

            {/* Bottom Left - motivated */}
            <div className="absolute -bottom-8 left-4 font-handwriting text-[#8b9dc3] text-2xl flex items-center gap-2">
              motivated
              <span className="text-2xl">✦</span>
            </div>

            {/* Bottom Right - fast learner */}
            <div className="absolute -bottom-4 right-8 font-handwriting text-[#8b9dc3] text-2xl flex items-center gap-2">
              <span className="text-2xl">✦</span>
              fast learner
              <span className="text-xl">✦</span>
            </div>

            {/* Decorative Curved Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 400 400"
            >
              {/* Curved line on left */}
              <path 
                d="M 50 150 Q 30 200, 50 250" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              {/* Curved line on right */}
              <path 
                d="M 350 180 Q 380 220, 350 260" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              {/* Top curved line */}
              <path 
                d="M 150 30 Q 200 10, 250 30" 
                stroke="#8b9dc3" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Right Side - About Text */}
        <div className="space-y-6">
          <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8">
            Hello,
          </h2>
          
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-justify">
            <p>
              As a junior UX/UI Designer based in Paris, I get to combine my love for 
              technology with my passion for art and design. I enjoy using my 
              creativity and problem-solving skills to create digital experiences 
              that not only look great but also work seamlessly for the user. When 
              I'm not designing, you can usually find me exploring the city's many 
              museums and galleries for inspiration.
            </p>
            
            <p>
              I believe that continuous learning is the key to success, and I'm always on the 
              lookout for fresh challenges to keep me motivated and engaged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
