import Colores from "../../../../assets/7-colores.png"
import { Container, ContainerBgHeader, FormSearch, Header } from "../../../../components";
import { ArrowLargeIcon } from "@icons";

export default function Hero() {
  return (
    <ContainerBgHeader className="h-dvh relative">
      <Container className="justify-between h-full text-primary-50 pt-4">
        <Header />
        <div className=" flex flex-col md:flex-row justify-between gap-12 items-center">
          <div className="">
            <p className="font-black text-center md:text-start text-4xl lg:text-6xl">Los Lugares <br /> Más Bellos del Perú</p>
            <p className="text-xl lg:text-2xl ">Planifica tus vacaciones en los lugares más bellos del Perú</p>
          </div>
          <section className="absolute right-0 w-[560px] h-[320px] grid grid-cols-2 gap-10 backdrop-blur-2xl rounded-2xl md:rounded-l-2xl">
            <div className="flex flex-col w-full p-6 justify-between h-full">
              <small className="text-xl">Cusco</small>
              <p className="text-2xl text-pretty">La montaña 7 colores</p>
              <ArrowLargeIcon className="size-10 hover:cursor-pointer hover:text-primary-500 transition-colors" />
            </div>
            <div className="h-full">
              <img src={Colores} alt="montaña de 7 colores" className="object-cover h-full w-full rounded-r-2xl md:rounded-none" />
            </div>
          </section>
        </div >
        <section>
          <FormSearch />
        </section>
      </Container>
    </ContainerBgHeader>
  )
}
