import React from 'react';
import { GiCrossMark } from "react-icons/gi";
import Style from "../Header/Header.module.css"

function Header() {
  return <div className={Style.nav}>
    <div className={Style.text}><GiCrossMark className={Style.logo} />IGSTOUDIO</div>
    <div className={Style.home}>
        <div>Home</div>
        <div>Attorneys</div>
        <div>Practice Areas</div>
        <div>About Us</div>
    </div>
    <button type="button" className="btn btn-secondary btn-md">Contect Now</button>
  </div>;
}

export default Header;