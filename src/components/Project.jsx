import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'RV Mendoza Creation 💐',
    desc: `RV Mendoza Creation is a portfolio that showcases the works of RV Mendoza, a wedding planner and stylist. The project highlights his creative designs, event setups, and wedding themes.`,
    stack: ['Cloudinary', 'JavaScript', 'Bootstrap', 'CSS', 'HTML'],
  },
  {
    name: 'Fire App 🔥',
    desc: `FireApp is a web-based CRUD application built with Django and Python. It allows users to record, update, and manage fire incident reports.`,
    stack: ['TablePlus', 'Python', 'Django', 'CSS', 'PHP'],
  },
  {
    name: 'PSUsphere 🔮',
    desc: `PSUsphere is a CRUD web app for managing student organizations at Palawan State University. It visualizes organization data with charts.`,
    stack: ['Python', 'TablePlus', 'Django', 'Bootstrap', 'PHP'],
  },
  {
    name: 'Starbucks Café ☕',
    desc: `A basic HTML and CSS webpage that mimics a Starbucks-style café. Built for layout and styling practice.`,
    stack: ['CSS', 'HTML'],
  },
];

const Project = () => {
  return (
    <section
      id="Project"
      className="bg-gray-200 dark:bg-black/10 text-black/75 dark:text-white/70 py-20 px-4 lg:px-20"
    >
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
        <h1 className="mb-5 text-2xl font-black uppercase text-center text-purple-500">
          Projects
        </h1>
        <p className="small w-full opacity-60 text-center mb-5 uppercase">
          Software Projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {projects.map((prj, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, y: 20, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="relative group p-5 bg-neutral-100 dark:bg-neutral-950/70 rounded-lg border border-white/10"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-bold group-hover:text-purple-500 transition-all duration-300 ease-in-out">
                {prj.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-justify">
                {prj.desc}
              </p>
              <div className="flex flex-wrap gap-2 justify-start mt-4">
                {prj.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold rounded-full px-3 py-1 bg-neutral-500/20 border dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
