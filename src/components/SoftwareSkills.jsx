import React, { useEffect, useRef, useState } from 'react';

const SkillProgress = ({ iconPath, name, progress, colorClass }) => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center space-x-3 w-full max-w-md mb-3 justify-center flex-nowrap ml-12">
      <div className="flex-shrink-0 w-8 h-8 ml-8">
        <img
          src={iconPath}
          alt={`${name} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="italic text-left text-sm">{name}</div>

        <div
          className="w-64 max-w-[280px] rounded-full bg-gray-700/30 mt-0 h-4 overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-105"
          ref={barRef}
        >
          <div
            className={`h-full ${colorClass} rounded-full text-white text-xs font-medium flex items-center justify-center transition-[width] duration-1000 ease-in-out`}
            style={{ width: visible ? `${progress}%` : '0%' }}
          >
            {visible ? `${progress}%` : '0%'}
          </div>
        </div>
      </div>
    </div>
  );
};

function SoftwareSkills() {
  const skills = [
    {
      name: 'Canva',
      progress: 80,
      iconPath: '/icons/canva.svg',
      colorClass: 'bg-blue-500',
    },
    {
      name: 'Photoshop',
      progress: 75,
      iconPath: '/icons/Photoshop.svg',
      colorClass: 'bg-blue-950',
    },
    {
      name: 'Adobe Illustrator',
      progress: 60,
      iconPath: '/icons/Illustrator.svg',
      colorClass: 'bg-yellow-800',
    },
    {
      name: 'Filmora',
      progress: 80,
      iconPath: '/icons/filmora.svg',
      colorClass: 'bg-teal-500',
    },
  ];

  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black/80 dark:text-white/75">
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="mb-8 text-2xl font-black uppercase text-center text-purple-500">
          Software Skills
        </h1>
        {skills.map((skill) => (
          <SkillProgress
            key={skill.name}
            iconPath={skill.iconPath}
            name={skill.name}
            progress={skill.progress}
            colorClass={skill.colorClass}
          />
        ))}
      </div>
    </section>
  );
}

export default SoftwareSkills;
