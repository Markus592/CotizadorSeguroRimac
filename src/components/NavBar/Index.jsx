import Logo from "../../images/logo.png";
import "../NavBar/Style.scss";
import IconPhone from "../../images/iconPhone.png";
const NavBar = () => {
  return (
    <header className="navBar">
      <div className="container headerWrapper">
        <img className="headerWrapper__logo" src={Logo} alt="Rimac" />
        <div className="navMenu">
          <span className="desktop">Tienes alguna duda</span>
          <a href="tel:(01) 411 6001" className="navMenu__contact">
            <img className="navMenu__img" src={IconPhone} alt="telefono" />
            <span className="navMenu__phone desktop">(01) 411 6001</span>
            <span className="navMenu__phone mobile">Llámanos</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
