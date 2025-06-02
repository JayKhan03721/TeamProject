import React from 'react';
import protext from'../../assets/protext.png'; 
import proimg from'../../assets/property insurance tab.png'; 
import './property.css';

const Property = () => {
  return (
    <div>
      <div className='property'>
              <ul>
                <li>Homepage &gt;</li> 
                <li>All insurance &gt;</li> 
                <li>Pension and Annuities</li>
              </ul>
              <h1 className='head'>Property Insurance</h1>
              <p className='par'>
              We are here to help you protect your home and personal property. Call us today<br/> to get started. (592) 227-0440-3 Ext 239
              </p>
              <button className='btn1'>Find an agent</button>
              <img className="proimg" src={proimg} alt="property Insurance Icon" />
            </div>
            
            <div>
            <img className="protext" src={protext} alt="property Text Image" />
            </div>
          
            <div id="btn2">
              <button>Start your quote</button>
            </div>

            <button id="no3">See More</button>


    
      
            <footer className="copyright">
              <i className="fa-regular fa-copyright"></i> 2022 Nalico Nafico
            </footer>
    </div>
  );
};

export default Property;
/*


}*/