import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedTestimonials = ({ testimonials, autoplay }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="scale-100 transform origin-top max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-96 w-full"> {/* Increased height */}
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl font-bold dark:text-white text-white"> {/* Increased font size */}
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-[#ffffdd] dark:text-white"> {/* Increased font size */}
              {testimonials[active].designation}
            </p>
            <motion.p className="text-xl text-gray-500 mt-8 dark:text-neutral-300"> {/* Increased font size */}
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {/* Social Media Links with Logos */}
            <div className="flex gap-4 mt-4">
              <a
                href={testimonials[active].socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <img
                  src="/src/assets/linkedin.svg" // Update the path to your LinkedIn SVG
                  alt="LinkedIn"
                  className="w-8 h-8" // Increased size
                />
              </a>
              <a
                href={testimonials[active].socialMedia.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <img
                  src="/src/assets/gmail.svg" // Update the path to your Gmail SVG
                  alt="Gmail"
                  className="w-8 h-8" // Increased size
                />
              </a>
              <a
                href={testimonials[active].socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <img
                  src="/src/assets/instagram.svg" // Update the path to your Instagram SVG
                  alt="Instagram"
                  className="w-8 h-8" // Increased size
                />
              </a>
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button" // Increased size
            >
              <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" /> {/* Increased size */}
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button" // Increased size
            >
              <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" /> {/* Increased size */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;