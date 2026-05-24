import { useState } from "react";

function Profile() {

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [name, setName] = useState(userInfo?.name || "");

  const [email, setEmail] = useState(userInfo?.email || "");

  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");


  const updateProfile = () => {

    setSuccessMessage("Changes have been saved");
  };


  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Edit Profile
      </h1>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl max-w-xl">

        <div className="mb-5">

          <label className="block mb-2 text-gray-400">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800"
          />

        </div>

        <div className="mb-5">

          <label className="block mb-2 text-gray-400">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800"
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2 text-gray-400">
            Change Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800"
          />

        </div>

        <button
          onClick={updateProfile}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>

        {
          successMessage && (

            <p className="text-green-400 mt-4">
              {successMessage}
            </p>
          )
        }

      </div>

    </div>
  )
}

export default Profile