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

  return (<>  <section className="relative w-full h-124 sm:h-134 2xl:h-164 flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/kvpromo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
 

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
  <ServicesSlider />
  
  </>
  
  );
};

export default HomePage;
