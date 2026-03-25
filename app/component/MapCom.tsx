"use client";

export default function MapCom() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 space-y-6">

        {/* Map Container */}
        <div className="relative w-full h-100 overflow-hidden shadow-lg">
          
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps?q=LIDA%201,%20605%2099%20Norrk%C3%B6ping&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

          {/* Address Overlay */}
          <div className="absolute top-14 left-2 bg-white/90 backdrop-blur-md px-4 py-3 shadow-md max-w-xs">
            <p className="text-sm font-semibold text-gray-800">
              Kvillinge Bil AB
            </p>
            <p className="text-xs text-gray-600">
              LIDA 1<br />
              605 99 Norrköping
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}