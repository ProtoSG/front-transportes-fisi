import { useForm } from "react-hook-form"
import { LoginData, schemaLogin } from "../model/formLogin.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputFieldLight, NewButton } from "../../../components"
import { LockIcon, UserOutlineIcon } from "../../../icons"
import { useNavigate, useParams } from "react-router-dom"
import { login } from "../services/login.service"
import { Login } from "../model/login.model"
import { saveToLocalStorage } from "../../../services/localStorageActions"
import { toast } from "sonner"
import { useClient } from "../../../hooks/useClient"

interface Props {
  dialog?: boolean
  onClose?: () => void
}

export function FormLogin({ dialog, onClose }: Props) {
  const { setToken } = useClient()
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      username: "",
      password: "",
    }
  })

  const navigete = useNavigate()
  const { userType } = useParams()

  const url = userType === 'client' ? `/` : `/${userType}`

  const onSubmit = async (data: LoginData) => {
    const body: Login = {
      username: data.username,
      password: data.password
    }

    const { success, message, jwt_token } = dialog
      ? await login({ body, url: "client" })
      : await login({ body, url: userType })

    if (success) {
      saveToLocalStorage("jwt_token", jwt_token)
      setToken(jwt_token)
      if (dialog) {
        onClose && onClose()
        toast.success(message)
        return
      }
      navigete(url)
      return
    }

    toast.error(message)
  }

  return (
    <form className="flex flex-col gap-8 w-72 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <InputFieldLight
        type="text"
        control={control}
        name="username"
        placeholder="Username"
        error={errors.username}
        icon=<UserOutlineIcon className="text-white" />
      />
      <InputFieldLight
        type="password"
        control={control}
        name="password"
        placeholder="Password"
        error={errors.password}
        icon=<LockIcon className="text-white" />
      />
      <NewButton
        type="submit"
      >
        Ingresar
      </NewButton>
    </form>
  )
}
