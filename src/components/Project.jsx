import React from 'react';

const project = [
  {
    name: 'RV Mendoza Creation 💐',
    desc: `RV Mendoza Creation is a portfolio that showcases the works of RV Mendoza, a wedding planner and stylist. The project highlights his creative designs, event setups, and wedding themes.'
         'It serves as a digital gallery where potential clients can view his past projects, and connect with him for future events. The portfolio focuses on presenting his skills'
         'in organizing, styling, and creating memorable wedding experiences.`,
    stack: ['Cloudinary', 'JavaScript', 'Bootstrap', 'CSS', 'HTML'],
  },
  {
    name: 'Fire App 🔥 ',
    desc: `FireApp is a web-based CRUD application built with Django and Python. It allows users to record, update, and manage fire incident reports, 
        including details like incident location, date, and description. The system helps track fire-related data for better response and monitoring.`,
    stack: ['TablePlus', 'Python', 'Django', 'CSS', 'PHP'],
  },
  {
    name: 'PSUsphere 🔮',
    desc: `PSUsphere is a CRUD web app for managing student organizations at Palawan State University. It displays each organization’s data and visualizes 
        their population through charts like bar and pie charts, making it easy to see how many members are in each org. Built with Django and Python.`,
    stack: ['Python', 'TablePlus', 'Django', 'Bootstrap', 'PHP'],
  },
];
const Project = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black/75 dark:text-white/70">
      <section id="Project">
        <div
          id="projects"
          class="flex flex-col py-3 px-4 lg:px-20 scroll-mt-24"
        >
          <h1 class="mb-5 text-2xl font-black uppercase text-center text-purple-500">
            Projects
          </h1>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {project.map((prj, index) => (
              <div class="group bg-neutral-400/10 flex flex-col justify-between h-full border-white/10 rounded-lg p-5 border-[1px] transition-all duration-300 ease-in-out hover:shadow-sm hover:border-purple-500 hover:bg-orange-900/5 cursor-default">
                <div class="flex flex-col">
                  <h1 class="font-manrope text-2xl font-bold group-hover:text-purple-500 transition-all duration-300 ease-in-out">
                    {prj.name}
                  </h1>
                  <p className="font-manrope-semibold text-md text-white-300 mt-3 gap-4 md:gap-10 text-justify">
                    {prj.desc}
                  </p>
                </div>
                <div class="flex flex-wrap gap-2 justify-start mt-5">
                  {prj.stack.map((tchstack, index) => (
                    <span class="text-xs font-bold rounded-full px-4 py-1 bg-neutral-500/20 border cursor-default">
                      {tchstack}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Project;
