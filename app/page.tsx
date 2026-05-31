"use client";
import React, { useEffect, useRef } from "react";
import FeaturedVehicles from "./component/FeaturedVehicles";
import HowItWorks from "./component/HowItWorks";
import AboutKvillinge from "./component/AboutKvillinge";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      {" "}
      <section className="relative w-full h-170 -mt-30 overflow-hidden pt-20">
        <img
          src="/img/img9.jpg"
          alt="Vehicle"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-olive-900/25" />

        <div className="relative z-10 h-full flex items-center">
          <div className=" md:pl-20 mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="md:text-sm text-xs uppercase text-olive-100 mb-4 font-semibold">
                NOGGRANT UTVALDA FORDON
              </p>

              <h1 className="text-4xl font-extrabold leading-tight text-olive-200 mb-6">
                Vi hjälper dig
                <br />
                hitta rätt fordon.
              </h1>

              <p className="text-xs md:text-sm text-olive-200 w-50 md:max-w-100  mb-8">
                Personlig service, trygga affärer och fordon vi själva skulle
                vilja resa med.
              </p>

              <div className="flex md:flex-row flex-col gap-4">
                <Link href="/fordon" className="px-3 py-1 bg-white/90 rounded w-40 text-[#5a6249]">
                  Våra fordon
                </Link>

                <Link href="/kontakt"  className="px-3 py-1 border border-white/50 w-40 text-white hover:bg-white hover:text-black transition">
                  Kontakt oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedVehicles />
         <AboutKvillinge />
      <HowItWorks />
   
    </>
  );
};

export default HomePage;
