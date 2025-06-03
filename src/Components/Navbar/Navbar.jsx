import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSession, setActiveSession] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const handleMenuItemClick = (sectionId) => {
    setActiveSession(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414]/90 bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className="text-white py-5 flex justify-between items-center">
        <div className="cursor-pointer text-lg font-semibold ml-14">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-[#ffffff]">Harsh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#ffffff]">Agrawal</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        {/* desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSession === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Garg-Harsh7558"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshagrawaliiitbh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="md:hidden ">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSession === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
               <div className="flex space-x-6">
          <a
            href="https://github.com/Garg-Harsh7558"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshagrawaliiitbh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin />
          </a>
        </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
