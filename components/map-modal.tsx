"use client"

import { X, MapPin } from "lucide-react"

interface MapModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null

  const handleAmpliarMapa = () => {
    window.open("https://maps.app.goo.gl/maaACdLeXwjnAz9p9", "_blank")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-black rounded-3xl p-8 max-w-lg w-full mx-4 shadow-2xl border-4 border-yellow-600">
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-600 rounded-full"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
              <MapPin size={32} className="text-black" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-serif text-yellow-600 mb-2">Cómo llegar a la Fiesta</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-yellow-600 flex-1"></div>
              <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              <div className="h-px bg-yellow-600 flex-1"></div>
            </div>
          </div>

          {/* Map iframe */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-inner border-2 border-yellow-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.896803240561!2d-60.4506707894795!3d-34.63204805888062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b925dce98eeb5f%3A0xf0d3d48eac63aa97!2sAvanti%20sal%C3%B3n%20de%20eventos!5e0!3m2!1ses!2sar!4v1761771775905!5m2!1ses!2sar"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Ampliar mapa button */}
          <button
            onClick={handleAmpliarMapa}
            className="bg-yellow-600 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors w-full"
          >
            Ampliar mapa
          </button>
        </div>
      </div>
    </div>
  )
  
}

