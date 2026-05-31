"use client";

import Link from "next/link";
import { vehicles } from "../data/vehicles";

export default function AllVehiclesGrid() {
  return (
    <section className="w-full bg-[#f7f6f3] py-20">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {vehicles.map((car) => (
            <Link
              key={car.id}
              href={car.link}
              className="
                
                rounded-xs
                overflow-hidden
                border border-[#4d5946]/10
                hover:shadow-md
                transition
                group
                flex
                flex-col
                h-[420px]
                2xl:h-[460px]
                4xl:h-[520px]
                5xl:h-[580px]
              "
            >
              {/* Image */}
              <div
                className="
                  h-56
                  2xl:h-64
                  4xl:h-80
                  5xl:h-96
                  w-full
                  overflow-hidden
                "
              >
                <img
                  src={car.image}
                  alt={car.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

              {/* Content */}
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

                <div className="flex items-center justify-between">
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