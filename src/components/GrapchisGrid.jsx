import React from 'react';

const images = [
  '/data/homies.jpg',
  '/data/solitude.jpg',
  '/data/lambo.jpg',
  '/data/yz.jpg',
  '/data/Lisa.jpg',
  '/data/mylogo.jpg',
  '/data/valir.jpg',
  '/data/stygian.jpg',
  '/data/fanta.jpg',
  '/data/rentcont.jpg',
  '/data/grain.jpg',
  '/data/clean.jpg',
];

const GraphicsGrid = () => {
  return (
    <div className="columns-1 sm:Columns-2 lg:columns-3 py-10 md:py-5 gap-3">
      {images.map((src, index) => (
        <div key={index} className="mb-3 break-inside-avoid">
          <img
            src={src}
            alt=""
            className="w-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-95"
          />
        </div>
      ))}
    </div>
  );
};

export default GraphicsGrid;
