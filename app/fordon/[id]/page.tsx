"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HusvagnarSlider from "../HusvagnarSlider";
import HusbilarSlider from "../HusbilarSlider";
import { getByCategory } from "@/app/data/vehicleUtils";
import { vehicles } from "@/app/data/vehicles";

type VehicleCardProps = {
  id: string;
  title: string;
  price: string;
  details: string;
  category: string;
  image: string;
  isNew?: boolean;
  link: string;
};

export default function VehicleDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) {
    return (
      <p className="text-center py-12 text-gray-500 text-lg">Vehicle not found</p>
    );
  }

  const vehicle: VehicleCardProps | undefined = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <p className="text-center py-12 text-gray-500 text-lg">Vehicle not found</p>
    );
  }

  const relatedVehicles = getByCategory(vehicles, vehicle.category).filter(
    (v) => v.id !== vehicle.id
  );

  const renderSlider = () => {
    switch (vehicle.category) {
      case "Husbilar":
        return <HusbilarSlider vehicles={relatedVehicles} />;
      case "Husvagnar":
        return <HusvagnarSlider vehicles={relatedVehicles} />;
      default:
        return null;
    }
  };

  // ✅ Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3)); // zoom 1x to 3x
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <div className="h-20 sm:h-24 bg-black" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          href="/fordon"
          className="text-[#2db1cc] font-semibold hover:underline inline-block mb-6 transition-colors duration-300"
        >
          ← Tillbaka till fordon
        </Link>

        {/* Vehicle image with click-to-open modal */}
        <div
          className="relative w-full h-125 md:h-150 rounded-sm overflow-hidden shadow-2xl cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={vehicle.image}
            alt={vehicle.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
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

          <div className="mt-6 md:mt-0 flex flex-col space-y-4">
            <Link
              href="/kontakt"
              className="bg-linear-to-r from-[#2db1cc] to-[#36b795] text-white font-semibold px-8 py-4 rounded-xl shadow-xl text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        {relatedVehicles.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2db1cc] uppercase md:text-right">
              Se mer
            </h2>
            {renderSlider()}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
              onClick={() => {
                setIsModalOpen(false);
                setZoom(1);
              }}
            >
              ×
            </button>
            <motion.div
              className="relative"
              style={{ scale: zoom }}
              onWheel={handleWheel}
            >
              <Image
                src={vehicle.image}
                alt={vehicle.title}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}