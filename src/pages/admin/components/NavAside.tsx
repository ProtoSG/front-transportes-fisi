import { BusIcon, LogoutIcon, ServiceIcon, UserOutlineIcon } from '../../../icons'
import { ChairIcon } from '../../../icons/ChairIcon'
import { DiscountIcon } from '../../../icons/DiscountIcon'
import { DriverIcon } from '../../../icons/DriverIcon'
import { HomeIcon } from '../../../icons/HomeIcon'
import { PlaneIcon } from '../../../icons/PlaneIcon'
import { RouteIcon } from '../../../icons/RouteIcon'
import logo from '../../../assets/logo.png'
import { LinkItem } from './LinkItem'
import { removeFromLocalStorage } from '../../../services/localStorageActions'

const links = [
  {
    icon: <UserOutlineIcon />,
    link: ""
  },
  {
    icon: <PlaneIcon />,
    link: "/programacion-viaje",
  },
  {
    icon: <RouteIcon />,
    link: "/ruta"
  },
  {
    icon: <BusIcon />,
    link: "/bus"
  },
  {
    icon: <HomeIcon />,
    link: "/terminal"
  },
  {
    icon: <DiscountIcon />,
    link: "/descuento"
  },
  {
    icon: <DriverIcon />,
    link: "/conductor"
  },
  {
    icon: <ChairIcon />,
    link: "/asiento"
  },
  {
    icon: <ServiceIcon />,
    link: "/servicio"
  }
]

const handleLogout = () => {
  removeFromLocalStorage("jwt_token")
}

export function NavAside() {
  return (
    <aside className='flex flex-col bg-primary-900 rounded-xl items-center px-2 py-4  justify-between'>
      <div className='flex flex-col gap-20'>
        <a href='/'>
          <img src={logo} alt="logo" className="w-16" />
        </a>
        <nav>
          <ul className='flex flex-col gap-4 items-center text-white'>
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
        link="/login/admin"
        icon={<LogoutIcon className="text-white" />}
        onClick={handleLogout}
      />
    </aside>

  )
}
