import Colores from "../../../../assets/7-colores.png"
import { Container, ContainerBgHeader, FormSearch, Header } from "../../../../components";
import { ArrowLargeIcon } from "@icons";

export default function Hero() {
  return (
    <ContainerBgHeader className="h-dvh relative">
      <Container className="justify-between h-full text-primary-50 pt-4">
        <Header />
        <div className="flex py-20 flex-col md:flex-row flex-1 justify-between gap-12 items-center">
          <div className="">
            <p className="font-black text-center md:text-start text-4xl lg:text-6xl img-thumbnail animate__animated animate__zoomIn">Los lugares <br /> más bellos del Perú</p>
            <p className="text-xl lg:text-2xl text-center md:text-start ">Planifica tus vacaciones en los lugares más bellos del Perú</p>
          </div>
          {/*Card*/}
          <section className="md:absolute  right-0 w-[560px] h-auto md:min-h-[320px] grid grid-cols-2 gap-10 backdrop-blur-2xl rounded-2xl md:rounded-l-2xl">
            <div className="flex flex-col w-full p-6 justify-between">
              <small className="text-xl">Cusco</small>
              <p className="text-2xl text-pretty">La montaña 7 colores</p>
              <ArrowLargeIcon className="size-10 hover:cursor-pointer hover:text-primary-500 transition-colors" />
            </div>
            <div className="h-full">
              <img src={Colores} alt="montaña de 7 colores" className="object-cover h-full w-full rounded-r-2xl md:rounded-none" />
            </div>
          </section>
        </div >
        <section className="">
          <FormSearch />
        </section>
      </Container>
    </ContainerBgHeader>
  )
}
