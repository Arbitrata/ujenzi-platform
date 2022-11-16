import { useState } from "react";
import UjenziBuyersHomePage from "./components/pages/UjenziBuyersHomePage";
import UjenziLandingPage from "./components/pages/UjenziLandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import UjenziSignUpPage from "./components/pages/UjenziSignUpPage";
import UjenziSingInPage from "./components/pages/UjenziSingInPage";
import UjenziSuppliersSignUpPage from "./components/pages/UjenziSuppliersSignUpPage";
import UjenziBuyersDashBoardpage from "./components/pages/UjenziBuyersMyAccountpage";
import UjenziSuppliersSignUpPage2 from "./components/pages/UjenziSuppliersSignUpPage2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/services/ProtectedRoutes";

function App() {
  const isAuth = localStorage.getItem(!"token");

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/buyerspage" element={<UjenziBuyersHomePage />} />
          <Route path="/dashboard" element={<UjenziBuyersDashBoardpage />} />
        </Route>

        <Route exact path="/" element={<UjenziLandingPage />} />
        <Route exact path="/signup" element={<UjenziSignUpPage />} />
        <Route exact path="/signin" element={<UjenziSingInPage />} />
        <Route path="/suppliersignup" element={<UjenziSuppliersSignUpPage />} />
        <Route
          path="/suppliersignup1"
          element={<UjenziSuppliersSignUpPage2 />}
        />
      </Routes>
    </div>
  );
}

export default App;
