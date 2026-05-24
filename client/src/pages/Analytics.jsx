function Analytics() {

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        AI Analytics
      </h1>

      <div className="bg-cyan-500/10 border border-cyan-500 p-5 rounded-2xl mb-8">

        <h2 className="text-2xl font-bold text-cyan-400 mb-2">
          AI Prediction Engine
        </h2>

        <p className="text-gray-300">
          High probability of delivery delays detected in Bangalore route due to fuel inefficiency and traffic load.
        </p>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Delivery Success</h2>

          <p className="text-5xl font-bold text-green-400 mt-4">
            94%
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Fuel Optimization</h2>

          <p className="text-5xl font-bold text-cyan-400 mt-4">
            87%
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-gray-400">Risk Alerts</h2>

          <p className="text-5xl font-bold text-red-400 mt-4">
            3
          </p>
        </div>

      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl mt-10">

        <h2 className="text-2xl font-bold mb-6">
          AI Recommendations
        </h2>

        <div className="space-y-4">

          <div className="bg-slate-800 p-4 rounded-xl">
            🚚 Route optimization recommended for Chennai warehouse dispatch.
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            ⛽ Truck T-18 requires fuel monitoring.
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📦 Delivery efficiency increased by 12% this month.
          </div>

        </div>

      </div>

    </div>
  )
}

export default Analytics