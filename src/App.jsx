import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gracias from "./pages/Gracias";
import ArmaTuPlan from "./pages/ArmaTuPlan";
import { UserContextProvider } from "./context/DataContext";
export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arma-tu-plan" element={<ArmaTuPlan />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
