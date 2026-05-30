"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Husbilar",
    image: "/2.png",
    href: "/fordon#husbilar",
  },
  {
    title: "Husvagnar",
    image: "/1.png",
    href: "/fordon#husvagnar",
  },
];

const CategoryLink: React.FC = () => {
  return (
    <section className="w-full py-10 bg-[#f7f6f3]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Centered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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
                className="relative block h-70 overflow-hidden group rounded"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                {/* Text */}
                <div className="relative z-10 flex items-center justify-center h-full text-center">
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/fordon"
            className="
              px-6 py-2
              rounded
              border border-[#4d5946]/30
              text-white
              text-sm uppercase
              bg-[#4d5946]
              hover:bg-[#718366]
              hover:text-white
              transition
            "
          >
            Visa alla fordon
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryLink;
