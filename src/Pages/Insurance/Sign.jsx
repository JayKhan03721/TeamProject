import React, { useState } from "react";
import './Sign.css';
import signlogo from '../../assets/sign up vector.png';
import no1 from '../../assets/no1.png';
import no2 from '../../assets/no2.png';
import no3 from '../../assets/no3.png';
import no4 from '../../assets/no4.png';

const Sign = () => {
  return (
    <div className="Abcontainer">
      <div className="firstcun">
        <h1 className="ttp">Benefits of having an account</h1>
        <img className="singimg" src={no1} alt="signin-img" />
        <img className="singimg2" src={no2} alt="signin-img" />
        <img className="singimg3" src={no3} alt="signin-img" />
        <img className="singimg4" src={no4} alt="signin-img" />
        <h1 className="btm">All your policies. One place</h1>
      </div>
      <div className="secondcun">
        <img className="signlogo" src={signlogo} alt="signin-logo" />
        <form className="signup-form">
  <h2 className="h2">Create an account</h2>
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  
  <div className="pass">
    <input  type="password" name="password" placeholder="Password" required />
    <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
  </div>

  <div className="signbtns">
    <button className="iii"type="submit">Register</button>
    <button className="iii"type="submit">Sign Up</button>
  </div>

  <label>
    <input type="checkbox" name="rememberMe" /> By registering your details, you agree with our Terms & Conditions, and Privacy and Cookie Policy
  </label>
</form>


      </div>
    </div>
  );
};

export default Sign;
