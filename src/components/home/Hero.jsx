"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const cardData = [
  {
    title: "Web Development",
    color: "text-teal-300",
    desc: "Modern & high-performance web apps",
    delay: "0s",
    size: "w-40 h-40",
  },
  {
    title: "Mobile Apps",
    color: "text-cyan-300",
    desc: "Android & iOS cross-platform apps",
    delay: "0.2s",
    size: "w-32 h-32",
  },
  {
    title: "Cloud & DevOps",
    color: "text-purple-300",
    desc: "CI/CD, scaling & secure deployment",
    delay: "0.3s",
    size: "w-32 h-32",
  },
  {
    title: "AI & Automation",
    color: "text-yellow-300",
    desc: "Workflow automation & AI integration",
    delay: "0.1s",
    size: "w-40 h-40",
  },
  {
    title: "UI/UX Design",
    color: "text-pink-300",
    desc: "Human-centered creative interfaces",
    delay: "0.25s",
    size: "w-32 h-32",
  },
  {
    title: "Cyber Security",
    color: "text-blue-300",
    desc: "Threat prevention & secure architecture",
    delay: "0.4s",
    size: "w-40 h-40",
  },
];

/* ---------- TECH STACK LOGOS ---------- */
const techStack = [
  "/react.png",
  "/next.png",
  "/vue.png",
  "/laravel.png",
  "/docker.png",
  "/flutter.png",
  "/mysql.png",
  "/tailwind.png",
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Particles */}
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.7 },
            links: {
              enable: true,
              distance: 160,
              opacity: 0.15,
              color: "#00f0ff",
            },
            color: { value: "#00f0ff" },
          },
        }}
      />

      {/* Glow Blob (hidden on mobile) */}
      <div className="hidden md:block absolute right-0 top-1/3 w-[450px] h-[450px] bg-[radial-gradient(circle,#00faff33,#000)] blur-3xl opacity-40"></div>

      {/* Diagonal Panel (hidden on mobile) */}
      <div className="hidden md:block absolute right-0 top-0 w-[50%] h-full bg-gradient-to-bl from-[#00ffd5]/20 to-transparent backdrop-blur-md border-l border-[#00ffd5]/20 -skew-x-6"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#00ffe055_1px,transparent_1px),linear-gradient(#00ffe055_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-5 gap-10 pt-24 md:pt-0">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight animate-fadeInUp drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            We Build Smart
            <span className="block text-teal-300">Digital Experiences</span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 animate-fadeIn max-w-md">
            We are a full-stack software development company delivering modern,
            scalable and efficient digital solutions — crafted with innovation,
            precision and cutting-edge technology.
          </p>

          <div className="mt-6 flex gap-4 animate-fadeIn delay-500">
            <button className="px-6 py-3 md:px-8 md:py-3 rounded-full bg-teal-500/80 hover:bg-teal-400 text-white text-sm md:text-base shadow-[0_0_20px_#00ffe088] transition-all hover:scale-105">
              Get Started
            </button>
            <button className="px-6 py-3 md:px-8 md:py-3 rounded-full border border-white/40 text-white text-sm md:text-base hover:bg-white/10 hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Responsive Controlled) */}
        <div className="flex flex-col items-center md:items-end gap-10 w-full md:w-auto">
          {/* CARD GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 justify-center md:justify-end">
            {cardData.map((card, i) => (
              <TechCard key={i} {...card} />
            ))}
          </div>

          {/* TECH STACK LOGOS */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 md:gap-4 justify-center md:justify-end">
            {techStack.map((src, i) => (
              <div
                key={i}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/20 
                backdrop-blur-xl flex items-center justify-center 
                shadow-[0_0_15px_#00ffe055]"
              >
                <img src={src} className="w-6 md:w-8 opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUOTE BUTTON (Desktop vertical, mobile bottom) */}
      <button
        onClick={() => setShowModal(true)}
        className="
          hidden md:block
          absolute left-[-5.5%] top-[48%] rotate-[-90deg] 
          px-6 py-3 w-[250px] rounded-b-full 
          bg-white/10 border border-white/30 text-[#46EDD5]  font-bold
          backdrop-blur-xl shadow-[0_0_18px_#00f0ff66] hover:bg-white/20
        "
      >
        Get Free Quote
      </button>

      {/* Mobile bottom button */}
      <button
        onClick={() => setShowModal(true)}
        className="
          md:hidden fixed bottom-6 left-1/2 -translate-x-1/2
          px-6 py-3 rounded-full text-white bg-teal-500/80 
          border border-white/20 backdrop-blur-xl 
          shadow-[0_0_15px_#00f0ff66] hover:bg-teal-400
        "
      >
        Get Free Quote
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-modalFade">
          <div
            className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 w-[90%] max-w-md 
    shadow-[0_0_40px_#00eaff66] animate-zoomIn"
          >
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              Request a Free Quote
            </h2>

            <p className="text-white/70 mb-6 text-sm md:text-base">
              Tell us about your project goals — we’ll contact you within 24
              hours.
            </p>

            {/* FORM */}
            <form className="space-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-white/80 text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 
          focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-white/80 text-sm mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 
          focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-white/80 text-sm mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 
          focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="+8801XXXXXXXXX"
                />
              </div>

              {/* Project Type */}
              <div className="flex flex-col">
                <label className="text-white/80 text-sm mb-1">
                  Project Type
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
          focus:outline-none focus:border-teal-400 transition-all"
                >
                  <option className="text-black">Web Development</option>
                  <option className="text-black">Mobile App</option>
                  <option className="text-black">E-commerce</option>
                  <option className="text-black">Cloud / DevOps</option>
                  <option className="text-black">Custom Software</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-white/80 text-sm mb-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 
          focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Describe your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-teal-500/80 hover:bg-teal-400 text-white transition-all shadow-[0_0_20px_#00ffe088]"
              >
                Submit Request
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full py-3 rounded-lg mt-2 bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes modalFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-modalFade { animation: modalFade .3s ease forwards; }

        @keyframes zoomIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn { animation: zoomIn .3s ease forwards; }

        @keyframes fadeInUp {
          0% { opacity:0; transform:translateY(20px); }
          100% { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn { 0% { opacity:0; } 100% { opacity:1; } }

        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        .animate-fadeIn { animation: fadeIn 1.2s ease forwards; }

        @keyframes floatCard {
          0% { transform:translateY(0); }
          50% { transform:translateY(-12px); }
          100% { transform:translateY(0); }
        }
        .animate-card { animation: floatCard 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/* ---------- CARD COMPONENT ---------- */
function TechCard({ title, color, desc, delay, size }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`${size} rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 
      p-4 shadow-[0_0_20px_#00faff33] text-center animate-card`}
    >
      <h3 className={`${color} font-semibold text-sm md:text-lg`}>{title}</h3>
      <p className="text-white/60 text-[10px] md:text-xs mt-1">{desc}</p>
    </div>
  );
}
