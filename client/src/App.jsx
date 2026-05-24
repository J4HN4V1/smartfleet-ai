import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import axios from "axios";

import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Fleet from "./pages/Fleet";
import DispatchBoard from "./pages/DispatchBoard";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function Sidebar() {

  return (

    <div className="w-[250px] bg-slate-900 h-screen p-6 fixed border-r border-slate-800">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        SmartFleet
      </h1>

      <div className="flex flex-col gap-3 text-lg">

        <Link
          to="/dashboard"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Dashboard
        </Link>

        <Link
         to="/profile"
         className="p-3 rounded-xl hover:bg-slate-800 transition"
>
         Profile
        </Link>

        <Link
          to="/deliveries"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Deliveries
        </Link>

        <Link
          to="/fleet"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Fleet
        </Link>

        <Link
          to="/dispatch"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Dispatch Board
        </Link>

        <Link
          to="/analytics"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Analytics
        </Link>

      </div>

    </div>
  );
}


function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const loginHandler = () => {

  const data = {
    name: "Jahnavi",
    role: "Admin",
  };

  localStorage.setItem("userInfo", JSON.stringify(data));

  navigate("/dashboard");
};


  return (

    <div className="h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          SmartFleet AI
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 outline-none text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-slate-800 border border-slate-700 outline-none text-white"
        />

        <button
          onClick={loginHandler}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

      </div>

    </div>
  );
}


function Layout(props) {

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const navigate = useNavigate();

  const logoutHandler = () => {

  const confirmLogout = window.confirm(
    "Are you sure you want to logout?\n\nYou'll have to login again to access SmartFleet AI."
  );

  if (confirmLogout) {

    localStorage.removeItem("userInfo");

    navigate("/");
  }
};

  return (

    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="ml-[250px] w-full">

        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900">

          <div>
            <h2 className="text-2xl font-bold">
              Logistics Control Center
            </h2>
          </div>

          <div className="flex items-center gap-4">

            <div className="text-right">
              <p className="font-semibold">
                {userInfo?.name}
              </p>

              <p className="text-sm text-gray-400">
                {userInfo?.role}
              </p>
            </div>

            <button
              onClick={logoutHandler}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

        </div>

        {props.children}

      </div>

    </div>
  );
}

function ProtectedRoute({ children }) {

  const user = localStorage.getItem("userInfo");

  if (!user) {
    return <LoginPage />;
  }

  return children;
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

  <Route path="/" element={<LoginPage />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    }
  />

  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Layout>
          <Profile />
        </Layout>
      </ProtectedRoute>
    }
  />

  <Route
    path="/deliveries"
    element={
      <ProtectedRoute>
        <Layout>
          <Deliveries />
        </Layout>
      </ProtectedRoute>
    }
  />

  <Route
    path="/fleet"
    element={
      <ProtectedRoute>
        <Layout>
          <Fleet />
        </Layout>
      </ProtectedRoute>
    }
  />

  <Route
    path="/dispatch"
    element={
      <ProtectedRoute>
        <Layout>
          <DispatchBoard />
        </Layout>
      </ProtectedRoute>
    }
  />

  <Route
    path="/analytics"
    element={
      <ProtectedRoute>
        <Layout>
          <Analytics />
        </Layout>
      </ProtectedRoute>
    }
  />

</Routes>

    </BrowserRouter>
  );
}

export default App;