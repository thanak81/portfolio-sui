"use client";

import NavLink from "./components/NavLink";
import Snowfall from "react-snowfall";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-dvh bg-zinc-950 text-zinc-100 overflow-hidden relative">
      <section className="h-full py-8 px-6 md:px-12 flex flex-col">
        <div className="flex flex-col h-full gap-8 flex-1">
          <div className="pointer-events-none fixed inset-0 z-0">
            <Snowfall
              snowflakeCount={80}
              radius={[0.3, 1]}
              color="rgba(255,255,255,0.6)"
            />
          </div>
          <div className="self-end relative z-10">
            <NavLink />
          </div>

          <div className="max-w-7xl mx-auto w-full h-full relative">
            <div
              className="
      flex flex-col h-full
      origin-top
      scale-100
      xl:scale-[1.05]
      2xl:scale-[1.1]
    "
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
