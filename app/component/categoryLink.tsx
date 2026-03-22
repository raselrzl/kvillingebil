"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Husbilar",
    image: "/2.png",
    href: "/husbilar",
  },
  {
    title: "Husvagnar",
    image: "/1.png",
    href: "/husvagnar",
  },
  {
    title: "Veteranbilar",
    image: "/veteranbilar.jpeg",
    href: "/veteranbilar",
  },
];
const CategoryLink: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-30 bg-white font-julius">
      <div className="max-w-7xl mx-auto px-8 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {links.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative block h-70 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* Center Text */}
                <div className="relative z-10 flex items-center justify-center h-full text-center">
                  <h3 className="text-white text-xl md:text-2xl tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/fordon"
            className="px-8 py-3 bg-black text-white border border-black text-sm uppercase tracking-wide rounded-full 
    hover:bg-black/70 hover:text-white transition duration-300"
          >
            Visa alla fordon
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryLink;
