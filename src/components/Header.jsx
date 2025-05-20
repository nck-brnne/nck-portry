import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black/80 dark:text-white/75">
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto border border-black/10 dark:border-white/10 rounded-2xl bg-transparent backdrop-blur-md">
          <div className="flex justify-between items-center px-8 py-3">
            <div className="flex items-center">
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

            {/* Desktop Navigation */}
            <div>
              <nav className="hidden md:flex items-center space-x-5">
                {[
                  { name: 'HOME', link: '/' },
                  { name: 'PROJECTS', link: '#Project' },
                  { name: 'RECENT WORKS', link: '#Graphics' },
                  { name: 'CONTACT', link: '#MessageMe' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-sm font-bold text-white-400 hover:text-purple-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 ter:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <ToggleSwitch />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-black dark:text-white hover:opacity-80 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
