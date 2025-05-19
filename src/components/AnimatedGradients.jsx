import React from 'react';

const AnimatedGradients = () => {
  return (
    <div
      className="absolute inset-0 z-10 w-full h-full blur-lg pointer-events-none"
      style={{ filter: 'url(#blurMe) blur(40px)' }}
    >
      <div
        className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] animate-first opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, var(--first-color) 0, var(--first-color) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transformOrigin: 'center center',
        }}
      />

      <div
        className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] animate-second opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0, rgba(var(--second-color), 0) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transformOrigin: 'calc(50% - 400px)',
        }}
      />

      <div
        className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] animate-third opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0, rgba(var(--third-color), 0) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transformOrigin: 'calc(50% + 400px)',
        }}
      />

      <div
        className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] animate-fourth opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0, rgba(var(--fourth-color), 0) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transformOrigin: 'calc(50% - 200px)',
        }}
      />

      <div
        className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] animate-fifth opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0, rgba(var(--fifth-color), 0) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transformOrigin: 'calc(50% - 800px) calc(50% + 800px)',
        }}
      />

      <div
        className="absolute w-full h-full -top-1/2 -left-1/2 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0, rgba(var(--pointer-color), 0) 50%) no-repeat',
          mixBlendMode: 'var(--blending-value)',
          transform: 'translate(0px, 0px)',
        }}
      />
    </div>
  );
};

export default AnimatedGradients;
