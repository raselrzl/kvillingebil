"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MapCom from "../component/MapCom";

export default function AboutUsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative font-inter w-full h-140 md:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/karavan.mp4"
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase">
            Om oss
          </h1>
          <div className="w-20 h-0.5 bg-linear-to-r from-[#2db1cc] to-[#36b795] mx-auto mt-4" />
        </motion.div>
      </section>

      {/* INTRO / MAIN TEXT */}
      <section className="py-20 bg-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-stretch">
          
          {/* IMAGE */}
          <div className="md:col-span-6 relative h-full min-h-75">
            <Image
              src="/husvagnar.jpeg"
              alt="Kvillinge Bil gård"
              fill
              className="object-cover shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="bg-white shadow-xl p-8 sm:p-10 space-y-6 border border-gray-200">

              {/* Accent */}
              <div className="w-14 h-[2px] bg-gradient-to-r from-[#2db1cc] to-[#36b795]" />

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                Frihet på vägarna med{" "}
                <span className="text-[#2db1cc]">Kvillinge Bil</span>
              </h2>

              {/* Intro */}
              <p className="text-gray-700 leading-relaxed">
                Hos <span className="font-semibold">Kvillinge Bil</span> hjälper
                vi dig att hitta frihet på vägarna med kvalitativa husbilar och
                husvagnar. Verksamheten drivs från en vacker gård i Norrköping,
                där personlig service och stort engagemang står i fokus.
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-200" />

              {/* Body */}
              <p className="text-gray-700 leading-relaxed">
                Vi erbjuder förmedling, inbyten, inköp och noggrant utvalda
                fritidsfordon som passar alla behov – oavsett om du planerar
                längre äventyr eller sköna helgresor.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Med vår erfarenhet och passion för branschen hjälper vi dig att
                göra rätt val och skapa minnen för livet.
              </p>

              {/* Highlight */}
              <div className="bg-[#2db1cc]/10 border-l-4 border-[#2db1cc] p-4">
                <p className="font-semibold text-gray-800">
                  Välkommen till Kvillinge Bil – låt oss ta hand om din nästa resa!
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="/kontakt"
                  className="inline-block px-8 py-3 bg-[#2db1cc] text-white text-sm font-medium shadow-lg hover:bg-[#249bb3] transition"
                >
                  Kontakta oss
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUST SECTION */}
      <section className="py-24 bg-linear-to-b from-white to-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "År erfarenhet" },
              { number: "100+", label: "Sålda fordon" },
              { number: "100%", label: "Personlig service" },
              { number: "∞", label: "Resmöjligheter" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center border border-gray-100 hover:-translate-y-2"
              >
                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-[#2db1cc] to-[#1e90ff] text-transparent bg-clip-text">
                  {item.number}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#2db1cc] my-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Label */}
                <p className="text-gray-600 text-sm md:text-base text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <MapCom />
    </>
  );
}