"use client";

import { Search, Phone, Key } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#f7f6f3] py-20 text-[#4d5946]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d5946]/60">
            så fungerar det
          </p>

          <h2 className="text-2xl md:text-4xl font-light mt-3">
            Tre enkla steg till ditt nästa äventyr
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Search size={34} className="mb-4 text-[#4d5946]" />
            <h3 className="text-lg font-medium">Hitta ditt fordon</h3>
            <p className="text-sm text-[#4d5946]/70 mt-2">
              Bläddra bland våra noggrant utvalda husbilar och husvagnar.
            </p>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden md:block w-px h-24 bg-[#4d5946]/20"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Phone size={34} className="mb-4 text-[#4d5946]" />
            <h3 className="text-lg font-medium">Kontakta oss</h3>
            <p className="text-sm text-[#4d5946]/70 mt-2">
              Vi svarar på dina frågor och hjälper dig hitta rätt.
            </p>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden md:block w-px h-24 bg-[#4d5946]/20"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Key size={34} className="mb-4 text-[#4d5946]" />
            <h3 className="text-lg font-medium">Kör iväg</h3>
            <p className="text-sm text-[#4d5946]/70 mt-2">
              Trygg affär, finansiering ordnad och du får nycklarna.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}