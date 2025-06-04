// Layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import logo from "./assets/nn.png";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./App.css";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER CODE */}
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="open"></label>
      <img onClick={() => navigate("/")} src={logo} alt="logo" className="logo" />
      <ul className="header">
        <img onClick={() => navigate("/")} src={logo} alt="logo" className="logo1" />
        <li className="Nav" onClick={() => navigate("/")}>Home</li>
        
        {/* Dropdowns... */}
        {/* Your header continues here (Insurance, About, etc.) */}

        <div id="links">
          <div className="F"><FaFacebook /></div>
          <div className="Y"><FaYoutube /></div>
          <div className="W"><IoLogoWhatsapp /></div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button><IoMdSearch className="sear" /></button>
        </div>
        <div>
          <button onClick={() => navigate("/nalico/nafico/log-in/sign-up")} className="sign up">Sign Up</button>
        </div>
      </ul>

      {/* PLACEHOLDER FOR CHANGING CONTENT */}
      <Outlet />
    </>
  );
}

export default Layout;
