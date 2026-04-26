import React, { useState, useEffect } from "react";
import harsh from "../../../src/assets/harshlinkedin.jpg";
import Tilt from "react-parallax-tilt";
import BlurBlob from "../BlurBlob";

const Typewriter = ({ texts, speed = 100, eraseSpeed = 50, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentFullText = texts[currentIndex];

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pause);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, eraseSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, texts, speed, eraseSpeed, pause]);

  return <span>{displayText}<span className="animate-ping font-light ml-0.5">|</span></span>;
};

export const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Blobs */}
      <BlurBlob 
        position={{ top: "20%", left: "10%" }} 
        size={{ width: "400px", height: "400px" }} 
      />
      <BlurBlob 
        position={{ top: "60%", left: "80%" }} 
        size={{ width: "500px", height: "500px" }} 
      />

      <section
        id="about"
        className="relative py-4 px-[7vw] lg:px-[20vw] mt-16 md:mt-24 lg:mt-32 z-10"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <h1 className="text-orange-400 lg:text-5xl md:text-3xl  font-bold my-1 lg:my-2">
              Hii, I am
            </h1>
            <h1 className="text-white lg:text-5xl md:text-3xl animate-bounce font-bold ">
              Harsh Agrawal
            </h1>
            <div className="flex md:text-3xl font-bold text-white my-1 lg:my-2">
              <h2 className="">I am a</h2>
              <h2 className="text-fuchsia-600 ml-2">
                <Typewriter 
                  texts={["Developer", "Designer", "Problem Solver"]} 
                />
              </h2>
            </div>
            {/* about section */}
            <p className="font-semibold lg:text-xl md:text-lg my-10 text-white lg:w-full text-justify">
              I am a passionate full stack web developer with hands-on
              experience in modern web technologies. I have a strong foundation
              in React.js, HTML, CSS, and JavaScript, complemented by practical
              experience working with Node.js ,Express.js and MongoDB.I am also
              familiar with AI tools and am always looking to expand my knowledge.
            </p>
            <a
              href="https://drive.google.com/file/d/1f8kGAsDYp8-scJpW_soKfoLHFtoo_xKj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:animate-pulse relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-[#8245ec] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-[#7034d9] shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_40px_rgba(130,69,236,0.5)] my-9 w-fit"
            >
              <span className="flex items-center gap-2">
                Download CV
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </div>
          <div className="md:w-1/2 ">
            <Tilt className="sm:ml-8 md:ml-24 md:mt-24">
              <img
                src={harsh}
                alt="Harsh Agrawal"
                className="rounded-full lg:ml-10 drop-shadow-[0_10px_20px_rgba(130,69,255,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </section>
    </div>
  );
};


