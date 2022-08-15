import style from "../styles/Home.module.css";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};

export default Layout;
