import HeroCarousel from "./HeroCarousel";
import HusbilarSlider from "./HusbilarSlider";
import HusvagnarSlider from "./HusvagnarSlider";
import { CarouselVehicle, VehicleCardProps } from "./VehicleCard";
import VeteranbilarSlider from "./VeteranbilarSlider";

export default function VehiclesPage() {
    const vehicles: VehicleCardProps[] = [
    { id: "1", title: "Kabe Royal Hacienda 1000 TDL", price: "359,000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v1.jpeg", isNew: true, link: "/fordon/1" },
    { id: "2", title: "Kabe IMPERIAL 740 TDL Långbäddar Alko", price: "520 000 kr", details: "5 bäddar, 2.5L Diesel", category: "Husbilar", image: "/car/v2.jpeg", isNew: true, link: "/fordon/2" },
    { id: "3", title: "Solifer S4", price: "95, 000 kr", details: "3 bäddar, 2.0L Diesel", category: "Husbilar", image: "/car/v3.jpg", link: "/fordon/3" },
    { id: "4", title: "Burstner T710", price: "419, 000 kr", details: "4 bäddar, 2.3L Diesel", category: "Husbilar", image: "/car/v4.jpg", link: "/fordon/4" },
    { id: "5", title: "Chausson C636 B-card slots", price: "549, 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v5.jpg", link: "/fordon/5" },
    { id: "6", title: "Cable TM 740 LTD", price: "589, 000 kr", details: "3 bäddar, med kök", category: "Husvagnar", image: "/car/v6.jpg", isNew: true, link: "/fordon/6" },
    { id: "7", title: "Adria Adora 573 PT", price: "329 000 kr", details: "2 bäddar, kompakt modell", category: "Husvagnar", image: "/car/v7.jpg", link: "/fordon/7" },
    { id: "8", title: "Volvo PV444", price: "49, 000 kr", details: "4 bäddar, familjemodell", category: "Veteranbilar", image: "/veteranbilar.jpeg", link: "/fordon/8" },
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
        <h2 className="text-3xl md:text-4xl font-bold text-[#2db1cc] md:text-right mb-4 uppercase" id="husbilar">Husbilar</h2>
        <HusbilarSlider vehicles={vehicles.filter(v => v.category === "Husbilar")} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2db1cc] mb-4 uppercase md:text-right" id="husvagnar">Husvagnar</h2>
        <HusvagnarSlider vehicles={vehicles.filter(v => v.category === "Husvagnar")} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2db1cc] mb-4 uppercase md:text-right" id="vateranbilar">Veteranbilar</h2>
        <VeteranbilarSlider vehicles={vehicles.filter(v => v.category === "Veteranbilar")} />
      </section>
    </div>
  );
}