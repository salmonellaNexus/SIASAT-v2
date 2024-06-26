// //? lib
import { Route, Routes } from "react-router-dom";

// //? pages
import DashboardPage from "../pages/guru/dashboard";
import AbsensiPage from "../pages/guru/murid/absensi";
import NilaiPage from "../pages/guru/murid/nilai";
import ProfilePage from "../pages/guru/profile";
import MateriPage from "../pages/guru/materi";

function GuruRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/absensi" element={<AbsensiPage />} />
      <Route path="/nilai" element={<NilaiPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/materi" element={<MateriPage />} />
    </Routes>
  );
}

export default GuruRoutes;
