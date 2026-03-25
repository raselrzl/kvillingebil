"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const vehicleData = [
  { id: "1", title: "Husbilar 1", price: "500 000 kr", details: "4 bäddar, 2.3L Diesel", image: "/car/v1.jpeg", isNew: true },
  { id: "2", title: "Husbilar 2", price: "520 000 kr", details: "5 bäddar, 2.5L Diesel", image: "/car/v2.jpeg", isNew: true },
  { id: "3", title: "Husbilar 3", price: "480 000 kr", details: "3 bäddar, 2.0L Diesel", image: "/car/v3.jpg" },
  { id: "4", title: "Husbilar 4", price: "510 000 kr", details: "4 bäddar, 2.3L Diesel", image: "/car/v4.jpg" },
  { id: "5", title: "Husvagnar 1", price: "300 000 kr", details: "2 bäddar, kompakt modell", image: "/car/v5.jpg" },
  { id: "6", title: "Husvagnar 2", price: "320 000 kr", details: "3 bäddar, med kök", image: "/car/v6.jpg", isNew: true },
  { id: "7", title: "Husvagnar 3", price: "280 000 kr", details: "2 bäddar, kompakt modell", image: "/car/v7.jpg" },
  { id: "8", title: "Husvagnar 4", price: "350 000 kr", details: "4 bäddar, familjemodell", image: "/car/v8.jpg" },
  { id: "9", title: "Veteranbilar 1", price: "750 000 kr", details: "Classic 1965, restaurerad", image: "/car/v10.jpeg" },
  { id: "10", title: "Veteranbilar 2", price: "800 000 kr", details: "Classic 1970, limited edition", image: "/car/v10.jpeg" },
  { id: "11", title: "Veteranbilar 3", price: "700 000 kr", details: "Classic 1960, fully restored", image: "/car/v11.jpeg" },
  { id: "12", title: "Veteranbilar 4", price: "900 000 kr", details: "Classic 1975, mint condition", image: "/car/v12.jpg", isNew: true },
];

export default function VehicleDetailPage() {
  const params = useParams();
  const vehicle = vehicleData.find((v) => v.id === params.id);

  if (!vehicle) return <p className="text-center py-12">Vehicle not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-12 font-inter mt-20">
      <Link href="/fordon" className="text-[#2db1cc] underline mb-6 inline-block">← Tillbaka till fordon</Link>

      <div className="relative w-full h-72 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <Image src={vehicle.image} alt={vehicle.title} fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/30" />
        {vehicle.isNew && (
          <span className="absolute top-3 right-3 bg-[#2db1cc] text-white text-xs font-bold px-2 py-1 rounded-full">
            NY
          </span>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{vehicle.title}</h1>
        <p className="text-[#2db1cc] font-bold text-xl">{vehicle.price}</p>
        <p className="text-gray-700">{vehicle.details}</p>
      </div>
    </div>
  );
}