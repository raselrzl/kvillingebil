"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-100 sm:h-120 flex items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-inter">
            Integritetspolicy
          </h1>
          <div className="w-20 h-1 bg-[#2db1cc] mx-auto mt-4" />
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10 text-gray-700">
        
        {/* DATA CONTROLLER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Personuppgiftsansvarig
          </h2>
          <p>
            Kvillinge Bil AB är personuppgiftsansvarig för behandlingen av dina
            personuppgifter.
          </p>
          <p>
            Adress: Suffer 1, 605 99 Åby, Norrköping
          </p>
          <p>
            E-post: info@kvillingebil.se
          </p>
          <p>
            Telefon: 011-21 56 00
          </p>
        </motion.div>

        {/* DATA COLLECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Insamling av personuppgifter
          </h2>
          <p>
            Vi samlar endast in personuppgifter som du frivilligt lämnar till oss,
            exempelvis när du fyller i formulär på vår webbplats, bokar en tid
            eller kontaktar oss via e-post eller telefon.
          </p>
        </motion.div>

        {/* WHAT WE COLLECT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Vilka uppgifter vi behandlar
          </h2>
          <p>
            Vi kan behandla uppgifter såsom namn, e-postadress, telefonnummer
            samt annan information som du lämnar i samband med kontakt eller
            bokning.
          </p>
        </motion.div>

        {/* PURPOSE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Ändamål med behandlingen
          </h2>
          <p>
            Dina personuppgifter används för att kunna hantera din förfrågan,
            boka tjänster, kommunicera med dig samt tillhandahålla våra tjänster.
          </p>
        </motion.div>

        {/* LEGAL BASIS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Laglig grund
          </h2>
          <p>
            Behandlingen av dina personuppgifter sker med stöd av samtycke eller
            för att fullgöra avtal, exempelvis i samband med bokning av våra
            tjänster.
          </p>
        </motion.div>

        {/* STORAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Lagring av uppgifter
          </h2>
          <p>
            Vi sparar dina personuppgifter endast så länge det är nödvändigt för
            att uppfylla ändamålet med behandlingen eller så länge det krävs
            enligt lag.
          </p>
        </motion.div>

        {/* SHARING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Delning av personuppgifter
          </h2>
          <p>
            Vi delar inte dina personuppgifter med tredje part, förutom när det
            krävs enligt lag eller för att kunna fullgöra våra tjänster.
          </p>
        </motion.div>

        {/* RIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Dina rättigheter
          </h2>
          <p>
            Du har rätt att begära tillgång till dina personuppgifter, få felaktiga
            uppgifter rättade samt begära radering eller begränsning av behandling.
            Du har även rätt att inge klagomål till Integritetsskyddsmyndigheten (IMY).
          </p>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Kontakt
          </h2>
          <p>
            Vid frågor om denna policy eller vår behandling av personuppgifter,
            kontakta oss:
          </p>
          <p>E-post: info@kvillingebil.se</p>
          <p>Telefon: 011-21 56 00</p>
        </motion.div>

      </section>
    </>
  );
}