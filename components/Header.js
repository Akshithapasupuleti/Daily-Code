import { useState } from "react";
import { LOGO_URL } from "../Backend/utils/constants";

const Header = () => {

  const [loginBtn,setLoginBtn]=useState("Login");


  return (
  <div className="header">
    <div className="logo">
      <img
        src={LOGO_URL}
      />
    </div>
    <ul className="nav-items">
    <li>Home</li>
    <li>Cart</li>
    <li>Contact</li>

   <button className="btn" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");}}>{loginBtn}</button>
    </ul>
  </div>
);
};

export default Header;