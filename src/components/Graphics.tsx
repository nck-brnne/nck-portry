import React from 'react';
import GraphicsGrid from './GrapchisGrid'; // make sure this file path is correct
import FadeInSection from './FadeInSection';

const Graphics = () => {
  return (
    <FadeInSection>
      <section id="Graphics">
        <div className="w-full h-px bg-white opacity-20 mb-10"></div>
        <div className="py-5 lg:py-20 px-4 lg:px-20 scroll-mt-24">
          <h1 className="mb-5 text-2xl font-black uppercase text-center text-purple-500">
            Recent Works
          </h1>
          <h2 className="text-md mb-0 text-gray-400 uppercase text-center">
            🚀 Graphic, Artwork Design
          </h2>

          {/* ✅ Import your new responsive grid here */}
          <GraphicsGrid />
        </div>
      </section>
    </FadeInSection>
  );
};

export default Graphics;
