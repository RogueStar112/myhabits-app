import Header from "../header";

import MenuItem from "./menuitem";

export default function Page() {
  return (
    <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
      <Header />

      <main>
        <section className="mt-6 grid grid-cols-2 grid-rows-4 text-center [&>a]:flex [&>a]:my-5">
          <h2 className="col-span-2 font-extrabold">MENU</h2>

          <MenuItem
            index="1"
            title="Manage Tasks and Categories"
            description="Create, update, or delete tasks"
            href="/task"
          />

          <MenuItem
            index="2"
            title="Log Weekly Tasks"
            description="Track your tasks."
            href="/log"
          />

          <MenuItem
            index="3"
            title="Import/Export Data"
            description="Export JSON files to use across multiple devices, or as a backup."
            href="/save"
          />

          <MenuItem
            index="4"
            title="View Statistics"
            description="See new trends. Requires at least two days of data."
            href="/stats"
          />

          <MenuItem
            index="5"
            title="Achievements"
            description="Look at how far you've come."
            href="/achievements"
          />

          <MenuItem
            index="6"
            title="Settings"
            description="Set themes, font, etc."
            href="/settings"
          />
        </section>
      </main>
    </section>
  );
}
