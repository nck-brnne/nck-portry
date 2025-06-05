import React from 'react';

const images = [
  '/data/homies.jpg',
  '/data/solitude.jpg',
  '/data/Valir.jpg',
  '/data/yz.jpg',
  '/data/Vans.jpg',
  '/data/mylogo.jpg',
  '/data/stygian.jpg',
  '/data/Pasta.jpg',
  '/data/grain.jpg',
  '/data/clean.jpg',
  '/data/Pizza.jpg',
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
