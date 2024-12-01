import { UserOutlineIcon } from "../../../../icons";

export function AdminProfile() {
  return (
    <section className="flex w-[80%] gap-8 flex-col items-center text-white">
      <div className="border-8 rounded-full p-4">
        <UserOutlineIcon className="size-32" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">Diego SG</span>
        <small className="text-lg">20 diciembre, 2003</small>
      </div>
    </section>
  )
}
