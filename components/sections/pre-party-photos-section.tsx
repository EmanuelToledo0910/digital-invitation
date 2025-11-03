import { PhotoCarouselSection } from "./photo-carousel-section"

export function PrePartyPhotosSection() {
  const photos = [
    {
      src: "/images/preparativos/preparativos-1.jpg", // Reemplaza con el enlace de la foto 1 de preparativos
      alt: "Postal previa a la fiesta 1",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-2.jpg", // Reemplaza con el enlace de la foto 2 de preparativos
      alt: "Postal previa a la fiesta 2",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-3.jpg", // Reemplaza con el enlace de la foto 3 de preparativos
      alt: "Postal previa a la fiesta 3",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-4.jpg", // Reemplaza con el enlace de la foto 4 de preparativos
      alt: "Postal previa a la fiesta 4",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-5.jpg", // Reemplaza con el enlace de la foto 5 de preparativos
      alt: "Postal previa a la fiesta 5",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-6.jpg", // Reemplaza con el enlace de la foto 6 de preparativos
      alt: "Postal previa a la fiesta 6",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-7.jpg", // Reemplaza con el enlace de la foto 7 de preparativos
      alt: "Postal previa a la fiesta 7",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-8.jpg", // Reemplaza con el enlace de la foto 8 de preparativos
      alt: "Postal previa a la fiesta 8",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/preparativos/preparativos-9.jpg", // Reemplaza con el enlace de la foto 9 de preparativos
      alt: "Postal previa a la fiesta 9",
      aspectRatio: "3/2" as const,
    },
    { 
      src: "/images/preparativos/preparativos-10.jpg", // Reemplaza con el enlace de la foto 10 de preparativos
      alt: "Postal previa a la fiesta 10",
      aspectRatio: "16/9" as const,
    },
  ]

  return <PhotoCarouselSection title="Algunas postales previas a la fiesta" photos={photos} />
}
