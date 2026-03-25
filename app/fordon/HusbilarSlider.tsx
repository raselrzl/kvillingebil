"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function HusbilarSlider({ vehicles }: { vehicles: VehicleCardProps[] }) {
  return <BaseSlider vehicles={vehicles} cardWidthClass="w-[80%] sm:w-[48%]" gap="gap-4" />;
}