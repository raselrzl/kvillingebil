"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Info, Mail, MapPin, Phone, PhoneCall, Smartphone } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-2 font-inter border-t font-julius border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Grid: 1 column mobile / 2 tablet / 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Section 1 – Follow */}

          <Image
  src="/logo.png"
  alt="Logo"
  width={400}
  height={400}
  className="h-5 w-auto"
  loading="eager"
/>

          {/* Section 2 – Kontakt */}
          <div className="font-julius">
            <h3 className="text-sm font-bold mb-2 font-julius">
              Kvillinge bil AB
            </h3>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-gray-100 mt-1" />

              <p className="text-xs text-gray-300 leading-relaxed font-julius">
                Suffer 1<br />
                60599 Åby, Norrköping
              </p>
            </div>
          </div>

          {/* Section 3 – Företag */}
          <div className="font-julius">
            <h3 className="text-sm font-bold mb-4 font-julius">
              Företagsbokningar
            </h3>

            <a
              href="mailto:info@kvillingebil.se"
              className="flex items-center gap-2 mt-4 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Mail size={14} className="text-gray-100" />
              info@kvillingebil.se
            </a>
            {/* Phone */}
            <a
              href="tel:011215600"
              className="flex items-center gap-2 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Phone size={14} className="text-gray-100" />
              011215600
            </a>

            <br />
          </div>

          {/* Section 4 – Övrigt */}
          <div className="font-julius">
            <h3 className="text-sm font-bold mb-2 font-julius">Info</h3>
            <Link
              href="/privacy-policy"
              className="block text-gray-300 underline text-xs font-bold hover:text-white transition"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/booking" // change if needed
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition"
            >
              Boka tid
            </Link>
            <Link
              href="/paymentoptions"
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition "
            >
              Betalningsalternativ
            </Link>
            <Link
              href="/vandrarhem/about"
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition"
            >
              Om oss
            </Link>
            <Link
              href="/karriar"
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition mb-4"
            >
              Karriärmöjligheter
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-1 text-[10px] text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <div></div>
          {/* Social Links - First on mobile, right on desktop */}
          <div className="order-1 md:order-3">
            <SocialLinks />
          </div>

          {/* Copyright + Support */}
          <p className="order-2 md:order-1 text-gray-500 text-[10px] text-center md:text-left font-julius">
            © {new Date().getFullYear()} Kvillinge bil AB{" "}
            <a
              href="https://www.souveral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-[10px] underline hover:text-white transition"
            >
              Support
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
