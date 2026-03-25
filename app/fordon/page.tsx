import HeroCarousel from "./HeroCarousel";
import HusbilarSlider from "./HusbilarSlider";
import HusvagnarSlider from "./HusvagnarSlider";
import { CarouselVehicle, VehicleCardProps } from "./VehicleCard";
import VeteranbilarSlider from "./VeteranbilarSlider";

export default function VehiclesPage() {
    const vehicles: VehicleCardProps[] = [
    { id: "1", title: "Husbilar 1", price: "500 000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v1.jpeg", isNew: true, link: "/fordon/1" },
    { id: "2", title: "Husbilar 2", price: "520 000 kr", details: "5 bäddar, 2.5L Diesel", category: "Husbilar", image: "/car/v2.jpeg", isNew: true, link: "/fordon/2" },
    { id: "3", title: "Husbilar 3", price: "480 000 kr", details: "3 bäddar, 2.0L Diesel", category: "Husbilar", image: "/car/v3.jpg", link: "/fordon/3" },
    { id: "4", title: "Husbilar 4", price: "510 000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v4.jpg", link: "/fordon/4" },
    { id: "5", title: "Husvagnar 1", price: "300 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v5.jpg", link: "/fordon/5" },
    { id: "6", title: "Husvagnar 2", price: "320 000 kr", details: "3 bäddar, med kök", category: "Husvagnar", image: "/car/v6.jpg", isNew: true, link: "/fordon/6" },
    { id: "7", title: "Husvagnar 3", price: "280 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v7.jpg", link: "/fordon/7" },
    { id: "8", title: "Husvagnar 4", price: "350 000 kr", details: "4 bäddar, familjemodell", category: "Husvagnar", image: "/car/v8.jpg", link: "/fordon/8" },
    { id: "9", title: "Veteranbilar 1", price: "750 000 kr", details: "Classic 1965, restaurerad", category: "Veteranbilar", image: "/car/v10.jpeg", link: "/fordon/9" },
    { id: "10", title: "Veteranbilar 2", price: "800 000 kr", details: "Classic 1970, limited edition", category: "Veteranbilar", image: "/car/v10.jpeg", link: "/fordon/10" },
    { id: "11", title: "Veteranbilar 3", price: "700 000 kr", details: "Classic 1960, fully restored", category: "Veteranbilar", image: "/car/v11.jpeg", link: "/fordon/11" },
    { id: "12", title: "Veteranbilar 4", price: "900 000 kr", details: "Classic 1975, mint condition", category: "Veteranbilar", image: "/car/v12.jpg", isNew: true, link: "/fordon/12" },
  ];

  const newVehicles: CarouselVehicle[] = vehicles.filter(v => v.isNew).map(v => ({
    id: v.id,
    title: v.title,
    price: v.price,
    image: v.image,
    isNew: v.isNew,
  }));

  return (
    <div className="font-inter bg-gray-50 min-h-screen space-y-16">
      <HeroCarousel vehicles={newVehicles} />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800" id="husbilar">Husbilar</h2>
        <HusbilarSlider vehicles={vehicles.filter(v => v.category === "Husbilar")} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800" id="husvagnar">Husvagnar</h2>
        <HusvagnarSlider vehicles={vehicles.filter(v => v.category === "Husvagnar")} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800" id="vateranbilar">Veteranbilar</h2>
        <VeteranbilarSlider vehicles={vehicles.filter(v => v.category === "Veteranbilar")} />
      </section>
    </div>
  );
}