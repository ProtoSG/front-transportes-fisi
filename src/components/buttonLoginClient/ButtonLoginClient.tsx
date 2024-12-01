import { useState } from "react"
import { UserIcon } from "../../icons"
import { loadFromLocalStorage } from "../../services/localStorageActions"
import { ListActionsClient } from "./components"

export function ButtonLoginClient() {
  const [open, setOpen] = useState<boolean>(false)

  const handleChangeOpen = () => {
    setOpen(!open)
  }

  const token = loadFromLocalStorage<string>("jwt_token", "")
  return (
    <>
      {
        token ? (
          <button
            onClick={handleChangeOpen}
            className='absolute border-2 rounded-full p-2 right-0 hover:cursor-pointer hover:bg-white/20 transition-colors'
          >
            <UserIcon />
          </button>
        ) : (
          <a
            href='/login/client'
            className='absolute border-2 rounded-full p-2 right-0 hover:cursor-pointer hover:bg-white/20 transition-colors'
          >
            <UserIcon />
          </a>
        )
      }
      <ListActionsClient open={open} setOpen={setOpen} />
    </>
  )
}
