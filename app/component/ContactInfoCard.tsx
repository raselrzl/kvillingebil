"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactInfoCard() {
  return (
    <section className="w-full dark:bg-gray-900 py-16 font-julius">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 overflow-hidden grid md:grid-cols-2">

          {/* LEFT SIDE – Image */}
          <div className="flex flex-col items-center justify-center p-10 bg-black text-white">
            <Image
              src="/marcus.jpeg"
              alt="Marcus Cederborg"
              width={160}
              height={160}
              className="rounded-xs object-cover border-2 border-[#2db1cc] shadow-lg"
            />

            <h3 className="mt-6 text-xl font-semibold text-[#2db1cc]">
              Marcus Cederborg
            </h3>
            <p className="text-sm text-gray-300">
              Kontaktperson
            </p>
          </div>

          {/* RIGHT SIDE – Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 text-center md:text-left">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Kontakta oss
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Har du frågor om husbilar, husvagnar eller vill sälja ditt fordon?
                Hör av dig så hjälper vi dig.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <p className="font-semibold">Kvillinge Bil AB</p>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-[#2db1cc]" />
                <a
                  href="tel:011215600"
                  className="hover:text-[#2db1cc] transition"
                >
                  011 21 56 00
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-[#2db1cc]" />
                <a
                  href="mailto:info@kvillingebil.se"
                  className="hover:text-[#2db1cc] transition"
                >
                  info@kvillingebil.se
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="tel:011215600"
                className="inline-block px-6 py-3 bg-[#2db1cc] text-white rounded-full text-sm hover:bg-[#36b795] transition"
              >
                Ring direkt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}