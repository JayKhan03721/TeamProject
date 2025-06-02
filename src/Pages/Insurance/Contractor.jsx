import React from 'react';
import './Contractor.css';
import text from '../../assets/ctext.png'; 
import contractorlogo from '../../assets/contractor vector icon.png'; 


const Contractor = () => {
  return <div>
          <div className='contractor'>
            <ul>
              <li>Homepage &gt;</li> 
              <li>All insurance &gt;</li> 
              <li>Pension and Annuities</li>
            </ul>
            <h1 className='head'>Contractor's insurance and bonds</h1>
            <p className='par'>
              We are here to help you protect your worksite, employees and equipment. Call us today <br/> to get started. (592) 227-0440-3 Ext 239
            </p>
            <button className='btn1'>Find an agent</button>
            <img className="conlogo" src={contractorlogo} alt="contractorlogo" />
          </div>
          
          <div>
            <img className="text-img" src={text} alt="text" />
          </div>
        
          <div id="btn2">
            <button>Start your quote</button>
          </div>
    
          <footer className="copyright">
            <i className="fa-regular fa-copyright"></i> 2022 Nalico Nafico
          </footer>
  </div>;
};

export default Contractor;
