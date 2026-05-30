"use client";

import Link from "next/link";
import { vehicles } from "../data/vehicles";

export default function FeaturedVehicles() {
  const featured = vehicles.slice(0, 4);

  return (
    <section className="w-full bg-[#f7f6f3] py-20">
      <div className="w-full px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10 w-full">
          
          <div className="min-w-0">
            <p className="text-sm uppercase text-[#4d5946]/70">
              utvalda fordon
            </p>

            <h2 className="text-lg md:text-3xl font-light text-[#4d5946] mt-2 whitespace-nowrap md:whitespace-normal overflow-hidden text-ellipsis">
              Noggrant utvalda fordon
            </h2>
          </div>

          <Link
            href="/fordon"
            className="shrink-0 whitespace-nowrap px-4 py-1 mt-4 rounded
            border border-[#4d5946]/40 text-[#4d5946] text-xs
            hover:bg-[#4d5946] hover:text-white transition"
          >
            Se alla fordon →
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          
          {featured.map((car) => (
            <Link
              key={car.id}
              href={car.link}
              className="
                rounded overflow-hidden border border-[#4d5946]/10 
                hover:shadow-md transition group flex flex-col
                h-[380px]
                xl:h-[440px]
                2xl:h-[520px]
                3xl:h-[600px]
              "
            >
              {/* IMAGE (TV / SHOWROOM STYLE) */}
              <div
                className="
                  w-full overflow-hidden
                  h-[200px]
                  xl:h-[260px]
                  2xl:h-[340px]
                  3xl:h-[420px]
                "
              >
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-[#4d5946] flex flex-col justify-between flex-1">
                
                <div>
                  <h3 className="text-sm font-medium leading-snug">
                    {car.title.length > 55
                      ? car.title.slice(0, 55) + "..."
                      : car.title}
                  </h3>

                  <p className="text-xs text-[#4d5946]/70 mt-2">
                    {car.details}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-semibold">
                    {car.price}
                  </span>

                  <span className="text-lg group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}