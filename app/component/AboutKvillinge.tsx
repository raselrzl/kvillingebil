import Image from "next/image";

export default function AboutKvillinge() {
  return (
    <section className="w-full bg-[#eeebe5]">
      <div className=" mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 text-[#4d5946] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#4d5946]/60 mb-4">
              om kvillinge bil
            </p>

            <h2 className="text-2xl md:text-4xl font-light mb-6 leading-snug">
              Vi brinner för fordon och människor.
            </h2>

            <p className="text-sm md:text-base text-[#4d5946]/80 leading-relaxed">
              Kvillinge Bil är ett familjeföretag med långsiktiga relationer.
              Vi hjälper dig genom hela affären – från första kontakt till ditt
              nästa äventyr.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-[260px] md:h-[360px] overflow-hidden">
              <Image
                src="/img/im4.jpg"
                alt="Kvillinge Bil"
                width={1000}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}