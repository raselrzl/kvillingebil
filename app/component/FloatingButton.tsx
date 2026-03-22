"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  CalendarCheck,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      label: "011215600",
      href: "tel:011215600",
      icon: Smartphone,
    },
    {
      label: "Email",
      href: "mailto: info@kvillingebil.se",
      icon: Mail,
    },
    {
      label: "Boka tid",
      href: "/kontakt#contact-booking",
      icon: CalendarCheck,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Drawer Items */}
      <AnimatePresence>
        {open &&
          items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-white transition"
              >
                <Icon size={16} />
                 {item.label}
              </motion.a>
            );
          })}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full shadow-lg hover:scale-110 transition"
      >
        <Image
          src={open ? "/marcus.jpeg" : "/marcus.jpeg"}
          alt="Contact support"
          unoptimized
          width={60}
          height={60}
          className="rounded-full h-10 w-10 object-fill"
        />
      </button>
    </div>
  );
}
