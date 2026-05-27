import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function DashboardLayout() {
  const { logout } = useAuth();
  const linkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl transition ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6">
        <h1 className="text-3xl font-bold mb-12">BistroNova</h1>

        <nav className="flex flex-col gap-3">
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/reservations" className={linkClass}>
            Reservations
          </NavLink>

          <NavLink to="/customers" className={linkClass}>
            Customers
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1">
        {/* Topbar */}
        <header className="border-b border-zinc-800 px-10 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Restaurant Admin Panel</h2>

            <p className="text-zinc-500 text-sm">
              Manage reservations and customers
            </p>
          </div>
          <button
            onClick={logout}
            className="bg-orange-500 px-5 py-2 rounded-xl"
          >
            Logout
          </button>{" "}
        </header>

        <div className="p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
