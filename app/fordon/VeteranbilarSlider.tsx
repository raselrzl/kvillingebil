"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function VeteranbilarSlider({ vehicles }: { vehicles: VehicleCardProps[] }) {
  return <BaseSlider vehicles={vehicles} cardWidthClass="w-[90%] sm:w-[45%]" gap="gap-4" />;
}