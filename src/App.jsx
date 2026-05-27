export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">BistroNova</h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-6xl font-bold max-w-3xl leading-tight">
          Modern Restaurant Booking Experience
        </h2>

        <p className="text-zinc-400 mt-6 max-w-xl">
          Reserve tables online and manage bookings easily with a modern dashboard.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Book a Table
        </button>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-6">Admin Dashboard Preview</h3>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-black p-6 rounded-2xl">
              <p className="text-zinc-400">Reservations</p>
              <h4 className="text-4xl font-bold mt-2">128</h4>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <p className="text-zinc-400">Customers</p>
              <h4 className="text-4xl font-bold mt-2">89</h4>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <p className="text-zinc-400">Revenue</p>
              <h4 className="text-4xl font-bold mt-2">$4.2K</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}