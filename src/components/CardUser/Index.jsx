import "./Style.scss";
import Personaje from "../../images/personaje.png";
import { useContext } from "react";
import DataContext from "../..//context/DataContext";
export default function Index(props) {
  const { user, setUser } = useContext(DataContext);
  console.log(user);
  return (
    <div className="cardUser">
      <div className="cardUser__saludo colorGray desktop">
        ¡Hola,
        {user[0] ? (
          <span className="colorRed"> {user[0].name}</span>
        ) : (
          "cargando"
        )}
      </div>
      <div className="cardUser__saludo  colorGray mobile">
        Mira las coberturas
      </div>
      <p className="cardUser__info">Conoce las coberturas para tu plan</p>
      <div className="cardUser__DatosCard">
        <div className="cardUser__Datos">
          {user[1] ? <p className="colorGray3">Placa:{user[1]}</p> : "cargando"}
          <p className="cardUser__Marca colorGray">
            {props.marca || "Wolkswagen 2019 Golf"}
          </p>
        </div>
        <img src={Personaje} className="cardUser__img" />
      </div>
    </div>
  );
}
