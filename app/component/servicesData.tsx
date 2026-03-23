"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Phone,
  ChevronRight,
  ChevronLeft,
  CircleFadingPlus,
  Car,
  Truck,
  BadgeDollarSign,
  MessagesSquare,
  ShieldCheck,
  Circle,
} from "lucide-react";

type ServiceItem = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const servicesData: ServiceItem[] = [
  {
    title: "Husvagnar",
    icon: <Truck className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Stort utbud av nya och begagnade husvagnar",
      "För alla behov och budgetar",
    ],
  },
  {
    title: "Husbilar",
    icon: <Car className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Bekväma och fullt utrustade husbilar",
      "Frihet att resa när du vill",
    ],
  },
  {
    title: "Inköp",
    icon: <BadgeDollarSign className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Vi köper ditt fordon snabbt",
      "Trygg och smidig affär",
    ],
  },
  {
    title: "Inbyte",
    icon: <Circle className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Byt in ditt fordon hos oss",
      "Enkel lösning vid köp av nytt",
    ],
  },
  {
    title: "Försäljning",
    icon: <BadgeDollarSign className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Sälj ditt fordon enkelt",
      "Vi hanterar hela processen",
    ],
  },
  {
    title: "Förmedling",
    icon: <MessagesSquare className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Vi säljer ditt fordon åt dig",
      "Maximera värdet utan stress",
    ],
  },
  {
    title: "Verkstad",
    icon: <ShieldCheck className="w-10 h-10 text-[#2db1cc]" />,
    points: [
      "Service och reparationer",
      "Erfarna tekniker du kan lita på",
    ],
  },
  
];

export default function ServicesSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedData = [...servicesData, ...servicesData, ...servicesData];
  const middleIndexOffset = servicesData.length;

  useEffect(() => {
    const firstChild = carouselRef.current?.children[0] as HTMLElement;
    if (firstChild) {
      const width = firstChild.clientWidth + 24;
      setCardWidth(width);
      carouselRef.current!.scrollLeft = middleIndexOffset * width;
      setActiveIndex(0);
    }
  }, []);

  const scrollToIndex = (direction: "left" | "right") => {
    if (!carouselRef.current || !cardWidth) return;

    let newIndex = activeIndex + (direction === "right" ? 1 : -1);
    const normalizedIndex =
      (newIndex + servicesData.length) % servicesData.length;
    setActiveIndex(normalizedIndex);

    const currentScroll = carouselRef.current.scrollLeft;
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

    carouselRef.current.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let timeout: any;
    const handleScrollEnd = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += servicesData.length * cardWidth;
        } else if (
          carousel.scrollLeft >=
          2 * servicesData.length * cardWidth
        ) {
          carousel.scrollLeft -= servicesData.length * cardWidth;
        }
      }, 150);
    };

    carousel.addEventListener("scroll", handleScrollEnd);
    return () => carousel.removeEventListener("scroll", handleScrollEnd);
  }, [cardWidth]);

  return (
    <section className="py-10 bg-gray-100 font-inter">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">Vi erbjuder</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Allt inom husbilar, husvagnar och fordonstjänster
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => scrollToIndex("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scrollToIndex("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-6 scroll-smooth snap-x snap-mandatory"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {extendedData.map((item, index) => (
                <div
                  key={index}
                  className="w-70 h-80 bg-white rounded-xl border border-gray-200 shadow-md snap-start shrink-0 flex flex-col items-start p-6 transition hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-6">{item.icon}</div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {servicesData.map((_, index) => (
              <button key={index} onClick={() => scrollToIndex("right")}>
                <CircleFadingPlus
                  className={`w-4 h-4 ${
                    activeIndex === index
                      ? "text-[#2db1cc] scale-110"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}