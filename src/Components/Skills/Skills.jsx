import React from "react";
import { SkillsInfo } from "../../constants.js";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]"
    >
      <div className="text-center md:text-4xl sm:text-2xl font-bold text-white border-b-2 border-[#8245ec] pb-2">
        SKILLS
      </div>
      <p className="text-white text-sm text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sit iure
        labore aspernatur sapiente ad.
      </p>
{/* skills categories */}
      <div className="text-white flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"><h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">{category.title}</h3></div>
        ))}
        
      </div>
    </section>
  );
};
