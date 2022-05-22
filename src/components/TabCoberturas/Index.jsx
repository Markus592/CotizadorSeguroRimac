import "./Style.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import LlantaRobada from "../../images/llantaRobada.png";
import Choque from "../../images/choquePasarLuz.png";
import Atropello from "../../images/atropello.png";
import Switch from "../Switch/Index";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

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
  const [active, setActive] = useState(0);
  const [activeText, setactiveText] = useState(0);

  const ClickTab = (index) => {
    setActive(index);
  };
  const ClickVerMore = (index) => {
    setactiveText(index);
  };

  const montoRobo = () => {
    if (activeRobo[0]) {
      setMonto(monto - 15);
      setActiveRobo([false, false]);
    } else {
      setMonto(monto + 15);
      setActiveRobo([true, false]);
    }
  };
  const montoChoque = () => {
    if (activeChoque[0]) {
      setMonto(monto - 20);
      setActiveChoque([false, false]);
    } else {
      setMonto(monto + 20);
      setActiveChoque([true, false]);
    }
  };
  const montoAtropello = () => {
    if (activeAtropello[0]) {
      setMonto(monto - 50);
      setActiveAtropello([false, false]);
    } else {
      setMonto(monto + 50);
      setActiveAtropello([true, false]);
    }
  };
  return (
    <div className="TabCoberturas">
      <h2 className="colorGray  TabCoberturas__title">
        Agrega o quita coberturas
      </h2>
      <div className="TabCoberturas__tab">
        <div
          className={`TabCoberturas__tabItem ${active === 0 ? "active" : ""}`}
          onClick={() => ClickTab(0)}
        >
          Protege a tu Auto
        </div>
        <div
          className={`TabCoberturas__tabItem ${active === 1 ? "active" : ""}`}
          onClick={() => ClickTab(1)}
        >
          Protege a los que te rodean
        </div>
        <div
          className={`TabCoberturas__tabItem ${active === 2 ? "active" : ""}`}
          onClick={() => ClickTab(2)}
        >
          Mejora tu plAN
        </div>
      </div>
      <div className="TabCoberturas__Body">
        <div className="desktop">
          <div
            className={`TabCoberturas__BodyItem  ${
              active === 0 ? "active" : ""
            }`}
          >
            <Accordion allowZeroExpanded>
              <div className="">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexItemTab">
                        <img src={LlantaRobada} alt="" />
                        <div>
                          <p className="colorGray">Llanta Robada</p>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <div
                    onClick={() => {
                      montoRobo();
                    }}
                    className="addItemTab"
                  >
                    <span className="actionTab">
                      {activeRobo[0] ? "-" : "+"}
                    </span>
                    <span className="actionTabText colorAcian">
                      {activeRobo[0] ? "Quitar" : "Agregar"}
                    </span>
                  </div>
                  <AccordionItemPanel>
                    <p className="itemPanelBody">
                      He salido de casa a las cuatro menos cinco para ir a la
                      academia de ingles de mi pueblo (Sant Cugat, al lado de
                      Barcelona) con mi bici, na llego a la academia que está en
                      el centro del pueblo en una plaza medio-grande y dejo
                      donde siempre la bici atada con una pitón a un sitio de
                      esos de poner las bicis y mucho más
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
              {activeChoque[1]}
              <div
                className={`llanta ${activeChoque[1] ? "hidden" : "nohidden"}`}
              >
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexItemTab">
                        <img src={Choque} alt="" />
                        <div>
                          <p>Choque y/o pasarte la luz roja </p>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <div
                    onClick={() => {
                      montoChoque();
                    }}
                    className="addItemTab"
                  >
                    <span className="actionTab">
                      {activeChoque[0] ? "-" : "+"}
                    </span>
                    <span className="actionTabText colorAcian">
                      {activeChoque[0] ? "Quitar" : "Agregar"}
                    </span>
                  </div>

                  <AccordionItemPanel>
                    <p className="itemPanelBody">
                      He salido de casa a las cuatro menos cinco para ir a la
                      academia de ingles de mi pueblo (Sant Cugat, al lado de
                      Barcelona) con mi bici, na llego a la academia que está en
                      el centro del pueblo en una plaza medio-grande y dejo
                      donde siempre la bici atada con una pitón a un sitio de
                      esos de poner las bicis y mucho más
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="flexItemTab">
                      <img src={Atropello} alt="" />
                      <div>
                        <p>Atropello en la vía Evitamiento </p>
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <div
                  onClick={() => {
                    montoAtropello();
                  }}
                  className="addItemTab"
                >
                  <span className="actionTab">
                    {activeAtropello[0] ? "-" : "+"}
                  </span>
                  <span className="actionTabText colorAcian">
                    {activeAtropello[0] ? "Quitar" : "Agregar"}
                  </span>
                </div>
                <AccordionItemPanel>
                  <p className="itemPanelBody">
                    He salido de casa a las cuatro menos cinco para ir a la
                    academia de ingles de mi pueblo (Sant Cugat, al lado de
                    Barcelona) con mi bici, na llego a la academia que está en
                    el centro del pueblo en una plaza medio-grande y dejo donde
                    siempre la bici atada con una pitón a un sitio de esos de
                    poner las bicis y mucho más
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div
            className={`TabCoberturas__BodyItem  ${
              active === 1 ? "active" : ""
            }`}
          >
            <h2 className="colorGray">Protege a los que te rodean</h2>
          </div>
          <div
            className={`TabCoberturas__BodyItem ${
              active === 2 ? "active" : ""
            }`}
          >
            <h2 className="colorGray">Mejora tu plan</h2>
          </div>
        </div>
        <div className="mobile">
          <div
            className={`TabCoberturas__BodyItem ${
              active === 0 ? "active" : ""
            }`}
          >
            <div
              className={`llanta ${activeChoque[1] ? "hidden" : "nohidden"}`}
            >
              <div className="itemTab">
                <div className="flexItemTab">
                  <div>
                    <img src={LlantaRobada} alt="" />
                    <p className="colorGray">Llanta Robada</p>
                  </div>
                  <div className="addItemTab">
                    <label className="switch">
                      <input type="checkbox" />
                      <span
                        onClick={() => {
                          montoRobo();
                        }}
                        className="slider round"
                      ></span>
                    </label>
                  </div>
                </div>

                <p
                  className={`itemPanelBody ${
                    activeText === 1 ? "active" : ""
                  }`}
                >
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis y mucho más
                </p>
                <span
                  className={`colorAcian itemTab__more ${
                    activeText === 1 ? "active" : ""
                  }`}
                  onClick={() => {
                    activeText === 1 ? ClickVerMore(0) : ClickVerMore(1);
                  }}
                >
                  {`${activeText === 1 ? "Ver Menos" : "Ver Más"}`}
                  {activeText === 1 ? <AiOutlineUp /> : <AiOutlineDown />}
                </span>
              </div>
            </div>
            <div className="itemTab">
              <div className="flexItemTab">
                <div>
                  <img src={Choque} alt="" />
                  <p className="colorGray">Choque y/o pasarte la luz roja </p>
                </div>
                <div className="addItemTab">
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      onClick={() => {
                        montoChoque();
                      }}
                      className="slider round"
                    ></span>
                  </label>
                </div>
              </div>

              <p
                className={`itemPanelBody ${activeText === 2 ? "active" : ""}`}
              >
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </p>
              <span
                className={`colorAcian itemTab__more ${
                  activeText === 2 ? "active" : ""
                }`}
                onClick={() => {
                  activeText === 2 ? ClickVerMore(0) : ClickVerMore(2);
                }}
              >
                {`${activeText === 2 ? "Ver Menos" : "Ver Más"}`}
                {activeText === 2 ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </div>
            <div className="itemTab">
              <div className="flexItemTab">
                <div>
                  <img src={Atropello} alt="" />
                  <p className="colorGray">Atropello en la vía Evitamiento </p>
                </div>
                <div className="addItemTab">
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      onClick={() => {
                        montoAtropello();
                      }}
                      className="slider round"
                    ></span>
                  </label>
                </div>
              </div>

              <p
                className={`itemPanelBody ${activeText === 3 ? "active" : ""}`}
              >
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </p>
              <span
                className={`colorAcian itemTab__more ${
                  activeText === 3 ? "active" : ""
                }`}
                onClick={() => {
                  activeText === 3 ? ClickVerMore(0) : ClickVerMore(3);
                }}
              >
                {`${activeText === 3 ? "Ver Menos" : "Ver Más"}`}
                {activeText === 3 ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </div>
          </div>
          <div
            className={`TabCoberturas__BodyItem  ${
              active === 1 ? "active" : ""
            }`}
          >
            <h2 className="colorGray">Protege a los que te rodean</h2>
          </div>
          <div
            className={`TabCoberturas__BodyItem  ${
              active === 2 ? "active" : ""
            }`}
          >
            <h2 className="colorGray">Mejora tu plan</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
