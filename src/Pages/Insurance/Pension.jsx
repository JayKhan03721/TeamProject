import React from "react";
import './pension.css';
import pension from'../../assets/pension and annutities vector.png'; 
import lower from'../../assets/lower text box.png'; 

const pensionA = () => {
  return (
    <div>
      <div className='pension'>
                    <ul>
                      <li>Homepage &gt;</li> 
                      <li>All insurance &gt;</li> 
                      <li>Pension and Annuities</li>
                    </ul>
                    <h1 className='head'>Pension and Annuities</h1>
                    <p className='par'>
                    We are here to help you protect your employees retirement pension plan. Call us today<br/> to get started. (592) 227-0440-3 Ext 239
                    </p>
                    <button className='btn1'>Find an agent</button>
                    <img className="Pension" src={pension} alt="pension Insurance Icon" />
                  </div>
                  
                  <div>
                  <img className="lower" src={lower} alt="lower Text Image" />
                  </div>
      
                  <button id="but2">Start your quote</button>
      
      
          
            
                  <footer className="copyright">
                    <i className="fa-regular fa-copyright"></i> 2022 Nalico Nafico
                  </footer>
    </div>
  );
};

export default pensionA;
