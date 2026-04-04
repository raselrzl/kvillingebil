"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { CarouselVehicle } from "../data/vehicleUtils";

interface HeroCarouselProps {
  vehicles: CarouselVehicle[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ vehicles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [vehicles.length]);

  return (
    <div className="relative w-full h-130 sm:h-140 lg:h-150 overflow-hidden shadow-2xl">
      <AnimatePresence initial={false}>
        {vehicles.map((v, idx) =>
          idx === currentIndex ? (
            <motion.div
              key={v.id}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={v.image}
                alt={v.title}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between">
                {/*     <div>
                  <h2 className="font-bold text-2xl md:text-4xl text-gray-900">{v.title}</h2>
                  <p className="text-[#2db1cc] font-semibold text-lg md:text-2xl mt-1">{v.price}</p>
                </div> */}
                {v.isNew && (
                  <span className="mt-4 md:mt-0 md:ml-4 bg-linear-to-r from-[#2db1cc] to-[#36b795] text-white text-sm md:text-base font-bold px-4 py-2 rounded-full shadow-lg">
                    New Arrival
                  </span>
                )}
              </div>
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
