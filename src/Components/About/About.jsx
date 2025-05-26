import React from "react";
import ReactTypingEffect from "react-typing-effect";
import harsh from "../../../src/assets/harshlinkedin.jpg";
import Tilt from "react-parallax-tilt";

export const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-4 px-[7vw] lg:px-[20vw] mt-16 md:mt-24 lg:mt-32"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <h1 className="text-white lg:text-5xl md:text-3xl  font-bold my-1 lg:my-2">
              Hii,I am
            </h1>
            <h1 className="text-white lg:text-5xl md:text-3xl  font-bold ">
              Harsh Agrawal
            </h1>
            <div className="flex md:text-3xl font-bold text-white my-1 lg:my-2">
              <h2 className="">I am a</h2>
              <h2 className="text-white ml-2"> Lorem, ipsum.</h2>
              {/* <h2>
                <ReactTypingEffect
                  text={["lorem1", "lorem2", "lorem3"]}
                  speed={100}
                  eraseSpeed={50}
                  typingDelay={500}
                  eraseDelay={2000}
                  cursorRenderer={(cursor) => (
                    <span className="text-[#8245ec]">{cursor}</span>
                  )}
                ></ReactTypingEffect>
              </h2> */}
            </div>
            {/* about section */}
            <p className="font-semibold lg:text-xl md:text-lg my-10 text-white lg:w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quibusdam nostrum eum! Accusantium, earum eligendi eos ducimus
              odit sint, reprehenderit veritatis aliquid expedita eius quo
              adipisci necessitatibus quibusdam voluptatum Lorem, ipsum.
            </p>
            <a
              href="https://www.flipkart.com/?affid=affveve&affExtParam1=d51d956ad29db92b85d44cea2abab916&affExtParam2=60827"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8245ec] rounded-full text-xl font-semibold p-1.5  hover:text-white transition justify-center flex my-9 duration-[1500ms] hover:font-extrabold hover:shadow-[0_0_40px_#864ee7] "
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 "><Tilt className="sm:ml-8 md:ml-24 md:mt-24">
            <img src={harsh} alt="Harsh Agrawal" className="rounded-full lg:ml-10 drop-shadow-[0_10px_20px_rgba(130,69,255,0.5)]"/>
            </Tilt>
          </div>
        </div>
      </section>
    </div>
  );
};
