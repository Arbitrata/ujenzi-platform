import UjenziNavbar from "./components/common/UjenziNavbar";
import UjenziBuyersHomePage from "./components/pages/UjenziBuyersHomePage";
import UjenziLandingPage from "./components/pages/UjenziLandingPage";
import { Routes, Route } from "react-router-dom";
import UjenziSignUpPage from './components/pages/UjenziSignUpPage';
import UjenziSingInPage from './components/pages/UjenziSingInPage';
import UjenziSuppliersSignUpPage from './components/pages/UjenziSuppliersSignUpPage';
import UjenziBuyersDashBoardpage from "./components/pages/UjenziBuyersMyAccountpage";
import UjenziSuppliersSignUpPage2 from './components/pages/UjenziSuppliersSignUpPage2';

function App() {
  return <div>
    <Routes>
    <Route path="/" element={<UjenziLandingPage />} />
    <Route path="/signup" element={<UjenziSignUpPage />} />
    <Route path="/suppliersignup" element={<UjenziSuppliersSignUpPage />} />
    <Route path="/suppliersignup1" element={<UjenziSuppliersSignUpPage2 />} />
    <Route path="/signin" element={<UjenziSingInPage />} />
    <Route path="/dashboard" element={<UjenziBuyersDashBoardpage />} />
    </Routes>
  </div>;
}

export default App;
