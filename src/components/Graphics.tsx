import React from 'react';
import { images } from '../data/images';
import FadeInSection from './FadeInSection';

const Graphics = () => {
  return (
    <FadeInSection>
      <section id="Graphics">
        <div className="w-full h-px bg-white opacity-20 mb-10"></div>
        <div className="py-10 lg:py-20 px-4 lg:px-20 scroll-mt-24">
          <h1 className="mb-5 text-2xl font-black uppercase text-center text-purple-500">
            Recent Works
          </h1>
          <h2 className="text-md mb-2 text-gray-400 uppercase text-center">
            {' '}
            🚀 Graphic, Logo Design{' '}
          </h2>
          <div className="grid grid-cols-7 gap-3 p-4 auto-rows-[150px]">
            {images.map((image) => (
              <div
                key={image.id}
                style={{
                  gridColumnStart: image.colStart,
                  gridColumnEnd: image.colEnd,
                  gridRowStart: image.rowStart,
                  gridRowEnd: image.rowEnd,
                }}
                className="w-full h-full overflow-hidden rounded-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Graphics;
