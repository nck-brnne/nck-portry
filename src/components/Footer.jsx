import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black/80 dark:text-white/75">
      <div className="max-w-screen-xl mx-auto pt-24 lg:pt-48 pb-24 px-12">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start lg:items-center lg:justify-between">
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="flex flex-row items-center gap-3">
              <a className="flex items-center" href="/Body">
                {/* Logo for Light Mode */}
                <img
                  src="/images/logo-black.png"
                  alt="Logo Light"
                  width={40}
                  height={40}
                  className="h-9 w-auto block dark:hidden"
                  loading="lazy"
                  decoding="async"
                />

                {/* Logo for Dark Mode */}
                <img
                  src="/images/logo-white.png"
                  alt="Logo Dark"
                  width={40}
                  height={40}
                  className="h-9 w-auto hidden dark:block"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>

            <div className="font-manrope text-muted-foreground text-sm">
              <h6>
                made by {''}
                <span className="text-purple-500 italic">
                  Nick Brienne Martinez
                </span>
              </h6>
              <h6>© 2025 Nick-Portry. All rights reserved.</h6>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-20 text-muted-foreground text-xs">
            <div className="font-manrope flex flex-col gap-3">
              <a className="hover:underline underline-offset-4" href="#Body">
                Home
              </a>
              <a
                className="hover:underline underline-offset-4"
                href="#TechStack"
              >
                Tech Stack
              </a>
              <a className="hover:underline underline-offset-4" href="#Project">
                Project
              </a>
              <a
                className="hover:underline underline-offset-4"
                href="#Graphics"
              >
                Recent Works
              </a>
              <a
                className="hover:underline underline-offset-4"
                href="#MessagMe"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
