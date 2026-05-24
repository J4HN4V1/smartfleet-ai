import { useState } from "react";

function Deliveries() {

  const [shipment, setShipment] = useState("");

  const [deliveries, setDeliveries] = useState([
    {
      shipment: "SF-102",
      destination: "Chennai",
      status: "In Transit",
      risk: "Medium",
    },
  ]);


  const addDelivery = () => {

    if (!shipment) return;

    const newDelivery = {
      shipment,
      destination: "Bangalore",
      status: "Pending",
      risk: "Low",
    };

    setDeliveries([...deliveries, newDelivery]);

    setShipment("");
  };


  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Deliveries
      </h1>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl mb-10">

        <h2 className="text-2xl font-bold mb-5">
          Add Delivery
        </h2>

        <input
          type="text"
          placeholder="Shipment ID"
          value={shipment}
          onChange={(e) => setShipment(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <button
          onClick={addDelivery}
          className="bg-cyan-500 px-6 py-3 rounded-lg"
        >
          Add Delivery
        </button>

      </div>

      <div className="bg-slate-900 rounded-2xl p-6">

        <table className="w-full">

          <thead>

            <tr className="text-gray-400 border-b border-slate-700">

              <th className="p-4 text-left">Shipment</th>

              <th className="p-4 text-left">Destination</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Risk</th>

            </tr>

          </thead>

          <tbody>

            {deliveries.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800"
              >

                <td className="p-4">
                  {item.shipment}
                </td>

                <td className="p-4">
                  {item.destination}
                </td>

                <td className="p-4 text-green-400">
                  {item.status}
                </td>

                <td className="p-4 text-yellow-400">
                  {item.risk}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Deliveries