import { Outlet } from "react-router-dom";
import { NavAside } from "./components";
import { Toaster } from "sonner";

export function Admin() {
  return (
    <main className="px-8 py-12 flex bg-primary-900 gap-28 min-h-dvh">
      <NavAside />
      <Outlet />
      <Toaster richColors />
    </main>
  )
}
