"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/"); // or your backend URL
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Hero Section (same style as your site) */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest font-julius">
            404
          </h1>
          <div className="w-20 h-1 bg-[#47d7ac] mx-auto mt-4 rounded-full" />
          <h2 className="mt-6 text-xl md:text-2xl font-semibold">
            Sidan kunde inte hittas
          </h2>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl w-full text-center space-y-6"
        >
          <p className="text-gray-600 text-xs leading-relaxed">
            Sidan du letar efter finns inte eller har flyttats.  
            Du kan gå tillbaka till startsidan eller fortsätta utforska vår webbplats.
          </p>

          {/* Card style button (matching your UI blocks) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRedirect}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition shadow-md"
            >
              Till startsidan
            </button>

            <button
              onClick={() => router.back()}
              className="px-8 py-3 border border-[#47d7ac] rounded-full hover:border-[#47d7ac] hover:text-[#47d7ac] transition"
            >
              Gå tillbaka
            </button>
          </div>

       
        </motion.div>
      </section>
    </div>
  );
}