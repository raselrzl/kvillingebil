"use client";

import { useRef, useEffect, useState } from "react";
import VehicleCard, { VehicleCardProps } from "./VehicleCard";

interface BaseSliderProps {
  vehicles: VehicleCardProps[];
  cardWidthClass?: string; // e.g., "w-[80%] sm:w-[48%] lg:w-[40%]"
  gap?: string; // e.g., "gap-4", "gap-6"
}

const BaseSlider: React.FC<BaseSliderProps> = ({
  vehicles,
  cardWidthClass = "w-[80%] sm:w-[48%]",
  gap = "gap-4",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector<HTMLDivElement>(
          "div > div"
        );
        if (firstCard) {
          const style = window.getComputedStyle(firstCard);
          const width = firstCard.clientWidth + parseFloat(style.marginRight);
          setCardWidth(width);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [vehicles]);

  // Update currentIndex on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardWidth]);

  const next = () =>
    containerRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  const prev = () =>
    containerRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`flex overflow-hidden ${gap}`}
        style={{ scrollBehavior: "smooth" }}
      >
        {vehicles.map((v) => (
          <div key={v.id} className={`shrink-0 ${cardWidthClass}`}>
            <VehicleCard {...v} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/40 text-white px-2 py-1 rounded-full hover:bg-black/60 z-10"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/40 text-white px-2 py-1 rounded-full hover:bg-black/60 z-10"
      >
        ›
      </button>

      {/* Slider indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {vehicles.map((_, idx) => (
          <button
            key={idx}
            onClick={() =>
              containerRef.current?.scrollTo({
                left: idx * cardWidth,
                behavior: "smooth",
              })
            }
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-[#2db1cc]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BaseSlider;