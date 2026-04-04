"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function HusbilarSlider({
  vehicles,
}: {
  vehicles: VehicleCardProps[];
}) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-20 px-4">
        <div className="relative max-w-xl w-full p-px bg-linear-to-br from-[#2db1cc]/40 via-transparent to-[#36b795]/40">
          <div className=" bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl p-10 text-center">
            {/* Accent line */}
            <div className="w-12 h-1 mx-auto mb-6 bg-linear-to-r from-black to-[#2db1cc]" />

            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Inga husbilar tillgängliga just nu
            </h3>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              För tillfället har vi inga husbilar i lager. Håll utkik här – så
              snart nya fordon blir tillgängliga kommer du kunna hitta och köpa
              dina favoritfordon hos oss.
            </p>

            {/* subtle CTA hint */}
            <div className="mt-6 text-sm text-gray-400">Uppdateras löpande</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BaseSlider
      vehicles={vehicles}
      cardWidthClass="w-[80%] sm:w-[48%]"
      gap="gap-4"
    />
  );
}
