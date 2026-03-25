"use client";
import Image from "next/image";
import Link from "next/link";

export interface VehicleCardProps {
  id: string;
  title: string;
  price: string;
  details?: string;
  image: string;
  isNew?: boolean;
  link?: string;
  category?: string;
}


// Hero carousel vehicle type
export interface CarouselVehicle {
  id: string;
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
}

// Vehicle Card
const VehicleCard: React.FC<VehicleCardProps> = ({ title, price, image, isNew, link }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition cursor-pointer group h-80 md:h-96">
      <Image src={image} alt={title} fill className="object-cover w-full h-full rounded-xl" />
      <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/10" />
      <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 shadow-md">
        <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
        <p className="text-[#2db1cc] font-semibold text-md md:text-lg">{price}</p>
      </div>
      {isNew && (
        <span className="absolute top-4 right-4 bg-linear-to-r from-[#2db1cc] to-[#36b795] text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
          NY
        </span>
      )}
      {link && (
        <div className="absolute bottom-4 right-4">
          <Link href={link}>
            <button className="bg-[#2db1cc] hover:bg-[#36b795] text-white px-2 py-1 rounded-lg font-semibold text-xs shadow-md transition">
              Read More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;