export default function Reservations() {
  const reservations = [
    {
      id: 1,
      name: "John Doe",
      guests: 2,
      time: "7:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Sarah Smith",
      guests: 4,
      time: "8:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Michael Brown",
      guests: 3,
      time: "6:15 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Reservations</h1>

        <button className="bg-orange-500 px-5 py-3 rounded-2xl font-semibold">
          Add Reservation
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="text-left p-5">Customer</th>

              <th className="text-left p-5">Guests</th>

              <th className="text-left p-5">Time</th>

              <th className="text-left p-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="border-t border-zinc-800">
                <td className="p-5">{reservation.name}</td>

                <td className="p-5">{reservation.guests}</td>

                <td className="p-5">{reservation.time}</td>

                <td className="p-5">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
