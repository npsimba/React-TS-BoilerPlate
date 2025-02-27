import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./features/dashboard/components/Sidebar";
import Navbar from "./features/dashboard/components/Navbar";
import UserDashboard from "./pages/UserDashboard.js";
import Analytics from "./pages/Analytics.js";
import Settings from "./pages/Settings.js";
import Profile from "./pages/Profile.js";
import IssuerDashboard from "./pages/IssuerDashboard.js";
import IssuerCertificates from "./pages/IssuerCertificates.js";
import IssuerApprovals from "./pages/IssuerApprovals.js";
import IssuerNavbar from "./features/dashboard/components/IssuerNavbar";
import CertificateSettings from "./pages/CertificateSettings.js";

// 🟢 User Layout
const UserLayout = () => (
  <div className="flex h-screen">
    {/* Sidebar - Ensure it takes full height */}
    <div className="h-full">
      <Sidebar />
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col h-full">
      <Navbar />
      <div className="p-6 bg-gray-100 flex-1 overflow-auto">
        <Outlet /> {/* Renders the child component */}
      </div>
    </div>
  </div>
);

<div className="flex min-h-screen">
  <Sidebar />
  <div className="flex-1 flex flex-col">
    <Navbar />
    <div className="p-6 bg-gray-100 flex-1">
      <Outlet />
    </div>
  </div>
</div>


// 🔵 Issuer Layout
const IssuerLayout = () => (
  <div className="flex flex-col h-screen">
    <IssuerNavbar />
    <div className="p-6 bg-gray-100 flex-1">
      <Outlet />
    </div>
  </div>
);




function App() {
  return (
    <BrowserRouter> {/* ✅ Wrapped everything inside BrowserRouter */}
      <Routes>
        {/* 🟢 User Routes (With Sidebar & Navbar) */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="certificates" element={<CertificateSettings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/user/dashboard" />} />
        </Route>

        {/* 🔵 Issuer Routes (With Navbar, No Sidebar) */}
        <Route path="/issuer" element={<IssuerLayout />}>
          <Route path="dashboard" element={<IssuerDashboard />} />
          <Route path="certificates" element={<IssuerCertificates />} />
          <Route path="approvals" element={<IssuerApprovals />} />
          <Route path="*" element={<Navigate to="/issuer/dashboard" />} />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/user/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
