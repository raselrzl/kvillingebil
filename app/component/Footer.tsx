"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  // ✅ Reusable scroll-to-top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white px-2 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={400}
            className="h-5 w-auto"
            loading="eager"
          />

          {/* Address */}
          <div>
            <h3 className="text-sm font-bold mb-2">
              Kvillinge bil AB
            </h3>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-gray-100 mt-1" />
              <p className="text-xs text-gray-300 leading-relaxed">
                LIDA 1
<br />
                60599 Åby, Norrköping
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">Kontakt</h3>

            <a
              href="mailto:info@kvillingebil.se"
              className="flex items-center gap-2 mt-2 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Mail size={14} />
              info@kvillingebil.se
            </a>

            <a
              href="tel:011215600"
              className="flex items-center gap-2 text-xs text-gray-300 underline hover:text-white transition"
            >
              <Phone size={14} />
              011215600
            </a>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-sm font-bold mb-2">Info</h3>

            <Link
              href="/privacy-policy"
              onClick={handleScrollTop}
              className="block text-gray-300 underline text-xs font-bold hover:text-white transition"
            >
              Integritetspolicy
            </Link>

            <Link
              href="/kontakt"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition"
            >
              Boka tid
            </Link>

           <Link
              href="/om-oss"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-gray-300 underline hover:text-white transition"
            >
              Om oss
            </Link>

            <Link
              href="/karriar"
              onClick={handleScrollTop}
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
          
          <div />

          {/* Social Links */}
          <div className="order-1 md:order-3">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <p className="order-2 md:order-1 text-gray-500 text-[10px] text-center md:text-left">
            © {new Date().getFullYear()} Kvillinge bil AB{" "}
            <a
              href="https://www.souveral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
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