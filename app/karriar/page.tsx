"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CareerPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="relative w-full h-120 sm:h-140 lg:h-160 flex items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900">
        <Image
          src="/workshop.jpeg"
          alt="Karriär hos Kvillinge Bil"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-inter uppercase tracking-wide">
            Karriär
          </h1>

          {/* Accent */}
          <div className="w-24 h-0.5 bg-linear-to-r from-[#2db1cc] to-[#36b795] mx-auto mt-6" />

          <p className="mt-6 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            Vill du arbeta i en professionell och växande verksamhet där kvalitet,
            service och långsiktiga kundrelationer står i fokus?
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-px bg-linear-to-r from-[#2db1cc]/30 via-transparent to-[#36b795]/30"
        >
          <div className="bg-white shadow-2xl p-8 sm:p-12 space-y-6 border border-gray-200">
            {/* Accent */}
            <div className="w-14 h-0.5 bg-linear-to-r from-black to-[#36b795]" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-inter uppercase">
              Att arbeta hos Kvillinge Bil AB
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Kvillinge Bil AB är en etablerad aktör inom försäljning och service av
              husbilar och husvagnar. Vår verksamhet präglas av hög kvalitet,
              personligt engagemang och ett starkt kundfokus.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Vi erbjuder en professionell arbetsmiljö där du får möjlighet att
              utvecklas inom ditt område och bidra till företagets fortsatta
              tillväxt. Hos oss arbetar du i ett engagerat team där samarbete,
              ansvarstagande och affärsmässighet värderas högt.
            </p>
          </div>
        </motion.div>
      </section>

      {/* POSITION */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-px bg-linear-to-r from-[#2db1cc]/30 via-transparent to-[#36b795]/30"
          >
            <div className="bg-white shadow-2xl p-8 sm:p-12 space-y-8 border border-gray-200">
              {/* HEADER */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-inter uppercase">
                  Säljare inom husbilar & husvagnar
                </h2>
                <p className="text-gray-500 mt-2">Plats: Åby, Norrköping</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Vi söker en driven och affärsinriktad säljare med erfarenhet av
                försäljning. Du kommer att arbeta med kundrådgivning,
                behovsanalys och försäljning av våra fordon samt bidra till att
                skapa en trygg och professionell köpupplevelse för våra kunder.
              </p>

              {/* REQUIREMENTS */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 uppercase text-sm tracking-wide">
                  Kvalifikationer
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dokumenterad erfarenhet av försäljning</li>
                  <li>• God kommunikativ förmåga i tal och skrift</li>
                  <li>• Stark känsla för service och kundbemötande</li>
                  <li>• Självgående, ansvarstagande och målinriktad</li>
                </ul>
              </div>

              {/* WE OFFER */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 uppercase text-sm tracking-wide">
                  Vi erbjuder
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• En stabil och växande arbetsplats</li>
                  <li>• Möjlighet till personlig och professionell utveckling</li>
                  <li>• Ett engagerat och erfaret team</li>
                  <li>• En roll med stort eget ansvar</li>
                </ul>
              </div>

              {/* APPLY */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2 uppercase text-sm tracking-wide">
                  Ansökan
                </h3>
                <p className="text-gray-700 mb-6">
                  Skicka ditt CV och personliga brev till oss via e-post. Märk din
                  ansökan med "Säljare".
                </p>

                <a
                  href="mailto:info@kvillingebil.se"
                  className="inline-block px-8 py-3 text-white font-semibold text-sm shadow-lg transition-all
                  bg-linear-to-r from-black to-[#1e90ff] hover:from-[#1e90ff] hover:to-black"
                >
                  info@kvillingebil.se
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 bg-linear-to-t from-gray-900 to-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/22.jpg"
            alt="Team Kvillinge Bil"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-inter uppercase">
            Intresserad av att arbeta med oss?
          </h3>

          <div className="w-16 h-0.5 bg-linear-to-r from-[#2db1cc] to-[#36b795] mx-auto mb-6" />

          <p className="text-white opacity-90 text-base sm:text-lg leading-relaxed">
            Vi tar gärna emot spontana ansökningar från personer med relevant
            erfarenhet och ett starkt engagemang.
          </p>
        </div>
      </section>
    </div>
  );
}