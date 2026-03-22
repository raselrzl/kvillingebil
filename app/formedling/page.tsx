"use client";

import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <section className="relative w-full h-120 sm:h-130 2xl:h-160 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/kvpromo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-julius">
            Förmedling
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#2db1cc] mx-auto mt-4" />
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-6 text-gray-700 text-justify">
        {/* Intro Text */}
        <section className="max-w-5xl mx-auto ">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* Accent line */}
            <div className="w-12 h-1 bg-[#2db1cc] mb-6"></div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                På Kvillinge Bil i Norrköping har vi god erfarenhet av
                försäljning av kvalitetsmärken som Kabe, Adria, Swift och Hobby.
                Vi vet vad potentiella köpare letar efter och kan framhäva ditt
                fordons unika fördelar på ett sätt som fångar intresset hos rätt
                målgrupp. Vi erbjuder en smidig och framgångsrik försäljning av
                din husbil eller husvagn.
              </p>

              <p>
                Låt oss ta hand om marknadsföringen, förhandlingarna och allt
                det administrativa arbetet. Du kan känna dig trygg med att vi
                har erfarenhet och en pålitlig process för att maximera ditt
                försäljningsresultat.
              </p>

              <p className="font-medium text-gray-900 dark:text-white">
                Kontakta oss idag för att få veta mer om hur vi på Kvillinge Bil
                i Norrköping kan hjälpa dig att sälja din Kabe, Adria, Swift
                eller Hobby husbil eller husvagn!
              </p>
            </div>
          </div>
        </section>

        {/* "Vi erbjuder" Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-6 font-julius text-center">
          Vi erbjuder:
        </h2>
        <div className="space-y-4">
          {offers.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-l-full border-l-4 border-[#2db1cc] px-4 py-2 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* "Fördelar för köparen" Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-julius text-center">
          Fördelar för köparen:
        </h2>
        <div className="space-y-4">
          {buyerBenefits.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-l-full border-l-4 border-[#2db1cc] px-4 py-2 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
