"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WorkshopPagePremium() {
  const services = [
    "Oljebyte och byte av oljefilter för motorn",
    "Batteritest och kontroll av syrahalten i batteriet",
    "Slanginspektion och trycktest av ditt gasolssystem",
    "Läckagetest med utfärdande av certifikat",
    "Installation av hydrauliska stödben för ökad stabilitet",
    "Installation av solpaneler med regulator för effektiv energiutvinning",
    "Takmonterad luftkonditionering för ökad komfort",
    "Installation av multimediaenheter med backkamera för ökad säkerhet",
    "Reparation av chassi, kaross och interiör",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-140 md:h-160 flex items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900">
        <video
          src="/w.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 transform px-10 text-white text-center"
        >
          <h1 className="text-2xl sm:text-4xl font-extrabold font-inter tracking-wide uppercase">
            Verkstad and Service
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            {" "}
            Boka din husbil eller husvagn för professionell service och
            reparation. Vi tar hand om allt!
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#2db1cc] to-[#249bb3] mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* PREMIUM IMAGE + TEXT CARD */}
      <section className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Layered Images */}
          <div className="relative w-full h-96 sm:h-120 lg:h-130">
            <div className="absolute top-0 left-0 w-[80%] h-[80%] overflow-hidden shadow-2xl transform -rotate-3">
              <Image
                src="/workshop.jpeg"
                alt="Workshop 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[80%] h-[80%] overflow-hidden shadow-2xl transform rotate-3">
              <Image
                src="/22.jpg"
                alt="Workshop 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-px bg-linear-to-br from-[#2db1cc]/40 via-transparent to-[#36b795]/40 shadow-2xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 sm:p-12 space-y-6">
              {/* Accent line */}
              <div className="w-12 h-1 bg-linear-to-r from-black to-[#36b795]" />

              <h2 className="text-2xl sm:text-3xl font-bold font-inter text-gray-800 uppercase">
                Professionell service & expertvård
              </h2>

              <p className="text-gray-700 text-base leading-relaxed">
                Som återförsäljare av KAMA fritid hjälper vi dig med beställning
                av reservdelar och tillbehör.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                Vår verkstad erbjuder fullservice för att hålla ditt fordon i
                toppskick tryggt, enkelt och effektivt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES  */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-inter text-[#2db1cc] uppercase">
            Våra tjänster
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-lg p-6 flex items-start gap-4 hover:scale-105 transition-transform cursor-default"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-[#2db1cc] to-[#249bb3] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700 font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 bg-linear-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/workshop1.png"
            alt="CTA Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-inter uppercase">
            Redo att boka service?
          </h3>
          <p className="text-white opacity-90 mb-8 text-base sm:text-lg">
            Kontakta oss idag och boka service eller reparation av ditt fordon.
          </p>
          <Link
            href="/kontakt#contact-booking"
            className="bg-linear-to-r from-[#2db1cc] to-[#249bb3] hover:from-[#249bb3] hover:to-[#1d8a9e] text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg transition-all shadow-lg"
          >
            Boka service
          </Link>
        </div>
      </section>
    </>
  );
}
