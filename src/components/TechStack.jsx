import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <section className="bg-gray-200  dark:bg-black/10 text-black/80 dark:text-white/75">
      <section id="TechStack" className="px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.1,
            ease: 'easeOut',
          }}
          className="w-full grid grid-cols-1 py-5"
        >
          <h1 class="mb-5 text-2xl font-black uppercase text-center text-purple-500">
            Tech Stack
          </h1>
        </motion.div>
        <div className="flex flex-col gap-5">
          <div>
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: 'easeOut',
              }}
            >
              <h2 className="text-md mb-4 text-white-200/10 uppercase text-center">
                🚀 Framework and Database Development{' '}
              </h2>
            </motion.div>
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              className="flex flex-wrap justify-center gap-3"
            >
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
                  <p className="text-xs text-white-400 group-hover:text-purple-600 pt-2">
                    {tool.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: 'easeOut',
              }}
            >
              <h2 className="text-md mb-4 text-white-200/10 uppercase text-center">
                🎨 Software Design
              </h2>
            </motion.div>
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: 'easeOut',
              }}
              className="flex flex-wrap justify-center gap-3"
            >
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
                  <p className="text-xs text-white-400 group-hover:text-purple-600 pt-2 whitespace-nowrap text-center">
                    {tool.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
