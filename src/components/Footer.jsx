import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-24 lg:pt-48 pb-24 px-12">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex flex-row items-center gap-3">
            <img
              alt="Logo"
              loading="lazy"
              width="48"
              height="48"
              src="/images/mylogo.png"
              className="text-transparent"
            />
          </div>

          <div className="font-manrope text-muted-foreground text-sm">
            <h6>
              made by {''}
              <span className="text-purple-500 italic">
                Nick Brienne Martinez
              </span>
            </h6>
            <h6>building in public </h6>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-20 text-muted-foreground text-xs">
          <div className="font-manrope flex flex-col gap-3">
            <a className="hover:underline underline-offset-4" href="#Body">
              Home
            </a>
            <a className="hover:underline underline-offset-4" href="#TechStack">
              Tech Stack
            </a>
            <a className="hover:underline underline-offset-4" href="#Project">
              Project
            </a>
            <a className="hover:underline underline-offset-4" href="#Graphics">
              Recent Works
            </a>
            <a className="hover:underline underline-offset-4" href="#MessagMe">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
