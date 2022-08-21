import { Routes, Route } from "react-router-dom";
import UnauthLayout from "./components/unauth_layout.js";
import HomePage from "./pages/home.js";
import LoginPage from "./pages/login.js";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UnauthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
