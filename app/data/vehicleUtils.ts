import { VehicleCardProps } from "../fordon/VehicleCard";


// VehicleCard.tsx
export interface CarouselVehicle {
  id: string;
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
}

export const getNewVehicles = (vehicles: VehicleCardProps[]): CarouselVehicle[] => {
  return vehicles
    .filter(v => v.isNew)
    .map(v => ({
      id: v.id,
      title: v.title,
      price: v.price,
      image: v.image,
      isNew: v.isNew,
    }));
};

export const getByCategory = (
  vehicles: VehicleCardProps[],
  category: string
) => {
  return vehicles.filter(v => v.category === category);
};