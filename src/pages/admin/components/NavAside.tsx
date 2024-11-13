import { BusIcon, LogoutIcon, UserOutlineIcon } from '../../../icons'
import { ChairIcon } from '../../../icons/ChairIcon'
import { DiscountIcon } from '../../../icons/DiscountIcon'
import { DriverIcon } from '../../../icons/DriverIcon'
import { HomeIcon } from '../../../icons/HomeIcon'
import { PlaneIcon } from '../../../icons/PlaneIcon'
import { RouteIcon } from '../../../icons/RouteIcon'
import logo from '../../../assets/logo.png'
import { LinkItem } from './LinkItem'

const links = [
  {
    icon: <UserOutlineIcon className="text-white" />,
    link: ""
  },
  {
    icon: <PlaneIcon className="text-white" />,
    link: "/programacion-viaje",
  },
  {
    icon: <RouteIcon className="text-white" />,
    link: "/ruta"
  },
  {
    icon: <BusIcon className="text-white" />,
    link: "/bus"
  },
  {
    icon: <HomeIcon className="text-white" />,
    link: "/terminal"
  },
  {
    icon: <DiscountIcon className="text-white" />,
    link: "/descuento"
  },
  {
    icon: <DriverIcon className="text-white" />,
    link: "/conductor"
  },
  {
    icon: <ChairIcon className="text-white" />,
    link: "/asiento"
  }
]

export function NavAside() {
  return (
    <aside className='flex flex-col bg-primary-900 rounded-xl items-center px-2 py-4 h-full justify-between'>
      <div className='flex flex-col gap-20'>
        <img src={logo} alt="logo" className="w-16" />
        <nav>
          <ul className='flex flex-col gap-4 items-center'>
            {
              links.map((link) => (
                <li key={link.link}>
                  <LinkItem
                    link={`/admin${link.link}`}
                    icon={link.icon}
                  />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <LinkItem
        link="/login"
        icon={<LogoutIcon className="text-white" />}
        onClick={() => {
          console.log("logout")
        }}
      />
    </aside>

  )
}
