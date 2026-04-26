import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Mail, Send, User, MessageSquare, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_dm6117f",
        "template_ug6mf0v",
        form.current,
        "ca3POcxUljrUXyAsk"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "bottom-right",
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-right",
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050414]">
      <ToastContainer />
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Form Side */}
          < div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Send a <span className="text-[#8245ec]">Message</span>
              </h2>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#8245ec] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#8245ec] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1" >Subject</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#8245ec] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-[#8245ec] transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>

                < button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  type="submit"
                  className="w-full bg-[#8245ec] hover:bg-[#7034d9] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-50 group"
                >
                  {isSending ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </ button>
              </form>
            </div>
          </ div>
        </div>
      </div>
    </section>
  );
};

