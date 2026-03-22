"use client";

import { MapPin, Phone, Mail, PhoneCall } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-5xl w-full p-10 dark:bg-gray-800 rounded-2xl px-4 sm:px-6 lg:px-8 pb-8 mb-10 mx-3 font-julius text-black dark:text-white shadow-md border border-gray-200 space-y-6 bg-white">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Hur kan vi hjälpa dig?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-center">
          Varmt välkommen att kontakta oss om du vill veta mer om vår verksamhet
          eller undrar över något inför ditt besök.
        </p>

        {/* Contact Details */}
        <div className="text-xs md:text-sm space-y-3 text-center flex flex-col items-center">
          <p className="font-semibold">Kvillinge bil AB</p>

          {/* Phone */}
          <p className="flex items-center justify-center gap-2">
            <Phone size={16} className="text-[#47d7ac]" />
            <a href="011215600" className="underline hover:text-[#47d7ac]">
              011215600
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center justify-center gap-2">
            <Mail size={16} className="text-[#47d7ac]" />
            <a
              href="mailto:info@kvillingebil.se"
              className="underline hover:text-[#47d7ac]"
            >
              info@kvillingebil.se
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
