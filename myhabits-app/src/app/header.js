import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-6">
      <nav className="flex justify-between" aria-label="desktop-navbar">
        <Link href="/">
          <h1 className="text-2xl text-white">
            My<span className="font-extrabold text-yellow-400">Habits</span>
          </h1>
        </Link>

        <ul className="flex gap-4 items-center text-xl">
          <li>
            <Link href="/menu">App</Link>
          </li>
          <li>
            <Link href="">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
