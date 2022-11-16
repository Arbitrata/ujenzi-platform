import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const authenticated = localStorage.getItem("token");
 return authenticated ? <Outlet /> :  <Navigate to="/signin" />;
}

function PreventRoutes() {
    const authenticated = localStorage.getItem("token");
   return authenticated ? <Outlet /> :  <Navigate to="/signin" />;
  }

export default ProtectedRoutes;
