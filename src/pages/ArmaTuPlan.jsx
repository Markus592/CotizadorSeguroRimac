import BreadCrumb from "../components/BreadCrumb/Index";
import MainArmaTuPlan from "../components/MainArmaTuPlan/Index";
import BlockMonto from "../components/BlockMonto/Index";
import { Layout } from "../components/Layout.jsx";
import "../styles/Layout.scss";
import { useState } from "react";
function Home() {
  const [monto, setMonto] = useState(20);
  const [activeRobo, setActiveRobo] = useState([false,false]);
  const [activeChoque, setActiveChoque] = useState([false,false]);
  const [activeAtropello, setActiveAtropello] = useState([false,false]);
  return (
    <Layout>
      <div className="gridArmaTuPlan">
        <BreadCrumb></BreadCrumb>
        <MainArmaTuPlan
          activeRobo={activeRobo}
          activeChoque={activeChoque}
          activeAtropello={activeAtropello}
          setActiveRobo={setActiveRobo}
          setActiveChoque={setActiveChoque}
          setActiveAtropello={setActiveAtropello}
          monto={monto}
          setMonto={setMonto}
        ></MainArmaTuPlan>
        <BlockMonto monto={monto} setMonto={setMonto}></BlockMonto>
      </div>
    </Layout>
  );
}
export default Home;
