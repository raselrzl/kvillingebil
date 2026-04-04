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
import { VehicleCardProps } from "../VehicleCard";

export default function VehicleDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id)
    return (
      <p className="text-center py-12 text-gray-500 text-lg">
        Fordon hittades inte
      </p>
    );

  const vehicle: VehicleCardProps | undefined = vehicles.find(
    (v) => v.id === id,
  );

  if (!vehicle)
    return (
      <p className="text-center py-12 text-gray-500 text-lg">
        Fordon hittades inte
      </p>
    );

  const images = vehicle.images || [vehicle.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const relatedVehicles = getByCategory(vehicles, vehicle.category).filter(
    (v) => v.id !== vehicle.id,
  );

  const renderSlider = () => {
    if (vehicle.category === "Husbilar")
      return <HusbilarSlider vehicles={relatedVehicles} />;
    if (vehicle.category === "Husvagnar")
      return <HusvagnarSlider vehicles={relatedVehicles} />;
    return null;
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  const nextImage = () => {
    const index = images.indexOf(selectedImage);
    setSelectedImage(images[(index + 1) % images.length]);
  };

  const prevImage = () => {
    const index = images.indexOf(selectedImage);
    setSelectedImage(images[(index - 1 + images.length) % images.length]);
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <div className="h-20 sm:h-24 bg-black" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          href="/fordon"
          className="text-gray-100 px-2 py-0.5 hover:underline mb-6 inline-block bg-[#2db1cc]"
        >
          ← Tillbaka till fordon
        </Link>

        {/* Main Image */}
        <div
          className="relative w-full h-125 md:h-150 overflow-hidden shadow-2xl cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={selectedImage}
            alt={vehicle.title}
            loading="eager"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          {vehicle.isNew && (
            <span className="absolute top-6 right-6 bg-linear-to-r from-black to-[#2db1cc] text-white px-6 py-1 rounded-full text-xl font-bold">
              NY
            </span>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 mt-4 flex-wrap">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className={`relative w-10 h-10 overflow-hidden cursor-pointer border-2 ${selectedImage === img ? "border-[#2db1cc]" : "border-transparent"}`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-10 md:flex md:justify-between md:items-start md:space-x-16">
          <div className="space-y-5 md:flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {vehicle.title}
            </h1>
            <p className="text-[#2db1cc] font-extrabold text-3xl">
              {vehicle.price}
            </p>
            <p className="text-gray-700 text-lg">{vehicle.details}</p>
            {vehicle.description && (
              <p className="mt-4 text-gray-600">{vehicle.description}</p>
            )}

            {/* Specs */}
            {vehicle.specs && (
              <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {Object.entries(vehicle.specs).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between items-center bg-white/80 backdrop-blur-md px-4 py-3 shadow-sm shadow-[#2db1cc] hover:shadow-md transition"
                  >
                    <span className="text-gray-500 text-xs md:text-sm capitalize">
                      {key}
                    </span>

                    <span className="text-gray-900 font-semibold text-xs md:text-sm text-right">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/kontakt"
              className="bg-linear-to-r from-black to-[#2db1cc] text-white px-8 py-4 rounded-full shadow-xl font-semibold hover:shadow-2xl"
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        {/* Related */}
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => {
                setIsModalOpen(false);
                setZoom(1);
              }}
            >
              ×
            </button>
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>
            <motion.div
              style={{ scale: zoom }}
              onWheel={handleWheel}
              className="relative"
            >
              <Image
                src={selectedImage}
                alt={vehicle.title}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
