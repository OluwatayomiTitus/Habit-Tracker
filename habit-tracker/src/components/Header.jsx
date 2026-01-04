import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6">
      <Link to="/setup" className="text-blue-600 hover:underline">
        SignUp / Login
      </Link>

      <Link to="/dashboard" className="text-blue-600 hover:underline">
        Dashboard
      </Link>

      <Link to="/history" className="text-blue-600 hover:underline">
        History
      </Link>
    </nav>
  )
}

export default Header
