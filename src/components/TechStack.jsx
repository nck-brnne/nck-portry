import React from 'react';

const TechStack = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
      <section id="TechStack" className="px-5 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 py-20">
          <div className="w-full h-px bg-white opacity-20 mb-11"></div>
          <h1 class="mb-5 text-2xl font-black uppercase text-center text-purple-400">
            Tech Stack
          </h1>
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-manrope text-md mb-4 text-white-400 uppercase text-center">
                🚀 Framework and Database Development{' '}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Django', icon: '/icons/django.svg' },
                  { name: 'React', icon: '/icons/react_light.svg' },
                  { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
                  { name: 'TypeScript', icon: '/icons/typescript.svg' },
                  { name: 'JavaScript', icon: '/icons/javascript.svg' },
                  { name: 'Python', icon: '/icons/python.svg' },
                  { name: 'Supabase', icon: '/icons/supabase.svg' },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center justify-center border border-black/20 dark:border-white/20 hover:border-purple-700 
                  rounded-lg p-4 w-[88px] h-20 hover:bg-purple-950/20 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      alt={tool.name}
                      loading="lazy"
                      src={tool.icon}
                      className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ color: 'transparent' }}
                    />
                    <p className="text-xs font-manrope text-white-400 group-hover:text-purple-600 pt-2">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-manrope text-md mb-4 text-white-400 uppercase text-center">
                🎨 Design
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Photoshop', icon: '/icons/photoshop.svg' },
                  { name: 'InDesign', icon: '/icons/indesign.svg' },
                  { name: 'Illustrator', icon: '/icons/illustrator.svg' },
                  { name: 'Figma', icon: '/icons/figma.svg' },
                  { name: 'Canva', icon: '/icons/canva.svg' },
                  { name: 'After Effects', icon: '/icons/after-effects.svg' },
                  { name: 'Premiere', icon: '/icons/premiere.svg' },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center justify-center border border-black/20 dark:border-white/20 hover:border-purple-500 
                                  rounded-lg p-4 w-[88px] h-20 hover:bg-purple-950/20 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      alt={tool.name}
                      loading="lazy"
                      className="w-7 h-7 object-contain"
                      src={tool.icon}
                      style={{ color: 'transparent' }}
                    />
                    <p className="text-xs font-manrope text-white-400 group-hover:text-purple-600 pt-2 whitespace-nowrap text-center">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
