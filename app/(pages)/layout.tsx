import NavLink from "./components/NavLink";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col  overflow-hidden">
      <section className="max-w-full  pt-16 pb-20 px-24 flex flex-1">
        <div className="grid grid-cols-4  flex-1">
          <NavLink />
         <div className="col-span-3 w-full flex flex-col justify-between flex-1 overflow-auto">
            {children}
         </div>
        </div>
      </section>
    </main>
  );
}
