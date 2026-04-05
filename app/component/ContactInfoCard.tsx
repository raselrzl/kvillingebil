"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactInfoCard() {
  return (
    <section className="w-full py-16 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white shadow-lg border border-gray-200 overflow-hidden grid md:grid-cols-2">
          {/* LEFT SIDE – Image */}
          <div className="flex flex-col items-center justify-center p-10 bg-black text-white">
            <Image
              src="/marcus.jpeg"
              alt="Marcus Cederborg"
              width={160}
              height={160}
              className="object-cover border-2 border-[#2db1cc] shadow-lg"
            />

            <h3 className="mt-6 text-xl font-semibold text-[#2db1cc]">
              Marcus Cederborg
            </h3>
            <p className="text-sm text-gray-300">Kontaktperson</p>
          </div>

          {/* RIGHT SIDE – Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase">
                Kontakta oss
              </h2>
              <p className="text-gray-600 mt-2 text-sm font-inter">
                Har du frågor om husbilar, husvagnar eller vill sälja ditt
                fordon? Hör av dig så hjälper vi dig.
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
                className="px-8 py-3 bg-linear-to-r from-black to-[#00bfff] text-white border border-transparent text-sm uppercase tracking-wide rounded-full 
  hover:from-[#1c86ee] hover:to-black transition duration-300"
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
