"use client";

import { getNewVehicles } from "../data/vehicleUtils";
import HeroCarousel from "./HeroCarousel";
import { VehicleCardProps } from "./VehicleCard";

export default function NewVehiclesCarousel({
  vehicles,
}: {
  vehicles: VehicleCardProps[];
}) {
  const newVehicles = getNewVehicles(vehicles);

  if (!newVehicles.length) return null;

  return <HeroCarousel vehicles={newVehicles} />;
}