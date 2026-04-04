"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FormedlingPage() {
  const offers = [
    "Värdering av fordonet",
    "Fukttest och gasoltest",
    "Professionell fotografering för att visa upp fordonet på bästa sätt",
    "Skapa en lockande och informativ beskrivning av fordonet",
    "Marknadsföra fordonet på plattformar som Sociala medier, Blocket, och vår egen hemsida",
    "Hantera kontraktsskrivning med nya kunden",
    "Vid behov, kontakta finansbolag och hjälpa till att lösa eventuella befintliga lån",
    "Ägarbyte",
  ];

  const buyerBenefits = [
    "Ordna med finansieringsalternativ för att underlätta köpet",
    "Erbjuda garanti för extra trygghet",
    "Möjlighet att ta in kundens nuvarande fordon som inbyte",
    "Säkerställa att fordonet har genomgått fukttest och gasoltest och är i gott skick",
    "Vid behov genomförs besiktning och service",
    "Möjlighet att erbjuda extra utrustning genom KAMA fritid",
    "Erbjuda en trygg köpupplevelse av ett skuldfritt fordon utan obetalda fordonsskatter vid ägarbyte",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-140 md:h-160 flex items-center justify-center bg-black">
        {/* VIDEO */}
        <video
          src="/kv2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10 " />

        {/* TEXT (FORCE ABOVE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 z-20 text-center text-white px-4 w-full"
        >
          <h1 className="text-2xl sm:text-4xl font-extrabold font-inter tracking-wide uppercase">
            Smidig försäljning av din husbil eller husvagn
          </h1>
          <div className="w-20 h-1 bg-[#2db1cc] mx-auto mt-4" />
        </motion.div>
      </section>

      {/* INTRO + PREMIUM IMAGE STYLE */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGES (Layered Style) */}
          <div className="relative w-full h-75 sm:h-100">
            {/* Back Image */}
            <div className="absolute top-0 left-0 w-[75%] h-[75%] overflow-hidden shadow-lg">
              <Image
                src="/v1.png"
                alt="Vehicle 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Front Image */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[75%] overflow-hidden shadow-lg rotate-3">
              <Image
                src="/v2.png"
                alt="Vehicle 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT CARD */}
          <div className="relative p-px bg-linear-to-br from-[#2db1cc]/40 via-transparent to-[#36b795]/40 shadow-xl">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 sm:p-8 space-y-5">
              {/* Accent line */}
              <div className="w-12 h-1 bg-linear-to-r from-black to-[#36b795]" />

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                På Kvillinge Bil i Norrköping har vi god erfarenhet av
                försäljning av kvalitetsmärken som Kabe, Adria, Swift och Hobby.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Låt oss ta hand om marknadsföringen, förhandlingarna och allt
                det administrativa arbetet – tryggt, enkelt och effektivt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LISTS */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 space-y-10 text-gray-700">
        <section className="max-w-6xl mx-auto py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE WITH TITLE OVERLAY */}
            <div className="relative h-64 sm:h-80 md:h-full overflow-hidden shadow-lg mx-4 md:mx-0">
              <Image
                src="/3.png"
                alt="Vi erbjuder"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-center px-4 uppercase">
                  Vi erbjuder
                </h2>
              </div>
            </div>

            {/* LIST WITH CHECKMARK SVG */}
            <div className="space-y-3 sm:space-y-4 mx-4 md:mx-0">
              {offers.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-[#2db1cc]/20 px-4 py-2 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* SVG Checkmark */}
                  <svg
                    className="w-5 h-5 mr-3 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2db1cc"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>

                  {/* List text */}
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE BANNER */}

        <div className="relative max-w-6xl h-48 sm:h-64 md:h-72 overflow-hidden shadow-lg mx-4 sm:mx-auto flex items-center justify-center">
          <Image
            src="/v1.png"
            alt="Vi erbjuder"
            fill
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-inter uppercase leading-tight">
              Fördelar för köparen
            </h2>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="">
          <div className="space-y-3 sm:space-y-4 mt-6 px-4 md:px-0 max-w-6xl mx-auto">
            {buyerBenefits.map((item, index) => (
              <motion.div
                key={index}
                className=" border-l-4 bg-[#2db1cc]/20  border-[#2db1cc] px-4 py-2 text-sm sm:text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 my-16">
        <div className="max-w-6xl mx-auto relative overflow-hidden px-6">
          <div className="absolute inset-0">
            <Image
              src="/v2.png"
              alt="CTA Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center text-white py-12 sm:py-16 px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 uppercase">
              Redo att sälja ditt fordon?
            </h3>

            <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8">
              Vi tar hand om hela processen – från värdering till försäljning.
            </p>

            <Link
              href="/kontakt"
              className="px-8 py-3 bg-linear-to-r from-black to-[#00bfff] text-white border border-transparent text-sm uppercase tracking-wide rounded-full 
  hover:from-[#1c86ee] hover:to-black transition duration-300"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
