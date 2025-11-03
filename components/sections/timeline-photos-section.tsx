import { PhotoCarouselSection } from "./photo-carousel-section"

export function TimelinePhotosSection() {
  const photos = [
    {
      src: "/images/timeline/timeline-1.jpg", // Reemplaza con la foto de 1 año
      alt: "Foto de 1 año",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-2.jpg", // Reemplaza con la foto de 2 años
      alt: "Foto de 2 años",    
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-3.jpg", // Reemplaza con la foto de 3 años
      alt: "Foto de 3 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-4.jpg", // Reemplaza con la foto de 4 años
      alt: "Foto de 4 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-5.jpg", // Reemplaza con la foto de 5 años
      alt: "Foto de 5 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-6.jpg", // Reemplaza con la foto de 6 años
      alt: "Foto de 6 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-7.jpg", // Reemplaza con la foto de 7 años
      alt: "Foto de 7 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-8.jpg", // Reemplaza con la foto de 8 años
      alt: "Foto de 8 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-9.jpg", // Reemplaza con la foto de 9 años
      alt: "Foto de 9 años",
      aspectRatio: "3/2" as const,  
    },
    {
      src: "/images/timeline/timeline-10.jpg", // Reemplaza con la foto de 10 años
      alt: "Foto de 10 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-11.jpg", // Reemplaza con la foto de 11 años
      alt: "Foto de 11 años",
      aspectRatio: "3/2" as const,
    },
    {
      src: "/images/timeline/timeline-12.jpg", // Reemplaza con la foto de 12 años
      alt: "Foto de 12 años",
      aspectRatio: "3/2" as const,
    },
    // {
    //   src: "/images/timeline/13-anos.jpg", // Reemplaza con la foto de 13 años
    //   alt: "Foto de 13 años",
    //   caption: "13 años",
    // },
    // {
    //   src: "/images/timeline/14-anos.jpg", // Reemplaza con la foto de 14 años
    //   alt: "Foto de 14 años",
    //   caption: "14 años",
    // },
    // {
    //   src: "/images/timeline/15-anos.jpg", // Reemplaza con la foto de 15 años
    //   alt: "Foto de 15 años",
    //   caption: "15 años",
    // },
  ]

  return <PhotoCarouselSection title="Un viaje al pasado" photos={photos} />
}
