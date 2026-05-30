"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfoCard from "../component/ContactInfoCard";
import ServicesSlider from "../component/servicesData";
import CategoryLink from "../component/categoryLink";

export default function ContactOssPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative font-inter w-full h-140 md:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/kv1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <div className="w-6 h-10 border-2 border-white flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded" />
          </div>
        </motion.div>
      </section>
      <section className="py-10 bg-gray-50">
        {" "}
        <ContactInfoCard />
      </section>
      {/* Contact Form */}
      <section className="py-10 bg-gray-50">
        <ContactForm />
      </section>
       <section className="pb-20 bg-linear-to-b from-white to-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-4">
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
                <h3 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-black to-[#1e90ff] text-transparent bg-clip-text">
                  {item.number}
                </h3>

                <div className="w-10 h-0.5 bg-[#2db1cc] my-4 group-hover:w-16 transition-all duration-300"></div>

                <p className="text-gray-600 text-sm md:text-base text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSlider />
      <CategoryLink />
    </div>
  );
}
