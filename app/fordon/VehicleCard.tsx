"use client";
import Image from "next/image";
import Link from "next/link";

export type VehicleCardProps = {
  id: string;
  title: string;
  price: string;
  details: string;
  category: string;
  image: string;
  isNew?: boolean;
  link: string;
  images?: string[];

  // Add these optional
  description?: string;
  specs?: Record<string, string>; // object with key/value pairs
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  title,
  price,
  image,
  isNew,
  link,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition cursor-pointer group h-100 md:h-110">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full rounded-sm"
      />
      <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/10" />
      
      <div className="absolute bottom-4 left-4 bg-black/40 rounded-sm px-4 py-2 shadow-md">
        <h3 className="text-white text-sm">{title}</h3>
        <p className="text-[#2db1cc] text-xl font-extrabold">{price}</p>
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
              Se detaljer
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;