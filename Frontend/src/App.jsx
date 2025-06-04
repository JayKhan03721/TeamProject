import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgMenuMotion } from "react-icons/cg";
import "./App.css";
import logo from "./assets/nn.png";
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Health from "./Pages/Insurance/health";
import Group from "./Pages/Insurance/Group";
import Contractor from "./Pages/Insurance/Contractor"; 
import Motor from "./Pages/Insurance/motor";
import Property from "./Pages/Insurance/property";
import Pension from "./Pages/Insurance/Pension";
import Sign from "./Pages/Insurance/Sign";




function App() {
  const navigate = useNavigate();
  

  return (
    <>
    
     <input type="checkbox" id="check" />
     <label for="check" className="open"></label>
          <img onClick={() => {navigate("/")}} src={logo} alt="logo" className="logo" />
      <ul className="header">
      <img onClick={() => {navigate("/")}} src={logo} alt="logo" className="logo1" />
        <li className="Nav" onClick={() => {navigate("/")}}>Home</li>

        <li className="dropDown Nav">
          <span className="dDlbl">
            Insurance <IoMdArrowDropdown className="icon" />
          </span>
          
          <ul className="options">
            <li onClick={() => {navigate("/insurance/health")}}> Health insurance</li>
            <li onClick={() => {navigate("/insurance/group")}}>Group Life Insurance</li>
            <li onClick={() => {navigate("/insurance/Contractor")}}>Contractor's insurance and bonds</li>
            <li onClick={() => {navigate("/insurance/motor")}}> Motor Insurance</li>
            <li onClick={() => {navigate("/insurance/property")}}> Property Insurance</li>
           <li onClick={() => {navigate("/insurance/Pension&Annuities")}}>Pension & Annuities</li>
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

        <div id="links">
    <div className="F"><FaFacebook /> </div>  
      <div className="Y"><FaYoutube /></div>
      <div className="W"><IoLogoWhatsapp /></div>
        </div>
        <div className="search-bar">
  <input type="text" placeholder="Search" />
  <button><IoMdSearch className="sear" /></button>
</div>

        <div ><button onClick={() =>{navigate ("nalico/nafico/log-in/sign-up")}}className="sign up">Sign Up</button></div>
        
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
        <Route path="/insurance/health" element={<Health />} />
        <Route path="/insurance/group" element={<Group />} />
        <Route path="/insurance/Contractor" element={<Contractor/>} />
        <Route path="/insurance/motor" element={<Motor/>} />
        <Route path="/insurance/property" element={<Property/>} />
        <Route path="/insurance/Pension&Annuities" element={<Pension/>}/>
        <Route path="nalico/nafico/log-in/sign-up" element={<Sign/>}/>
        
      </Routes>
    </>
  );
}

export default App;