"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Förmedling", href: "/formedling" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Alla fordon", href: "/fordon" },
    { name: "Verkstad", href: "/verkstad" },
    { name: "Kontakta oss", href: "/kontakt" },
  ];

  return (
    <nav
      className={`w-full h-20 sm:h-24 fixed top-0 left-0 z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-black shadow-md"
          : "bg-linear-to-b from-black/80 via-black/40 to-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center md:pl-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={400}
            priority
            className="h-5 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden w-8 h-4 flex flex-col justify-between items-end cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="h-0.5 w-7 bg-white rounded"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="h-0.5 w-5 rounded bg-gray-100"
            animate={
              menuOpen
                ? { rotate: 45, y: 8, backgroundColor: "#cc0a39" }
                : { rotate: 0, y: 0, backgroundColor: "#cc0a39" }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-white rounded"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black overflow-hidden mx-8 border-t-4 border-gray-100"
          >
            <div className="flex flex-col text-center py-6 gap-6 font-semibold text-sm uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
