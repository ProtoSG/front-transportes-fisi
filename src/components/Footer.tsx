import { Logo } from "../assets";
import { FacebookIcon, IntagramIcon, YoutubeIcon } from "../icons";

export function Footer() {
  return (
    <footer className="bg-primary-500 h-56 mt-12 flex items-center px-[40px] md:px-[80px] lg:px-[120px] text-primary-50 justify-between">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <p className="text-3xl font-black">Transportes FISI</p>
      </div>
      <div>
        <p className="font-bold text-xl mb-4">Siguenos</p>
        <ul className="flex gap-2">
          <li><IntagramIcon className="size-10" /></li>
          <li><FacebookIcon className="size-10" /></li>
          <li><YoutubeIcon className="size-10" /></li>
        </ul>
      </div>
    </footer>
  )
}
