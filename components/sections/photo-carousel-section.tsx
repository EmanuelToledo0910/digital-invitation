"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PhotoCarouselSectionProps {
  title: string
  photos: Array<{
    src: string
    alt: string
    caption?: string
    aspectRatio?: "3/2" | "16/9" | "4/3" | "1/1"
  }>
}

export function PhotoCarouselSection({ title, photos }: PhotoCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
  }

  const currentAspectRatio = photos[currentIndex].aspectRatio || "4/3"
  const aspectRatioClass = `aspect-[${currentAspectRatio.replace("/", "/")}]`

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-yellow-600 text-center mb-8 md:mb-12">{title}</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image */}
          <div className={`relative ${aspectRatioClass} overflow-hidden rounded-2xl bg-gray-900`}>
            <img
              src={photos[currentIndex].src || "/placeholder.svg"}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-600 p-2 md:p-3 rounded-full transition-all backdrop-blur-sm"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-600 p-2 md:p-3 rounded-full transition-all backdrop-blur-sm"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-600 font-medium text-sm md:text-base">
                {currentIndex + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Caption */}
          {photos[currentIndex].caption && (
            <div className="text-center mt-4">
              <p className="text-yellow-600 text-xl md:text-2xl font-serif">{photos[currentIndex].caption}</p>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-yellow-600 w-8" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid (visible on larger screens) */}
        <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-6 gap-3 mt-8">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-yellow-600 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
