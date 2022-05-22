import { Link } from "react-router-dom";
import "./Style.scss";

export default function Index() {
  return (
    <div className="breadCrumb">
      <div className="breadCrumb__card">
        <div className="breadCrumb__item">
          <span className="breadCrumb__itemNumber">
            <span className="desktop">1</span>{" "}
            <Link to="/" className="mobile">
              {"<"}
            </Link>
          </span>
          <span className="desktop">Datos</span>
        </div>
        <div className="breadCrumb__layer desktop"></div>
        <div className="breadCrumb__item active">
          <span className="breadCrumb__itemNumber desktop active">2</span>
          <span className="desktop colorAcian">Arma tu plan</span>
          <span className="mobile colorAcian">Paso 2 de 2</span>
          <div className="breadCrumb__layer2 mobile"></div>
        </div>
      </div>
    </div>
  );
}
