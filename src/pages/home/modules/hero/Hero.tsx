import Colores from "../../../../assets/7-colores.png"
import { FormSearch, Header } from "../../../../components";
import { ArrowLargeIcon } from "@icons";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover pt-4 flex flex-col justify-between px-[120px] text-primary-50"
      style={{ backgroundImage: `url('../bg.png')` }}
    >
      <Header />
      <div className="flex justify-between items-center -mr-[120px]">
        <div>
          <p className="font-black text-6xl">Los Lugares <br /> Más Bellos del Perú</p>
          <p className="text-2xl">Planifica tus vacaciones en los lugares más bellos del Perú</p>
        </div>
        <section className="w-[560px] h-[320px] grid grid-cols-2 gap-10 backdrop-blur-2xl  rounded-l-2xl">
          <div className="flex flex-col w-full p-6 justify-between h-full">
            <small className="text-xl">Cusco</small>
            <p className="text-2xl text-pretty">La montaña 7 colores</p>
            <ArrowLargeIcon className="size-10 hover:cursor-pointer hover:text-primary-500 transition-colors" />
          </div>
          <div className="h-full">
            <img src={Colores} alt="montaña de 7 colores" className="object-cover h-full w-full" />
          </div>
        </section>
      </div >
      <section>
        <FormSearch />
      </section>
    </section>
  )
}
