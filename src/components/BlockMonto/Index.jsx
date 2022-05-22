import "./Style.scss";
import {FaCheck}  from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
export default function Index({monto}) {
  let navigate = useNavigate();

  return (
    <div className="blockMonto">
      <div className="blockMonto__card">
        <p className="blockMonto__Dinero desktop">MONTO</p>
        <p className="blockMonto__Dinero monto colorGray">$ {monto} </p>
        <p className="blockMonto__mes">mensuales</p>
      </div>
      <div className="blockMonto__incluye desktop">
        <div className="blockMonto__incluyeItem"><FaCheck className="iconCheck"></FaCheck>Llanta de repuesto</div>
        <div className="blockMonto__incluyeItem"><FaCheck className="iconCheck"></FaCheck>Analisis de motor</div>
        <div className="blockMonto__incluyeItem"><FaCheck className="iconCheck"></FaCheck>Aros gratis</div>
      </div>
      <button onClick={()=>navigate('/gracias')} className="btn">
        Lo quiero
      </button>
     
    </div>
  );
}
