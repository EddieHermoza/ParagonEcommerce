import { NavAdmin, NavMobileDashboard } from "@/components/admin";
import { Glitch } from "@/components/ui";

export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-screen h-[60px] flex">
        <Glitch tittle="Paragon" height={60} width={200} fontSize={34} className="px-4"/>

      </header>
      <div className="flex h-[calc(100vh-60px)] relative w-screen">
        <NavAdmin/>
        <NavMobileDashboard/>
        <main className={` w-full h-full relative bg-neutral-950 p-4 sm:p-10 flex flex-col gap-10 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-aorus`}>
          {children}
        </main>
      </div>
    </>
  );
}