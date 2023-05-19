import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboardpenyewaan from "./pages/Dashboardpenyewaan";
import Lapangan from "./pages/Lapangan";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboardpenyewaan" element={<Dashboardpenyewaan />} />
        <Route path="/lapangan" element={<Lapangan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
