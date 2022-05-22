import "./Style.scss";
import Personaje1 from "../../images/imgBanner.png";
const Index = () => {
  return (
    <div className="hero">
      <div className="hero__card">
        <img className="hero__img" src={Personaje1} alt="personaje1" />
        <div>
          <p className="hero__text small">¡NUEVO!</p>
          <p className="hero__text">
            Seguro <span className="colorRed">Vehicular Tracking </span>
          </p>
          <p className="hero__info colorGray2">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
          <p className="hero__copy colorGray3">
            © 2021 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;
