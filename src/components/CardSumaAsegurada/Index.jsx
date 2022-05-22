import "./Style.scss";
import { useState } from "react";
export default function Index({ setActiveChoque }) {
  const minMax = [12500, 16500];
  const [mount, setMount] = useState(14300);
  const addMount = () => {
    if(mount<16500){
      setMount(mount + 100);
    }
    if (mount > 15900) {
      setActiveChoque([false, true]);
    } else {
      setActiveChoque([false, false]);
    }
  };
  const minusMount = () => {
    if(mount>12500){
      setMount(mount - 100);
    }
    if (mount < 15900) {
      setActiveChoque([false, true]);
    } else {
      setActiveChoque([false, false]);
    }
  };
  return (
    <div className="cardSumaAsegurada">
      <div className="cardSumaAsegurada__range">
        <p className="colorGray">Indica la suma asegurada</p>
        <div className="cardSumaAsegurada__rangeFlex">
          <span className="colorGray2">MIN $ {minMax[0]}</span>
          <span className="colorGray2">MAX $ {minMax[1]}</span>
        </div>
      </div>
      <div className="cardSumaAsegurada__Operacion">
        <div
          className="cardSumaAsegurada__OperacionAction colorAcian"
          onClick={minusMount}
        >
          -
        </div>
        <div className="cardSumaAsegurada__OperacionMonto">
          $ <span className=""> {mount}</span>
        </div>
        <div
          className="cardSumaAsegurada__OperacionAction colorAcian"
          onClick={addMount}
        >
          +
        </div>
      </div>
    </div>
  );
}
