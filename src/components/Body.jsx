import React from 'react'
import FadeInSection from '../components/FadeInSection';

const Body = () => {
    return (
    <FadeInSection>
    <section id="Body" className="px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col py-20 lg:pt-24">
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm font-medium mt-10">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400"></span>
            </span>
            <span className="font-manrope"> Available for work </span>
          </div>
         <h2 className="mt-5 mb-5 text-neutral-300 text-xl text-center md:text-left">
              Hi, I'm <span className="font-bold italic text-purple-500 ml-1">NICK BRIENNE</span>.</h2>

          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-center md:text-left">
            Creating 
            <span className="mx-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">Visual Design</span>
            <span className="mx-3 lg:mx-3 pr-[2px] ">and</span>
            <span className="mx-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">Purposeful Graphics.</span>
          </h1>
        </div>
      
         <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 gap-3 md:gap-10 text-justify lg:text-l font-light tracking-narrow text-gray-50">
            <p className="font-manrope-semibold">
                I LOVE TO DESIGN. ANYTHING I IMAGINE (AS LONG AS IT’S POSSIBLE), 
                I CAN BRING TO LIFE. LOGOS, POSTERS, SOCIAL MEDIA CONTENT, 
                BRAND IDENTITIES, UI DESIGNS, WEBSITE LAYOUTS, AND MORE.
              </p>
             <p className="font-manrope-semibold">
                I HAVE SO MUCH PASSION FOR DESIGN THAT I CREATE AS OFTEN AS I CAN. 
                I LOVE EXPLORING NEW STYLES, TOOLS, AND TECHNIQUES, THEN BRINGING THEM INTO MY WORK. 
                I JUST ENJOY SOLVING VISUAL CHALLENGES WITHIN THE GIVEN LIMITS, OF COURSE.
             </p>
          </div>

          {/* Works */}
          <div class="grid grid-cols-1 xl:grid-cols-2 h-fit justify-center items-center lg:justify-start gap-5">

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8">
                    <div className="cursor-pointer hover:bg-purple-950/40 transition-all duration-300 
                      flex flex-row items-center px-6 py-1 mr-1 text-md 
                      border border-white/10  hover:border-purple-500 
                      rounded-full text-center">
                      <div class="rounded-full bg-emerald-500 w-3 h-3 mr-2"></div>
                      Packaging Design
                    </div>
                    <div class="cursor-pointer hover:bg-purple-950/40 transition-all duration-300 
                      flex flex-row items-center px-6 py-1 mr-1 text-md 
                      border border-white/10 hover:border-purple-500 
                      rounded-full text-center">
                      <div class="rounded-full bg-red-500 w-3 h-3 mr-2"></div>
                        Social Media
                    </div>
                    <div class="cursor-pointer hover:bg-purple-950/40   transition-all duration-300 
                        flex flex-row items-center px-6 py-1 mr-1 text-md 
                        border border-white/10 hover:border-purple-500 
                        rounded-full text-center">
                        <div class="rounded-full bg-cyan-500 w-3 h-3 mr-2"></div>
                        Poster Design
                    </div>
                    <div class="cursor-pointer hover:bg-purple-950/40 transition-all duration-300 
                        flex flex-row items-center px-6 py-1 mr-1 text-md 
                        border border-white/10 hover:border-purple-500 
                        rounded-full text-center">
                        <div class="rounded-full bg-purple-500 w-3 h-3 mr-2"></div>
                        Graphic Design
                    </div>
                    <div class="cursor-pointer hover:bg-purple-950/40 transition-all duration-300 
                        flex flex-row items-center px-6 py-1 mr-1 text-md 
                        border border-white/10 hover:border-purple-500 
                        rounded-full text-center">
                         <div class="rounded-full bg-pink-500 w-3 h-3 mr-2"></div>
                          Web Development
                     </div>
              </div>
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-center mt-6">
              
                      <a href="#MessageMe" 
                        className="w-auto sm:w-full transition-all duration-300 ease-in-out group relative inline-flex items-center justify-center 
                                  text-xs sm:text-sm font-light text-white-300 bg-purple-600/40
                                  px-6 sm:px-10 lg:px-12 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-purple-200 
                                  hover:text-purple-300 hover:bg-purple-500/20 hover:border-purple-700/80">

                        <span className="transition-all duration-300 ease-in-out group-hover:mr-5">
                          LET'S WORK TOGETHER
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-orange-700">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>

                    <a href="#Project" 
                       className="w-auto sm:w-full transition-all duration-300 ease-in-out group relative inline-flex items-center justify-center 
                      text-xs sm:text-sm font-light text-white-300 bg-purple-600/40 
                      px-6 sm:px-10 lg:px-12 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-neutral-200 hover:border-purple-500  hover:bg-purple-200/20
                       hover:border-purple-700/80">
                        PROJECTS
                     </a>
              
                  </div>
              </div>
        </div> 
      </section>  
    </FadeInSection>
    );
  };
  export default Body;