import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close
import Hero from "./Hero";
import About from "./About";
// Import your section components
import Footer from "./Footer";
import WhoAreWe from "./WhoAreWe";


export const Navbar = () => {
  // Create refs for each section ( this is an example )
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const eventsRef = useRef(null);
  const sponsorsRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false); 

 
  const scrollToSection = (ref) => {
    if (!ref.current) return;

    const sectionPosition = ref.current.offsetTop;
    
    // Custom smooth scroll with a slower speed
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className=" relative text-white ">
      <div className="md:hidden flex justify-between items-center px-4 absolute top-[2.2rem] right-[1rem] z-30">
        {/* Hamburger icon for mobile view */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open and close icons */}
        </button>
      </div>

      <SlideTabs
        scrollToSection={scrollToSection}
        sections={{ heroRef, aboutRef, teamRef, eventsRef, sponsorsRef }}
        isOpen={isOpen} // Pass state to SlideTabs to show/hide menu
      
      />

      {/* Render your imported sections with refs */}
      <div ref={heroRef}>
      <Hero />
      </div>
      <div ref={aboutRef}>
       
         <WhoAreWe/>
        
      </div>
      <div ref={teamRef}>
        <About/>
      </div>
      <div ref={eventsRef}>
        <div className="h-[100vh] bg-white"> </div>
      </div>
      <div ref={sponsorsRef}>
        
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
};

const SlideTabs = ({ scrollToSection, sections, isOpen }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });




  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`absolute font-futura md:right-16 top-11 md:top-12 mx-auto flex gap-2 md:gap-9 rounded-2xl z-50 bg-white/30 md:bg-transparent inset-0 md:inset-auto h-fit w-[82%] md:w-auto transition-all duration-300 ease-in-out 
        ${isOpen ? "flex-col p-4 mt-10 left-0 w-[82%] md:w-full items-center justify-center" : "hidden md:flex justify-end"}`}
    >
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.heroRef)}>
        Home
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.aboutRef)}>
        About
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.teamRef)}>
        The team
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.eventsRef)}>
        Events
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.sponsorsRef)}>
        Sponsors
      </Tab>

      <button className=" bg-white rounded-[30px] ">
      <Tab setPosition={setPosition} onClick={() => ''}>
        Register
      </Tab>
      </button>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick} // Call onClick function when the tab is clicked
      className="relative z-[60] font-semibold block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-[19px]"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-[31px] rounded-[30px] bg-black md:h-[52px] "
    />
  );
};