import { useState } from "react";
import { LOGO_URL } from "../Backend/utils/constants";
import { Link } from "react-router-dom";


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
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>

   <button className="btn" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");}}>{loginBtn}</button>
    </ul>
  </div>
);
};

export default Header;