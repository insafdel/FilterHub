import React, { useState, useEffect } from "react";
import "../index.css";

import bg from "../../public/bg.svg"
import blur from "../../public/blurBg.svg";
import club from "../../public/clublogo.svg";

const Hero = () => {
  const words = ["inspiring", "dynamic", "creative", "welcoming"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < words[currentWordIndex].length) {
        // Increment character index to display next character
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + words[currentWordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 150); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // After finishing typing, wait for 1 second before deleting
        setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      // Backspace effect
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 100); // Backspacing speed
        return () => clearTimeout(timeout);
      } else {
        // Move to the next word after finishing backspacing
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [charIndex, isTyping, currentWordIndex, words]);

  return (
    <div
      className="w-full h-screen font-futura flex bgs justify-center items-center blob-outer-container z-0 inset-0 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    > 
    <img src={club} alt="" className=" absolute left-4 md:left-6 top-6 md:top-2 md:w-[170px] " />
    <div className=" w-[1px] h-[600px] bg-white absolute top-2 right-4 md:right-14"></div>
    <div className=" w-[60%] md:w-[45%] h-[0.6px] bg-white absolute top-6 right-1 md:right-8"></div>
      <div className="text-center z-10">
        <p className="text-[24px] md:text-[48px] text-white">
          Start your journey with our
        </p>
        <p className="text-[24px] md:text-[48px] text-white">
          <span className="mx-5 gradient-text font-semibold text-[29px] md:text-[53px]">
            {currentText}
            <span className="blinking-cursor">|</span> {/* Typing cursor */}
          </span>
          club
        </p>

        <div className="flex justify-center items-center gap-2 md:gap-8 h-min text-[49px] md:text-[170px] text-white font-bold">
          <p>Skill</p>
          <div className="pb-6 md:pb-[4rem]">&</div>
          <p>Tell</p>
        </div>
      </div>

      {/* Modified blur image */}
      <img
        src={blur}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] opacity-30"
      />

      <div className="blob-inner-container blur-[40px] rounded-[9999px] absolute left-0 right-0 m-auto overflow-hidden w-[90%] md:w-[45%] h-[50%] md:h-[60%]">
        <div className="blob absolute inset-0 w-[90%] md:w-[95%] h-[100%] md:h-[90%]">
          <div className="blob-mini absolute inset-0 left-10 right-0 m-auto w-[190px] h-[230px] md:w-[60%] md:h-[70%] rounded-[999px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
