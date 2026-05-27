export default function Reservations() {
  const reservations = [
    { id: 1, name: "John Doe", guests: 2, time: "7:00 PM" },
    { id: 2, name: "Sarah Smith", guests: 4, time: "8:30 PM" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Reservations</h1>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Guests</th>
              <th className="text-left p-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="border-t border-zinc-800">
                <td className="p-4">{reservation.name}</td>
                <td className="p-4">{reservation.guests}</td>
                <td className="p-4">{reservation.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
