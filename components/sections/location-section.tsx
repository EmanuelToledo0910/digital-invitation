"use client";

import { useState, useEffect } from "react";
import RSVPModal from "../rsvp-modal";
import MapModal from "../map-modal";

export default function LocationSection() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const buttonClass =
    "w-full md:w-[200px] bg-yellow-600 text-black px-8 py-4 text-lg rounded-xl font-semibold hover:bg-yellow-500 transition-colors mx-auto";

  // 👉 Acá podés ajustar los tamaños móviles
  const mobileTitle = "text-5xl";
  const mobileSubtitle = "text-2xl";

  if (isMobile) {
    // 📱 Vista móvil
    return (
      <>
        <section className="py-16 bg-black text-yellow-600 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full space-y-6">
            {/* Lugar */}
            <div className="rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center">
              <h2 className={`${mobileTitle} font-serif mb-4`}>Lugar</h2>
              <p className={`${mobileSubtitle} font-light mb-6`}>Salon Avanti</p>
              <button onClick={() => setIsRSVPModalOpen(true)} className={buttonClass}>
                Confirmar Asistencia
              </button>
            </div>

            {/* Dirección */}
            <div className="rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center">
              <h2 className={`${mobileTitle} font-serif mb-4`}>Dirección</h2>
              <p className={`${mobileSubtitle} font-light mb-6`}>Acceso Hipolito Irigoyen 1097</p>
              <button onClick={() => setIsMapModalOpen(true)} className={buttonClass}>
                ¿Cómo puedo llegar?
              </button>
            </div>

            {/* Música */}
            <div className="rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center">
              <h2 className={`${mobileTitle} font-serif mb-4`}>Música</h2>
              <p className={`${mobileSubtitle} font-light mb-6`}>¿Qué tema te gustaría?</p>
              <button
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/playlist/2NG6LrRFEKNxLPhY0XET8n?si=rvlr6aj3SD2WmPYyWSGjaA&pt=59a1694f0ff64ffc9976de0c6088c795&pi=ujKdnJtIR1qhL"
                  )
                }
                className={buttonClass}
              >
                Agregar canción
              </button>
            </div>
          </div>
        </section>

        <RSVPModal isOpen={isRSVPModalOpen} onClose={() => setIsRSVPModalOpen(false)} />
        <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
      </>
    );
  }

  // 💻 Vista escritorio
  return (
    <>
      <section className="py-16 bg-black text-yellow-600 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Lugar */}
            <div className="relative rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center flex flex-col justify-between">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif">Lugar</h2>
                <p className="text-xl md:text-2xl font-light">Salon Avanti</p>
              </div>
              <div className="mt-auto pt-6">
                <button onClick={() => setIsRSVPModalOpen(true)} className={buttonClass}>
                  Confirmar Asistencia
                </button>
              </div>
            </div>

            {/* Dirección */}
            <div className="relative rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Dirección</h2>
                <p className="text-xl md:text-2xl font-light">Acceso Hipolito Irigoyen 1097</p>
              </div>
              <div className="mt-auto pt-6">
                <button onClick={() => setIsMapModalOpen(true)} className={buttonClass}>
                  ¿Cómo puedo llegar?
                </button>
              </div>
            </div>

            {/* Música */}
            <div className="relative rounded-2xl border-4 border-yellow-600 p-6 shadow-lg bg-black text-center flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Música</h2>
                <p className="text-xs md:text-2xl font-light">¿Qué tema te gustaría?</p>
              </div>
              <div className="mt-auto pt-6">
                <button
                  onClick={() =>
                    window.open(
                      "https://open.spotify.com/playlist/2NG6LrRFEKNxLPhY0XET8n?si=de98c109ea8c468f",
                      "_blank"
                    )
                  }
                  className={buttonClass}
                >
                  Agregar canción
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RSVPModal isOpen={isRSVPModalOpen} onClose={() => setIsRSVPModalOpen(false)} />
      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
    </>
  );
}