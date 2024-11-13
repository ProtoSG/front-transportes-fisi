export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
      {children}
    </section>
  )
}
