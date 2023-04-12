import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboardpenyewaan from "./pages/Dashboardpenyewaan";
import Lapangan from "./pages/Lapangan";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboardpenyewaan />} />
        <Route path="/lapangan" element={<Lapangan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
