import { Colores, Cusco ,Ica ,Selva} from "../../../../../assets";
import { BoxImage } from "./BoxImage";

export function Carousel() {
  const images = [
    Ica,Colores, Cusco ,Selva,Ica , Colores, Cusco, Selva, Ica, Cusco,Colores, Selva ,Colores, Cusco,Ica
  ]

  return (
    <div id="carrusel" className='overflow-hidden w-full'>
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
