"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function VeteranbilarSlider({
  vehicles,
}: {
  vehicles: VehicleCardProps[];
}) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-20 px-4">
        <div className="relative max-w-xl w-full rounded-3xl p-px bg-linear-to-br from-[#2db1cc]/40 via-transparent to-[#36b795]/40">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl p-10 text-center">
            {/* Accent line */}
            <div className="w-12 h-1 mx-auto mb-6 rounded-full bg-linear-to-r from-[#2db1cc] to-[#36b795]" />

            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Inga veteranbilar just nu
            </h3>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              För tillfället har vi inga veteranbilar i lager. Men håll utkik –
              så snart nya fordon blir tillgängliga kan du enkelt hitta och köpa
              dina favoriter här.
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
      cardWidthClass="w-[90%] sm:w-[45%]"
      gap="gap-4"
    />
  );
}
