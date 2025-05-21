import React from 'react';
import { GitHub, Twitter, Facebook, Instagram, Linkedin } from 'react-feather';
import IconButton from './IconButton';

const MessageMe = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black/75 dark:text-white/70">
      <section id="MessageMe">
        <div className="max-w-screen-xl mx-auto pt-3 flex flex-col items-center">
          {/* Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center w-full py-6 gap-6">
            <h2 className="text-purple-500 text-3xl lg:text-7xl px-6 text-primary tracking-[10px] lg:tracking-[50px] text-center font-black">
              LET'S WORK
            </h2>
            <h6 className="text-xs lg:text-sm px-4 text-primary/40 uppercase">
              If you have a project in mind or need a designer and front-end
              developer to bring your ideas to life, feel free to reach out.
            </h6>

            {/* Social Icon Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <IconButton text="Github">
                <GitHub size={20} />
              </IconButton>
              <a
                href="https://www.facebook.com/Amenesus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton text="Facebook" color="bg-blue-500">
                  <Facebook size={20} />
                </IconButton>
              </a>
              <IconButton
                text="nck_brnne"
                color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
              >
                <Instagram size={20} />
              </IconButton>
              <IconButton text="Twitter" color="bg-sky-500">
                <Twitter size={20} />
              </IconButton>
              <IconButton text="@nckk" color="bg-red-500">
                <Linkedin size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default MessageMe;
