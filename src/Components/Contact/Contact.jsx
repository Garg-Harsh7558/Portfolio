import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dm6117f",
        "template_ug6mf0v",
        form.current,
        "ca3POcxUljrUXyAsk"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  return (
    <section
      id="contact"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3  bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]"
    >
       <ToastContainer />
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you
        </p>
      </div>

      {/* contact form */}
      <div className="items-center flex justify-center">
        <div className="border-white w-full border-2 rounded-lg bg-[#0d081f]  p-6  max-w-md">
          <h3 className="text-white font-bold text-center text-xl py-3">
            Connect With Me
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="   Enter Your Email"
              className="text-white border w-full p-2 my-2 rounded-lg focus:border-pink-800 focus:outline-none "
              required
            />
            <input
              type="text"
              name="user_name"
              placeholder="   Enter Your Name"
              required
              className="text-white border w-full p-2 mb-2 rounded-lg focus:outline-none focus:border-pink-800"
            />
            <input
              type="text"
              name="subject"
              placeholder="   Subject"
              required
              className="text-white border w-full p-2 mb-2 rounded-lg focus:outline-none focus:border-pink-800"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="   Enter Your Message"
              className="text-white border w-full p-2 mb-2 rounded-lg focus:outline-none focus:border-pink-800"
            />
            <button className="text-white font-bold text-center w-full py-2 rounded bg-gradient-to-r  from-purple-700 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:to-purple-700">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};