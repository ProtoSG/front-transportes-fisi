import { FormLogin, TitleLogin } from "./components";

export function Login() {
  return (
    <main className="relative bg-primary-900 h-dvh flex flex-col gap-4 justify-center">
      <TitleLogin />
      <FormLogin />
    </main>
  )
}
