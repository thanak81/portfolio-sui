"use client"
import NavLink from "./components/NavLink";
import Snowfall from 'react-snowfall'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen bg-zinc-950 text-zinc-100 overflow-hidden relative">
      <section className="h-full py-8 px-6 md:px-12 flex flex-col">
        <div className="flex flex-col h-full gap-8 flex-1">
          {/* Top Navigation */}
          <div className="pointer-events-none fixed inset-0 z-0">
            <Snowfall
              snowflakeCount={80}
              // speed={[0.05, 0.25]}
              // wind={[-0.02, 0.02]}
              radius={[0.3, 1]}
              color="rgba(255,255,255,0.6)"
            />
          </div>
          <div className="self-end">
            <NavLink />
          </div>

          {/* Width constraint */}
          <div className="max-w-7xl mx-auto w-full h-full overflow-hidden flex-1 relative  ">
            {/* Content container */}
            <div className="flex flex-col h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
