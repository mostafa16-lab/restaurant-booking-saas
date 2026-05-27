import { CalendarDays, Users, DollarSign, LayoutDashboard } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold">BistroNova</h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
          Reserve
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-orange-500 font-semibold mb-4">
            RESTAURANT BOOKING SAAS
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Manage Reservations Smarter
          </h2>

          <p className="text-zinc-400 mt-8 text-lg leading-relaxed">
            Modern platform for restaurants to manage bookings, customers, and
            analytics in one place.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
              Start Booking
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl">
              Live Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <LayoutDashboard />
            <h3 className="text-2xl font-bold">Dashboard</h3>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-black p-6 rounded-2xl">
              <CalendarDays className="mb-4 text-orange-500" />

              <p className="text-zinc-400">Reservations</p>

              <h4 className="text-4xl font-bold mt-2">128</h4>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <Users className="mb-4 text-orange-500" />

              <p className="text-zinc-400">Customers</p>

              <h4 className="text-4xl font-bold mt-2">89</h4>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <DollarSign className="mb-4 text-orange-500" />

              <p className="text-zinc-400">Revenue</p>

              <h4 className="text-4xl font-bold mt-2">$4.2K</h4>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <p className="text-zinc-400 mb-2">Today</p>

              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-orange-500"></div>
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                Booking activity increased by 24%
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
