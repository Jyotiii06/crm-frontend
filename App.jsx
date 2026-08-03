/*import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Communication from "./pages/Communication";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Sidebar from "./components/Sidebar";
import EditProfile from "./pages/EditProfile";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64 p-8">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Page load pe localStorage se data uthao
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if(savedToken) setToken(savedToken);
    if(savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // User update karne ka function
  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!token ? <Login setUser={setUser} setToken={setToken} /> : <Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={token ? <Layout><Dashboard /></Layout> : <Navigate to="/" />} />
        <Route path="/leads" element={token ? <Layout><Leads /></Layout> : <Navigate to="/" />} />
        <Route path="/customers" element={token ? <Layout><Customers /></Layout> : <Navigate to="/" />} />
        <Route path="/analytics" element={token ? <Layout><Analytics /></Layout> : <Navigate to="/" />} />
        <Route path="/communication" element={token ? <Layout><Communication /></Layout> : <Navigate to="/" />} />
        <Route path="/profile" element={token ? <Layout><Profile user={user} /></Layout> : <Navigate to="/" />} />
        <Route path="/admin" element={token ? <Layout><AdminPanel /></Layout> : <Navigate to="/" />} />
        <Route path="/edit-profile" element={token ? <Layout><EditProfile user={user} setUser={updateUser} /></Layout> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Communication from "./pages/Communication";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Sidebar from "./components/Sidebar";
import EditProfile from "./pages/EditProfile";

function layout({children}){
  return(
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/leads" element={<Leads />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/communication" element={<Communication />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/admin" element={<AdminPanel />} />

        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Communication from "./pages/Communication";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Sidebar from "./components/Sidebar";

// Layout yahi App.jsx ke andar
function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64 p-6">
        {children}
      </div>
    </div>
  );
}

function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={token ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />} />
        <Route path="/leads" element={token ? <Layout><Leads /></Layout> : <Navigate to="/login" />} />
        <Route path="/customers" element={token ? <Layout><Customers /></Layout> : <Navigate to="/login" />} />
        <Route path="/analytics" element={token ? <Layout><Analytics /></Layout> : <Navigate to="/login" />} />
        <Route path="/communication" element={token ? <Layout><Communication /></Layout> : <Navigate to="/login" />} />
        <Route path="/profile" element={token ? <Layout><Profile /></Layout> : <Navigate to="/login" />} />
        <Route path="/admin" element={token ? <Layout><AdminPanel /></Layout> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
/*
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Communication from "./pages/Communication";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64 p-6">
        <div className="flex justify-between items-center mb-6 bg-white rounded-xl shadow-md px-6 py-4 border border-gray-100">
          <h1 className="text-xl font-bold text-[#2c3e75]">CRM Dashboard</h1>
          <button onClick={() => {localStorage.clear(); window.location.href='/login'}} 
            className="bg-red-500 hover:bg-red-600 hover:scale-105 text-white px-5 py-2 rounded-full transition duration-200">Logout</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const check = () => setToken(localStorage.getItem('token'));
    window.addEventListener('storage', check);
    return () => window.removeEventListener('storage', check);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={token ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />} />
          <Route path="/leads" element={token ? <Layout><Leads /></Layout> : <Navigate to="/login" />} />
          <Route path="/customers" element={token ? <Layout><Customers /></Layout> : <Navigate to="/login" />} />
          <Route path="/analytics" element={token ? <Layout><Analytics /></Layout> : <Navigate to="/login" />} />
          <Route path="/communication" element={token ? <Layout><Communication /></Layout> : <Navigate to="/login" />} />
          <Route path="/profile" element={token ? <Layout><Profile /></Layout> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;*/