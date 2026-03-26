"use client";

import { Facebook, Instagram } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "FB",
      href: "https://www.facebook.com/profile.php?id=61557864878746",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kvillingebil/",
      icon: Instagram,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300"
          >
            <Icon className="w-6 h-6 text-white" />
          </a>
        );
      })}
    </div>
  );
}