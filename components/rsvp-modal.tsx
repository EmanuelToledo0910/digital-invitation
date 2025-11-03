import { X } from "lucide-react";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-black rounded-3xl p-8 max-w-3xl w-full mx-4 shadow-2xl border-4 border-yellow-600 h-[80vh] my-6 overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-600 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-600 rounded-full"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-500 transition-colors"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center space-y-6 h-full flex flex-col">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-serif text-yellow-600 mb-2">Confirmá tu Asistencia</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-yellow-600 flex-1"></div>
              <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              <div className="h-px bg-yellow-600 flex-1"></div>
            </div>
          </div>

          {/* Form iframe */}
          <div className="flex-grow overflow-hidden rounded-lg border-2 border-yellow-600">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeSgRyaHaz4BLgrVOEgl2dxjrqHd7_YhCOFa03C1hkD70sPjQ/viewform?embedded=true"
              width="100%"
              height="100%"
              style={{ backgroundColor: "white", border: "none" }}
              allowFullScreen
              loading="lazy"
              title="Formulario de Confirmación"
              sandbox="allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}