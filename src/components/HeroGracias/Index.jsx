import "./Style.scss";
import PersonajeFinal from "../../images/personajeFinal.png";
import PersonajeFinalMobile from "../../images/personaFinalMobile.png";
const Index = () => {
  return (
    <div className="heroGracias">
      <div className="heroGracias__card">
        <img className="desktop heroGracias__img" src={PersonajeFinal} alt="PersonajeFinal" />
        <img className="mobile heroGracias__img" src={PersonajeFinalMobile} alt="PersonajeFinal" />
      </div>
    </div>
  );
};
export default Index;
