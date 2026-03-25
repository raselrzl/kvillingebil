"use client";

import BaseSlider from "./BaseSlider";
import { VehicleCardProps } from "./VehicleCard";

export default function HusvagnarSlider({ vehicles }: { vehicles: VehicleCardProps[] }) {
  return <BaseSlider vehicles={vehicles} cardWidthClass="w-[85%] sm:w-[50%]" gap="gap-6" />;
}