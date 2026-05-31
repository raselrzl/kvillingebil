"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#eeebe6] text-[#4d5946] px-2 font-inter">
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <Image
            src="/k.png"
            alt="Logo"
            width={400}
            height={400}
            className="h-10 w-auto"
            loading="eager"
          />

          {/* Address */}
          <div>
            <h3 className="text-sm font-bold mb-2 text-[#4d5946]">
              Kvillinge bil AB
            </h3>

            <div className="flex items-start gap-2 text-[#4d5946]/80">
              <MapPin size={14} className="mt-1" />
              <p className="text-xs leading-relaxed">
                LIDA 1
                <br />
                60599 Åby, Norrköping
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-[#4d5946]">
              Kontakt
            </h3>

            <a
              href="mailto:info@kvillingebil.se"
              className="flex items-center gap-2 mt-2 text-xs text-[#4d5946]/80 underline hover:text-[#4d5946] transition"
            >
              <Mail size={14} />
              info@kvillingebil.se
            </a>

            <a
              href="tel:011215600"
              className="flex items-center gap-2 text-xs text-[#4d5946]/80 underline hover:text-[#4d5946] transition"
            >
              <Phone size={14} />
              011215600
            </a>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-sm font-bold mb-2 text-[#4d5946]">
              Info
            </h3>

            <Link
              href="/privacy-policy"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-[#4d5946]/80 underline hover:text-[#4d5946] transition"
            >
              Integritetspolicy
            </Link>

            <Link
              href="/kontakt"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-[#4d5946]/80 underline hover:text-[#4d5946] transition"
            >
              Boka tid
            </Link>

            <Link
              href="/om-oss"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-[#4d5946]/80 underline hover:text-[#4d5946] transition"
            >
              Om oss
            </Link>

            <Link
              href="/karriar"
              onClick={handleScrollTop}
              className="block text-xs font-bold text-[#4d5946]/80 underline hover:text-[#4d5946] transition mb-4"
            >
              Karriärmöjligheter
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#4d5946]/20 py-3 text-[10px] text-[#4d5946]/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

          <div />

          {/* Social Links */}
          <div className="order-1 md:order-3">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <p className="order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Kvillinge bil AB{" "}
            <a
              href="https://www.souveral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#4d5946] transition"
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