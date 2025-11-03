"use client"

import { useState, useEffect } from "react"

export function HeaderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0)
  }

  if (isMobile) {
    return (
      <section className="bg-background text-foreground">
        {/* Foto que ocupa toda la pantalla */}
        <div className="h-screen w-full relative">
          <img
            src="/images/quinceañera-photo.jpg"
            alt="Foto de la quinceañera"
            className="w-full h-full object-cover"
          />

          {/* Indicador de scroll en la parte inferior */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-black/50 text-white px-6 py-3 rounded-full backdrop-blur-sm animate-pulse text-center">
              Desliza hacia abajo ↓
            </div>
          </div>
        </div>

        <div className="bg-black text-white flex items-center justify-center py-12 px-8">
          <div className="text-center space-y-4 w-full max-w-md">
            <div className="text-2xl text-secondary tracking-wider animate-fade-in">29 - 11 - 2025 / 21:30 hs</div>
            <div className="w-full h-px bg-secondary animate-expand"></div>
            <div className="text-6xl font-serif text-secondary tracking-wider animate-fade-in">XV</div>
            <div className="text-4xl font-serif text-secondary tracking-wide animate-fade-in">Guadalupe</div>
            <div className="w-full h-px bg-secondary animate-expand"></div>
            <div className="text-3xl text-secondary tracking-wider animate-fade-in">MIS 15 AÑOS</div>
            <div className="text-2xl text-secondary leading-relaxed px-2 animate-fade-in">
              Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout (unchanged)
  return (
    <section className="bg-background text-foreground relative h-200 flex">
      {/* Left side - Photo space */}
      <div className="w-1/2 relative overflow-hidden pl-4 py-4">
        <img
          src="/images/quinceañera-photo.jpg"
          alt="Foto de la quinceañera"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right side - Invitation details with ornamental design */}
      <div className="w-1/2 relative bg-background flex items-center justify-center p-12">
        <div className="text-center space-y-8 max-w-md">
          <div className="text-muted-foreground text-2xl tracking-wider animate-fade-in">29 - 11 - 2025 / 21:30 hs</div>
          {/* Divider line */}
          <div className="w-full h-px bg-secondary animate-expand"></div>

          <div className="text-9xl font-serif text-secondary tracking-wider animate-fade-in">XV</div>

          <div className="text-7xl font-serif text-secondary tracking-wider animate-fade-in">Guadalupe</div>

          {/* Divider line */}
          <div className="w-full h-px bg-secondary animate-expand"></div>

          <div className="text-3xl text-muted-foreground tracking-wider animate-fade-in">MIS 15 AÑOS</div>

          <div className="text-2xl text-muted-foreground leading-relaxed px-4 animate-fade-in">
            Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
          </div>

        </div>
      </div>
    </section>
  )
}
