import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Reservations from "./pages/Reservations";
import Customers from "./pages/Customers";
import Login from "./pages/Login";

import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />

            <Route path="reservations" element={<Reservations />} />

            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
