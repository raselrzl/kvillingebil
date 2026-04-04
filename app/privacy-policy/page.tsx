"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-100 sm:h-120 flex items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-inter uppercase tracking-wide">
            Integritetspolicy
          </h1>
          <div className="w-24 h-0.5 bg-linear-to-r from-[#2db1cc] to-[#36b795] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8 text-gray-700">

        {[
          {
            title: "Personuppgiftsansvarig",
            content: (
              <>
                <p>Kvillinge Bil AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.</p>
                <p>Adress: Suffer 1, 605 99 Åby, Norrköping</p>
                <p>E-post: info@kvillingebil.se</p>
                <p>Telefon: 011-21 56 00</p>
              </>
            ),
          },
          {
            title: "Insamling av personuppgifter",
            content: (
              <p>
                Vi samlar endast in personuppgifter som du frivilligt lämnar till oss,
                exempelvis när du fyller i formulär på vår webbplats, bokar en tid
                eller kontaktar oss via e-post eller telefon.
              </p>
            ),
          },
          {
            title: "Vilka uppgifter vi behandlar",
            content: (
              <p>
                Vi kan behandla uppgifter såsom namn, e-postadress, telefonnummer
                samt annan information som du lämnar i samband med kontakt eller
                bokning.
              </p>
            ),
          },
          {
            title: "Ändamål med behandlingen",
            content: (
              <p>
                Dina personuppgifter används för att kunna hantera din förfrågan,
                boka tjänster, kommunicera med dig samt tillhandahålla våra tjänster.
              </p>
            ),
          },
          {
            title: "Laglig grund",
            content: (
              <p>
                Behandlingen av dina personuppgifter sker med stöd av samtycke eller
                för att fullgöra avtal, exempelvis i samband med bokning av våra tjänster.
              </p>
            ),
          },
          {
            title: "Lagring av uppgifter",
            content: (
              <p>
                Vi sparar dina personuppgifter endast så länge det är nödvändigt för
                att uppfylla ändamålet med behandlingen eller så länge det krävs
                enligt lag.
              </p>
            ),
          },
          {
            title: "Delning av personuppgifter",
            content: (
              <p>
                Vi delar inte dina personuppgifter med tredje part, förutom när det
                krävs enligt lag eller för att kunna fullgöra våra tjänster.
              </p>
            ),
          },
          {
            title: "Dina rättigheter",
            content: (
              <p>
                Du har rätt att begära tillgång till dina personuppgifter, få felaktiga
                uppgifter rättade samt begära radering eller begränsning av behandling.
                Du har även rätt att inge klagomål till Integritetsskyddsmyndigheten (IMY).
              </p>
            ),
          },
          {
            title: "Kontakt",
            content: (
              <>
                <p>Vid frågor om denna policy eller vår behandling av personuppgifter, kontakta oss:</p>
                <p>E-post: info@kvillingebil.se</p>
                <p>Telefon: 011-21 56 00</p>
              </>
            ),
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-px bg-linear-to-r from-[#2db1cc]/40 via-transparent to-[#36b795]/40"
          >
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-6 sm:p-8 space-y-4 shadow-lg">
              
              {/* Accent line */}
              <div className="w-12 h-0.5 bg-linear-to-r from-[#2db1cc] to-[#36b795]" />

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                {section.title}
              </h2>

              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                {section.content}
              </div>

            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}