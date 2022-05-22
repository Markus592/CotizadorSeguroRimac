import "./Style.scss";
import { Link } from "react-router-dom";
import CardUser from "../CardUser/Index";
import CardSumaAsegurada from "../CardSumaAsegurada/Index";
import TabCoberturas from "../TabCoberturas/Index";
export default function Index({
  monto,
  setMonto,
  activeRobo,
  activeChoque,
  activeAtropello,
  setActiveRobo,
  setActiveChoque,
  setActiveAtropello,
}) {
  return (
    <div className="MainArmaTuPlan">
      <Link to="/" className="volver desktop">
        <span className="volver__icon">{"<"}</span>
        VOLVER
      </Link>
      <CardUser></CardUser>
      <CardSumaAsegurada
        activeRobo={activeRobo}
        activeChoque={activeChoque}
        activeAtropello={activeAtropello}
        setActiveRobo={setActiveRobo}
        setActiveChoque={setActiveChoque}
        setActiveAtropello={setActiveAtropello}
      ></CardSumaAsegurada>
      <TabCoberturas
        activeRobo={activeRobo}
        activeChoque={activeChoque}
        activeAtropello={activeAtropello}
        setActiveRobo={setActiveRobo}
        setActiveChoque={setActiveChoque}
        setActiveAtropello={setActiveAtropello}
        monto={monto}
        setMonto={setMonto}
      ></TabCoberturas>
    </div>
  );
}
