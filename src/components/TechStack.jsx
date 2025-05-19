import React from 'react'
import FadeInSection from './FadeInSection';

const TechStack = () => {
    return (
    <FadeInSection>
      <section id ="TechStack">
        <div className="w-full grid grid-cols-1 py-28 scroll-mt-24">
             <h1 class="mb-10 text-2xl font-black uppercase text-center text-purple-400">Tech Stack</h1>
            <div className="flex flex-col gap-10">
              
                <div>
                      <h2 className="text-md mb-5 text-gray-400 uppercase text-center">
                      🚀 Software and Hardware Development </h2>
                      <div className="flex flex-wrap justify-center gap-3">
                            {[
                      { name: 'HTML5', icon: '/icons/html5.svg' },
                      { name: 'CSS', icon: '/icons/css_old.svg' },
                      { name: 'Django', icon: '/icons/django.svg' },
                      { name: 'React', icon: '/icons/react_light.svg' },
                      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
                      { name: 'TypeScript', icon: '/icons/typescript.svg' },
                      { name: 'JavaScript', icon: '/icons/javascript.svg' },
                      { name: 'Python', icon: '/icons/python.svg' },
                      { name: 'Php', icon: '/icons/Php_dark.svg' },
                      ].map(tool => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center justify-center border border-white/10 hover:border-green-500 rounded-xl p-4 w-20 h-20
                  hover:bg-green-950/20 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    alt={tool.name}
                    loading="lazy"
                    src={tool.icon}
                       className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ color: 'transparent' }}
                  />
                  <p className="text-xs text-gray-200 group-hover:text-green-500 pt-2">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
                  </div>
                          <div>
                            <h2 className="text-md mb-5 mt-5 text-gray-400 uppercase text-center">🎨 Design</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                              {[
                                { name: 'Photoshop', icon: '/icons/photoshop.svg' },
                                { name: 'InDesign', icon: '/icons/indesign.svg' },
                                { name: 'Illustrator', icon: '/icons/illustrator.svg' },
                                { name: 'Figma', icon: '/icons/figma.svg' },
                                { name: 'Canva', icon: '/icons/canva.svg' },
                              ].map(tool => (
                                <div
                                  key={tool.name}
                                  className="group flex flex-col items-center justify-center border border-white/10 hover:border-green-500 rounded-lg p-4 w-20 h-25 hover:bg-green-950/20 transition-all duration-300 cursor-pointer"
                                >
                                  <img
                                    alt={tool.name}
                                    loading="lazy"
                                     className="w-7 h-7 object-contain"
                                    src={tool.icon}
                                    style={{ color: 'transparent' }}
                                  />
                                  <p className="text-xs text-gray-200 group-hover:text-green-500 pt-2">
                                    {tool.name}
                                </p>
                            </div>
                          ))}
                    </div>
              </div>
         </div>
      </div>   
    </section>
  </FadeInSection>
  );
};

export default TechStack