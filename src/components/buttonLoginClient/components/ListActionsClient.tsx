import { useNavigate } from "react-router-dom"
import { DashboardIcon, LogoutIcon } from "../../../icons"
import { ItemListActionClient } from "./ItemListActionClient"
import { removeFromLocalStorage, loadFromLocalStorage } from "../../../services/localStorageActions"
import { toast } from "sonner"
import { jwtDecode} from "jwt-decode"

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

interface Identity {
  role: string,
  id: string,
  fullname: string,
  username: string
}

export function ListActionsClient({ open, setOpen }: Props) {
  const navigate = useNavigate()

  const handleGoToDashboard = () => {
    const jwt_token = loadFromLocalStorage<string>("jwt_token", "")
    if (!jwt_token) return

    const decoded = jwtDecode(jwt_token)
    const identity = decoded.sub
    if (!identity) return

    const identityParsed: Identity = JSON.parse(JSON.stringify(identity))
    const role = identityParsed.role
    navigate(`/${role}`)
  }

  const handleLogout = () => {
    removeFromLocalStorage("jwt_token")
    toast.success('Sesión cerrada')
    setOpen(!open)
  }

  return (
    <>
      {open && (
        <div
          className='absolute right-0 top-12 py-4 px-3 rounded text-black bg-primary-100'
        >
          <ul className='flex flex-col gap-2'>
            <ItemListActionClient
              icon={<DashboardIcon />}
              text="Ir a Dashboard"
              onClick={handleGoToDashboard}
            />
            <ItemListActionClient
              icon={<LogoutIcon />}
              text="Cerrar Sesión"
              onClick={handleLogout}
            />
          </ul>
        </div>
      )}
    </>
  )
}

