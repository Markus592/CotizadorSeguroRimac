import { Button } from "../button";
import "./Style.scss";
const Index = () => {
  return (
    <>
      <div className="infoGracias">
        <div className="infoGracias__card">
          <h4 className="colorGray infoGracias__title">
            <p className="colorRed infoGracias__title">
              ¡Te damos la bienvenida!
            </p>
            Cuenta con nosotros para proteger tu vehículo
          </h4>
          <p className="infoGracias__info">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:{" "}
            <a
              className="infoGracias__link"
              href="mailto:joel.sanchez@gmail.com"
            >
              joel.sanchez@gmail.com
            </a>
          </p>
          <Button text="cómo usar mi seguro" />
        </div>
      </div>
      <div className="mobile infoGracias__copy">
        © 2021 RIMAC Seguros y Reaseguros.
      </div>
    </>
  );
};

export default Index;
