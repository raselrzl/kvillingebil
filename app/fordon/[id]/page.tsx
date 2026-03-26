"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const vehicleData = [
  { id: "1", title: "Kabe Royal Hacienda 1000 TDL", price: "359,000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v1.jpeg", isNew: true, link: "/fordon/1" },
    { id: "2", title: "Kabe IMPERIAL 740 TDL Långbäddar Alko", price: "520 000 kr", details: "5 bäddar, 2.5L Diesel", category: "Husbilar", image: "/car/v2.jpeg", isNew: true, link: "/fordon/2" },
    { id: "3", title: "Solifer S4", price: "95, 000 kr", details: "3 bäddar, 2.0L Diesel", category: "Husbilar", image: "/car/v3.jpg", link: "/fordon/3" },
    { id: "4", title: "Burstner T710", price: "419, 000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v4.jpg", link: "/fordon/4" },
    { id: "5", title: "Chausson C636 B-card slots", price: "549, 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v5.jpg", link: "/fordon/5" },
    { id: "6", title: "Cable TM 740 LTD", price: "589, 000 kr", details: "3 bäddar, med kök", category: "Husvagnar", image: "/car/v6.jpg", isNew: true, link: "/fordon/6" },
    { id: "7", title: "Adria Adora 573 PT", price: "329 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v7.jpg", link: "/fordon/7" },
    { id: "8", title: "Volvo PV444", price: "49, 000 kr", details: "4 bäddar, familjemodell", category: "Veteranbilar", image: "/veteranbilar.jpeg", link: "/fordon/8" },
    ];

export default function VehicleDetailPage() {
  const params = useParams();
  const vehicle = vehicleData.find((v) => v.id === params.id);

  if (!vehicle)
    return <p className="text-center py-12 text-gray-500 text-lg">Vehicle not found</p>;

  return (
    <div className="font-inter min-h-screen bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/fordon"
          className="text-[#2db1cc] font-semibold hover:underline inline-block mb-6 transition-colors duration-300"
        >
          ← Tillbaka till fordon
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-125 md:h-150 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={vehicle.image}
            alt={vehicle.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          {/* New badge */}
          {vehicle.isNew && (
            <span className="absolute top-6 right-6 bg-linear-to-r from-[#2db1cc] to-[#36b795] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              NY
            </span>
          )}
        </div>

        {/* Vehicle info */}
        <div className="mt-10 md:flex md:justify-between md:items-start md:space-x-16">
          <div className="space-y-5 md:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {vehicle.title}
            </h1>
            <p className="text-[#2db1cc] font-extrabold text-3xl md:text-4xl">
              {vehicle.price}
            </p>
            <p className="text-gray-700 text-lg md:text-xl">{vehicle.details}</p>
          </div>

          {/* Call-to-action */}
          <div className="mt-6 md:mt-0 flex flex-col space-y-4">
            <Link
              href="/kontakt"
              className="bg-linear-to-r from-[#2db1cc] to-[#36b795] text-white font-semibold px-8 py-4 rounded-xl shadow-xl text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        {/* Optional: premium details or features section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="font-bold text-lg mb-2">Top Performance</h3>
            <p className="text-gray-600">Engine and drive optimized for smooth handling and comfort.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="font-bold text-lg mb-2">Luxury Interiors</h3>
            <p className="text-gray-600">Premium materials and finishes for an elegant driving experience.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="font-bold text-lg mb-2">Advanced Safety</h3>
            <p className="text-gray-600">Modern safety systems ensuring protection and peace of mind.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}