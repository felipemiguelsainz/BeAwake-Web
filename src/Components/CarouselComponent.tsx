import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function CarouselComponent({
  images,
  autoPlay = false,
  showButtons = false,
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animClass, setAnimClass] = useState<string>("");

  // Efecto para animar la imagen al cambiar
  useEffect(() => {
    // Establece la clase inicial según la dirección
    setAnimClass(direction === "next" ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10");

    // Después de un breve retardo, activa la transición
    const timer = setTimeout(() => {
      setAnimClass("opacity-100 translate-x-0 transition-all duration-500");
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedIndex, direction]);

  // Función para ir a la imagen siguiente
  const nextImage = () => {
    setDirection("next");
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setDirection("prev");
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Efecto para autoplay (cambia de imagen cada 5 segundos)
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, selectedIndex]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-3/4 md:w-full md:h-96 md:overflow-hidden relative">
        <img
          src={images[selectedIndex]}
          alt={`Slide ${selectedIndex}`}
          className={`w-full h-full object-cover ${animClass}`}
        />
      </div>
{/*       {showButtons && (
        <div className="flex gap-4 mt-4">
          <button onClick={prevImage} className="px-4 py-2 bg-pink-500 text-white rounded">
            Prev
          </button>
          <button onClick={nextImage} className="px-4 py-2 bg-pink-500 text-white rounded">
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
