import React, { useState } from "react";
import "../index.css";
import club from "../../public/logoo.png";
import Arrd from "../../public/arrowd.svg";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  const faqsData = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. ",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      
  ];
  return (
    <section className="py-24 bg-[#1A0132] text-white">
      <h1 className="font-futura text-white text-center mb-6 text-6xl lg:text-8xl font-bold leading-tight">
        More About S&T
      </h1>
      <h4 className="text-[#BFC7D4] text-center mb-16 text-sm lg:text-lg leading-tight">
        F&Q section to answer the most frequently repeated questions
      </h4>
      <div className="container mx-auto flex flex-col gap-4 px-4">
        {faqsData.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => toggleFAQ(index)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "bg-gradient-to-r from-[#FFC78A5C] to-[#D7AEFF5C] border-2 border-[#D7AEFF] backdrop-blur-[20px]"
                  : "bg-[#1A0132] border-b border-gray-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={club}
                    alt="Club Logo"
                    className="mt-2 w-10 h-10 object-contain"
                  />
                  <h4
                    className={`text-base sm:text-lg lg:text-xl font-semibold transition-colors duration-500 ${
                      openIndex === index ? "text-[#D7AEFF]" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h4>
                </div>
                <span
                  className={`text-2xl transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180 text-pink-300" : "text-gray-400"
                  }`}
                >
                  <img
                    src={Arrd}
                    alt="Arrow"
                    className="grayscale w-5 h-5 lg:w-6 lg:h-6"
                  />
                </span>
              </div>
              <div
                style={{
                  maxHeight: openIndex === index ? "1500px" : "0",
                  opacity: openIndex === index ? "1" : "0",
                }}
                className="overflow-hidden transition-all duration-[800ms] ease-in-out"
              >
                <p className="mt-4 text-sm lg:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
            
            {openIndex === index && (
              <hr className="border-gray-600 mt-4 transition-all duration-500 ease-in-out" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

  
  
  
  
  


export default About;