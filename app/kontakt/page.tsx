"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfoCard from "../component/ContactInfoCard";
import MapCom from "../component/MapCom";

export default function ContactOssPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative font-inter w-full h-120 sm:h-130 2xl:h-150 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/kvpromo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide mb-2">
           Vi hjälper dig gärna
          </h1>
           <div className="max-w-2xl mx-auto px-6">
          <p className="text-gray-600 text-sm md:text-base">
            Har du frågor om husbilar, husvagnar, försäljning eller verkstad?
            Skicka ett meddelande så återkommer vi så snart som möjligt.
          </p>
        </div>
          <div className="w-20 h-1 bg-[#2db1cc] mx-auto mt-4" />
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
    </>
  );
}
