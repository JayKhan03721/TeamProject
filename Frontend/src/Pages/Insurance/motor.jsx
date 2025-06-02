import React from 'react';
import './motor.css';
import motori from "../../assets/motori.png"; 
import motorte from "../../assets/moterte.png"; 


const Motor = () => {
  return (
    <div>
      <div className='Motor'>
        <ul>
          <li>Homepage &gt;</li> 
          <li>All insurance &gt;</li> 
          <li>Motor Insurance</li>
        </ul>
        <h1 className='head'>Motor Insurance</h1>
        <p className='par'>
          Choosing insurance for your car can be complex, but our local licensed agents can help. <br />
          Call us today! (592) 227-0440-3 Ext 239
        </p>
        <button className='btn1'>Find an agent</button>
        <img className="motor" src={motori} alt="motor insurance vector" />
      </div>
      
      <div>
        <img className="motorte" src={motorte} alt="motor Text Image" />
      </div>
      
      <div id="btn2">
        <button>Start your quote</button>
      </div>
      
      <footer className="copyright">
        <i className="fa-regular fa-copyright"></i> 2022 Nalico Nafico
      </footer>
    </div>
  );
};

export default Motor;
