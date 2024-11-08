import { useForm } from "react-hook-form"
import { LoginData, schemaLogin } from "../model/formLogin.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputFieldLight, NewButton } from "../../../components"
import { LockIcon, UserOutlineIcon } from "../../../icons"
import { useNavigate } from "react-router-dom"

export function FormLogin() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      username: "",
      password: "",
    }
  })

  const navigete = useNavigate()

  const onSubmit = (data: LoginData) => {
    console.log(data)
    navigete("/admin")
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
