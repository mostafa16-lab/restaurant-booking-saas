export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">Reservations</p>
          <h2 className="text-4xl font-bold mt-3">128</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">Customers</p>
          <h2 className="text-4xl font-bold mt-3">89</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-zinc-400">Revenue</p>
          <h2 className="text-4xl font-bold mt-3">$4.2K</h2>
        </div>
      </div>
    </div>
  );
}
