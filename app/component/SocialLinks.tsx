"use client";

import Image from "next/image";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "FB",
      href: "https://www.facebook.com/profile.php?id=61557864878746", // ändra till din länk
      icon: "/facebook.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kvillingebil/", // ändra till din länk
      icon: "/instagram.webp",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center hover:scale-105 transition-all duration-300"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={24}
            height={24}
            className="object-contain rounded-full"
          />
        </a>
      ))}
    </div>
  );
}