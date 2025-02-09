import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { IoMdSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./App.css";
import logo from "./assets/nn.png";

function App() {
  return (
    <>
      <ul className="header">
        <img src={logo} alt="logo" className="logo" />
        <li>Home</li>
        <li className="dropDown">
          <span id="insurance">
            Insurance <IoMdArrowDropdown className="icon" />
          </span>
          <ul className="options">
            <li>Life</li>
            <li>Car</li>
            <li>Fire</li>
          </ul>
        </li>
        <li>Claims</li>
        <li>Gallery</li>
        <li className="dropDown">
          About <IoMdArrowDropdown className="icon" />
        </li>
        <li className="dropDown">
          Contact Us <IoMdArrowDropdown className="icon" />
        </li>

        <IoMdSearch className="icon search" />
        <FaFacebookF className="icon fb" />
        <FaYoutube className="icon yt" />
      </ul>
    </>
  );
}

export default App;
