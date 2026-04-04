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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center text-white px-4 w-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-inter">
            Smidig försäljning av din husbil eller husvagn
          </h1>
          <div className="w-20 h-1 bg-[#2db1cc] mx-auto mt-4" />
        </motion.div>
      </section>

      {/* INTRO + PREMIUM IMAGE STYLE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGES (Layered Style) */}
          <div className="relative w-full h-75 sm:h-100">
            {/* Back Image */}
            <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/v1.png"
                alt="Vehicle 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Front Image */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/v2.png"
                alt="Vehicle 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT CARD */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-5">
            <div className="w-12 h-1 bg-[#2db1cc]" />

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              På Kvillinge Bil i Norrköping har vi god erfarenhet av försäljning
              av kvalitetsmärken som Kabe, Adria, Swift och Hobby.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Låt oss ta hand om marknadsföringen, förhandlingarna och allt det
              administrativa arbetet – tryggt, enkelt och effektivt.
            </p>
          </div>
        </div>
      </section>

      {/* LISTS */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 space-y-10 text-gray-700">
        <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE WITH TITLE OVERLAY */}
            <div className="relative w-full h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/3.png"
                alt="Vi erbjuder"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-center px-4">
                  Vi erbjuder
                </h2>
              </div>
            </div>

            {/* LIST WITH CHECKMARK SVG */}
            <div className="space-y-3 sm:space-y-4">
              {offers.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-[#2db1cc]/20 rounded-full px-4 py-2 text-sm sm:text-base"
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
        <div className="relative mx-6 h-48 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image src="/v1.png" alt="Showcase" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg sm:text-2xl md:text-3xl font-semibold font-inter text-center px-4">
            Fördelar för köparen
          </div>
        </div>

        {/* BENEFITS */}
        <div>
          <div className="space-y-3 sm:space-y-4 mt-6 px-6 max-w-4xl mx-auto">
            {buyerBenefits.map((item, index) => (
              <motion.div
                key={index}
                className=" rounded-full border-l-4 bg-[#2db1cc]/20  border-[#2db1cc] px-4 py-2 text-sm sm:text-base"
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
      <section className="w-full px-6 my-16">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl px-6">
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
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4">
              Redo att sälja ditt fordon?
            </h3>

            <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8">
              Vi tar hand om hela processen – från värdering till försäljning.
            </p>

            <Link href="/kontakt" className="bg-[#2db1cc] hover:bg-[#249bb3] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base transition">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
