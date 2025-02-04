import { useState, useEffect } from "react";
export default function CarouselComponent({ slides }) {
  let [current, setCurrent] = useState(0);

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [current]); // Se actualiza cuando cambia el slid

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-1000`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((source) => {
          return <img src={source} />;
        })}
      </div>
    </div>
  );
}