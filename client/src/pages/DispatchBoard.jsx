function DispatchBoard() {
  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Dispatch Workflow
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-slate-900 p-5 rounded-2xl">
          <h2 className="font-bold mb-4">Ready</h2>

          <div className="bg-slate-800 p-4 rounded-xl mb-3">
            SF-201
          </div>

        </div>

        <div className="bg-slate-900 p-5 rounded-2xl">
          <h2 className="font-bold mb-4">Packed</h2>

          <div className="bg-slate-800 p-4 rounded-xl">
            SF-301
          </div>

        </div>

        <div className="bg-slate-900 p-5 rounded-2xl">
          <h2 className="font-bold mb-4">In Transit</h2>

          <div className="bg-slate-800 p-4 rounded-xl">
            SF-444
          </div>

        </div>

        <div className="bg-slate-900 p-5 rounded-2xl">
          <h2 className="font-bold mb-4">Delivered</h2>

          <div className="bg-slate-800 p-4 rounded-xl">
            SF-100
          </div>

        </div>

      </div>

    </div>
  )
}

export default DispatchBoard