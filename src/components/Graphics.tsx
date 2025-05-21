import React from 'react';
import GraphicsGrid from './GrapchisGrid'; // make sure this file path is correct

const Graphics = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white/70">
      <section id="Graphics">
        <div className="py-5 lg:py-20 px-4 lg:px-20 scroll-mt-24">
          <h1 className="mb-5 text-2xl font-black uppercase text-center text-purple-500">
            Recent Works
          </h1>
          <h2 className="text-md  text-white-400 uppercase text-center">
            ✨ Graphic, Artwork Design ✨
          </h2>

          {/* ✅ Import your new responsive grid here */}
          <GraphicsGrid />
        </div>
      </section>
    </section>
  );
};

export default Graphics;
