"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function HusvagnarSlider({
  vehicles,
}: {
  vehicles: VehicleCardProps[];
}) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-16">
        <div className="max-w-xl w-full bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Inga husvagnar tillgängliga just nu
          </h3>
          <p className="text-gray-600 leading-relaxed">
            För tillfället har vi inga husvagnar i lager.  
            Håll utkik här – så snart nya fordon blir tillgängliga  
            kommer du kunna hitta och köpa dina favoritfordon hos oss.
          </p>
        </div>
      </div>
    );
  }

  return (
    <BaseSlider
      vehicles={vehicles}
      cardWidthClass="w-[85%] sm:w-[50%]"
      gap="gap-6"
    />
  );
}