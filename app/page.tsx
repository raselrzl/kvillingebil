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
      <section className="relative w-full h-130 sm:h-140 2xl:h-150 flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/karavan.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded" />
          </div>
        </motion.div>
      </section>
      <CategoryLink />
      {/* STATS / TRUST SECTION */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { number: "10+", label: "År erfarenhet" },
            { number: "100+", label: "Sålda fordon" },
            { number: "100%", label: "Personlig service" },
            { number: "∞", label: "Resmöjligheter" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#2db1cc]">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ServicesSlider />
    </>
  );
};

export default HomePage;
