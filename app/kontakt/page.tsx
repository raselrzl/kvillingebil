"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfoCard from "../component/ContactInfoCard";

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
    </div>
  );
}
