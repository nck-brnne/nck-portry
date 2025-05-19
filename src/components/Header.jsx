import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl bg-transparent backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center">
            <a className="flex items-center" href="/Body">
              <img
                src="/images/mylogo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-9 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div>
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', link: '/#Body' },
                { name: 'Tech Stack', link: '#TechStack' },
                { name: 'Projects', link: '#Project' },
                { name: 'Recent Works', link: '#Graphics' },
                { name: 'Contact Me', link: '#MessageMe' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="font-manrope text-sm font-medium text-gray-400 hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 ter:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white focus:outline-none"
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
  );
};

export default Header;
