import { NavLink } from "react-router-dom";

import style from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <NavLink to="/" className={style.logo}>
      MeraMade
    </NavLink>
  );
};

export default HeaderLogo;
