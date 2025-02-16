import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./App.css";
import logo from "./assets/nn.png";
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <ul className="header">
        <li>
          <img src={logo} alt="logo" className="logo" />
        </li>

        <li className="Nav" onClick={() => {navigate("/")}}>Home</li>

        <li className="dropDown Nav">
          <span className="dDlbl">
            Insurance <IoMdArrowDropdown className="icon" />
          </span>
          <ul className="options">
            <li onClick={() => {navigate("/insurance/life")}}>Life Insurance</li>
            <li>Car Insurance</li>
            <li>Fire Insurance</li>
          </ul>
        </li>

        <li className="Nav">Claims</li>

        <li className="Nav">Gallery</li>

        <li className="dropDown Nav">
          <span className="dDlbl">
            About <IoMdArrowDropdown className="icon" />
          </span>
          <ul className="options">
            <li>Our Company</li>
            <li>Our President</li>
            <li>Work Force</li>
          </ul>
        </li>

        <li className="dropDown Nav">
          <span className="dDlbl">
            Contact Us <IoMdArrowDropdown className="icon" />
          </span>
          <ul className="options">
            <li>Email</li>
            <li>whatsApp</li>
            <li>Phone</li>
          </ul>
        </li>

        <li id="links">
          <IoMdSearch className="icon search" />
        </li>
        <li id="links">
          <FaFacebookF className="icon fb" />
        </li>
        <li id="links">
          <FaYoutube className="icon yt" />
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1></Section1>
              <Section2></Section2>
              <Section3></Section3>
              <Section4></Section4>
              <Section5></Section5>
            </>
          }
        />
        <Route path="/insurance/life" element={<Section4 />} />
      </Routes>
    </>
  );
}

export default App;
