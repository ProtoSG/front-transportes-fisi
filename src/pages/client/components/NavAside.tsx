import { CreditCardIcon, LogoutIcon, TicketIcon, UserOutlineIcon, ShoppingBagIcon } from '../../../icons'
import logo from '../../../assets/logo.png'
import { LinkItem } from './../../admin/components'
import { removeFromLocalStorage } from '../../../services/localStorageActions'

const links = [
  {
    icon: <UserOutlineIcon className="text-white" />,
    link: "perfil",
  },
  {
    icon: <CreditCardIcon className="text-white" />,
    link: "metodo-pago"
  },
  {
    icon: <TicketIcon className="text-white" />,
    link: "boleto"
  },
  {
    icon: <ShoppingBagIcon className="text-white" />,
    link: "compra"
  }
]

export function NavAside() {
  const handleLogout = () => {
    removeFromLocalStorage("jwt_token")
  }

  return (
    <>
      <aside className='flex flex-col h-full justify-between'>
        <div className='flex flex-col gap-20'>
          <img src={logo} alt="logo" className="w-16" />
          <nav>
            <ul className='flex flex-col gap-4'>
              {
                links.map((link) => (
                  <li key={link.link}>
                    <LinkItem
                      link={`/client/${link.link}`}
                      icon={link.icon}
                    />
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <LinkItem
          link="/"
          icon={<LogoutIcon className="text-white" />}
          onClick={handleLogout}
        />
      </aside>
    </>
  )
}
