import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6">
        <h1 className="text-3xl font-bold mb-10">BistroNova</h1>

        <nav className="flex flex-col gap-4">
          <Link to="/">Dashboard</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/customers">Customers</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
