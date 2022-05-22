import NavBar from "./NavBar/Index";
import "../styles/Layout.scss";
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <div className="children">{children}</div>
    </>
  );
};
