import React from "react";
import Nav from "../../Components/Navigation/index.js";
import style from "./style.css";

const Header = () => {
  return <div className={style.header}>HOME
      <Nav/>
  </div>;
};
export default Header;