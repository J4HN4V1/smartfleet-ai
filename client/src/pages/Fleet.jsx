function Fleet() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Fleet Management
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Truck T-12</h2>
          <p className="text-gray-400 mt-2">Fuel: 78%</p>
          <p className="text-green-400 mt-2">Operational</p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Truck T-18</h2>
          <p className="text-gray-400 mt-2">Fuel: 24%</p>
          <p className="text-red-400 mt-2">Maintenance Needed</p>
        </div>

      </div>

    </div>
  )
}

export default Fleet