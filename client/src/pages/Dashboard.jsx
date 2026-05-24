import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", deliveries: 40 },
  { month: "Feb", deliveries: 55 },
  { month: "Mar", deliveries: 70 },
  { month: "Apr", deliveries: 48 },
  { month: "May", deliveries: 90 },
];

function Dashboard() {

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        SmartFleet Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Active Deliveries</h2>
          <p className="text-3xl font-bold mt-3">24</p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Vehicles Active</h2>
          <p className="text-3xl font-bold mt-3">12</p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Delayed Orders</h2>
          <p className="text-3xl font-bold mt-3 text-red-400">3</p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Fuel Efficiency</h2>
          <p className="text-3xl font-bold mt-3 text-green-400">89%</p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-6">
            Monthly Deliveries
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={data}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="deliveries" fill="#06b6d4" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            AI Logistics Insights
          </h2>

          <div className="space-y-5">

            <div className="bg-slate-800 p-4 rounded-xl">
              🚚 Bangalore route has high traffic delay probability.
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ⛽ Truck T-18 fuel efficiency dropped by 12%.
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              📦 Chennai deliveries performing above target metrics.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;