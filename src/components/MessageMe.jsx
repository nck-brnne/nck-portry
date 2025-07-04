import React from 'react';
import { GitHub, Facebook, Instagram, Linkedin } from 'react-feather';
import IconButton from './IconButton';
import { motion } from 'framer-motion';
import TrickWords from './TrickWords';

const MessageMe = () => {
  return (
    <section className="bg-gray-200 dark:bg-black/10 text-black/75 dark:text-white/70">
      <section id="MessageMe">
        <div className="max-w-screen-xl mx-auto pt-3 flex flex-col items-center">
          {/* Heading and Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center w-full py-6 gap-6"
          >
            <h2 className="text-purple-500 text-3xl lg:text-7xl px-6 text-primary tracking-[10px] lg:tracking-[50px] text-center font-black">
              <TrickWords text="LET'S WORK" />
            </h2>

            <h6 className="text-xs lg:text-sm px-4 text-primary/40 uppercase max-w-xl">
              <TrickWords text="If you have a project in mind or need a designer and front-end developer to bring your ideas to life, feel free to reach out." />
            </h6>
          </motion.div>
          {/* Social Icon Buttons with Motion */}
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {[
              {
                text: 'Github',
                icon: <GitHub size={20} />,
                href: 'https://github.com/nck-brnne',
              },

              {
                text: 'Facebok',
                icon: <Facebook size={20} />,
                color: 'bg-blue-500',
                href: 'https://www.facebook.com/Amenesus',
              },
              {
                text: 'Instagram',
                icon: <Instagram size={20} />,
                color:
                  'bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500',
                href: 'https://www.instagram.com/nck.grphx/',
              },
              {
                text: '@nckk',
                icon: <Linkedin size={20} />,
                color: 'bg-red-500',
              },
            ].map((item, index) => {
              const iconElement = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <IconButton text={item.text} color={item.color}>
                    {item.icon}
                  </IconButton>
                </motion.div>
              );

              return item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {iconElement}
                </a>
              ) : (
                iconElement
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MessageMe;
