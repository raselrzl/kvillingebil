import { vehicles } from "../data/vehicles";
import { getByCategory } from "../data/vehicleUtils";
import HusbilarSlider from "./HusbilarSlider";
import HusvagnarSlider from "./HusvagnarSlider";
import NewVehiclesCarousel from "./NewVehiclesCarousel";
import VeteranbilarSlider from "./VeteranbilarSlider";

export default function VehiclesPage() {
  return (
    <>
    {/*   <section className="relative font-inter w-full h-130 sm:h-140 lg:h-170 flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/pcon.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </section> */}
      <div className="font-inter bg-gray-50 min-h-screen space-y-16">
        {/* ✅ NEW VEHICLES CAROUSEL */}
        <NewVehiclesCarousel vehicles={vehicles} />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-[#2db1cc] uppercase md:text-right">
            Husbilar
          </h2>
          <HusbilarSlider vehicles={getByCategory(vehicles, "Husbilar")} />
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-[#2db1cc] uppercase md:text-right">
            Husvagnar
          </h2>
          <HusvagnarSlider vehicles={getByCategory(vehicles, "Husvagnar")} />
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-[#2db1cc] uppercase md:text-right">
            Veteranbilar
          </h2>
          <VeteranbilarSlider
            vehicles={getByCategory(vehicles, "Veteranbilar")}
          />
        </section>
      </div>
    </>
  );
}
