export default function Dashboard() {
  const stats = [
    {
      title: "Reservations",
      value: "128",
    },
    {
      title: "Customers",
      value: "89",
    },
    {
      title: "Revenue",
      value: "$4.2K",
    },
    {
      title: "Bookings Today",
      value: "24",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl"
          >
            <p className="text-zinc-400">{stat.title}</p>

            <h2 className="text-5xl font-bold mt-4">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">Booking Activity</h2>

        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-2">
              <span>Monday</span>
              <span>70%</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-[70%] h-full bg-orange-500"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Tuesday</span>
              <span>45%</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-orange-500"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Wednesday</span>
              <span>90%</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-[90%] h-full bg-orange-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
