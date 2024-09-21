import { Colores, Cusco } from "../../../../../assets";
import { BoxImage } from "./BoxImage";

export function Carousel() {
  const images = [
    Colores, Cusco, Colores, Cusco, Colores, Cusco, Cusco, Colores, Cusco, Colores, Cusco
  ]

  return (
    <div className='overflow-hidden w-full'>
      <div className='flex whitespace-nowrap animate-scroll'>
        {
          images.map((img, index) => (
            <BoxImage key={index} src={img} alt={img.toString()} />
          ))
        }
      </div>
    </div>
  );
}
