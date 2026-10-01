import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MedicalProfile from "./pages/MedicalProfile";
import Medicines from "./pages/Medicines";
import Allergies from "./pages/Allergies";
import Surgeries from "./pages/Surgeries";
import Reports from "./pages/Reports";
import Timeline from "./pages/Timeline";
import DoctorVisit from "./pages/DoctorVisit";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/medical-profile"
          element={<MedicalProfile />}
        />

        <Route
          path="/medicines"
          element={<Medicines />}
        />

        <Route
          path="/allergies"
          element={<Allergies />}
        />

        <Route
          path="/surgeries"
          element={<Surgeries />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/timeline"
          element={<Timeline />}
        />

        <Route
          path="/doctor-visit"
          element={<DoctorVisit />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;