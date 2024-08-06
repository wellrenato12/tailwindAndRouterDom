import { Link, Outlet } from "react-router-dom"

export function Header() {
  return (
    <>
      <header className="flex items-center justify-center bg-zinc-300">
        <nav>
          <ul className="flex gap-6">
            <Link to="/">
              <li className="text-red-500 font-medium">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-red-500 font-medium">About</li>
            </Link>
            <Link to="/Techs">
              <li className="text-red-500 font-medium">Techs</li>
            </Link>
            <Link to="/Contact">
              <li className="text-red-500 font-medium">Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}