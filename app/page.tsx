"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import CategoryLink from "./component/categoryLink";
import ServicesSlider from "./component/servicesData";

const HomePage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // slow motion
    }
  }, []);

  return (
    <>
      {" "}
      <section className="relative w-full h-140 md:h-160 flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/kiv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 flex justify-center w-full"
        >
          <div className="w-6 h-10 border-2 border-white flex justify-center items-start">
            <div className="w-1 h-2 bg-white mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>
      <CategoryLink />
      {/* STATS / TRUST SECTION */}
      <section className="pb-20 bg-linear-to-b from-white to-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "År erfarenhet" },
              { number: "100+", label: "Sålda fordon" },
              { number: "100%", label: "Personlig service" },
              { number: "∞", label: "Resmöjligheter" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white shadow-md hover:shadow-xl shadow-[#1e90ff] transition-all duration-300 p-8 flex flex-col items-center border border-[#1e90ff]/20 hover:-translate-y-2"
              >
                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-black to-[#1e90ff] text-transparent bg-clip-text">
                  {item.number}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#2db1cc] my-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Label */}
                <p className="text-gray-600 text-sm md:text-base text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSlider />
    </>
  );
};

export default HomePage;
