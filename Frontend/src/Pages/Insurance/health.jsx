import React from 'react';
import heart from'../../assets/health insurance icon.png'; 
import tt from'../../assets/tt.png'; 
import './Styles.css';


const Health = () => {
  return (
    <div>
      <div className="Health">
      <ul>
        <li>Homepage &gt;</li> 
        <li>All insurance &gt;</li> 
        <li>Pension and Annuities</li>
      </ul>
        <h1 className="HI">Health Insurance</h1>
        <p className="HI_p">
          Is your most important asset protected from uncertainties? Our local licensed agents can <br />
          help with health insurance.
        </p>
        <div className="btn-1">
          <button>Find an agent</button>
        </div>
        <img className="heart" src={heart} alt="Health Insurance Icon" />
      </div>

      <div>
        {<img className="text" src={tt} alt="Text Image" />}
      </div>

      <div id="btn-2">
        <button>See More</button>
      </div>
      <div id="btn-3">
        <button>Start your quote</button>
      </div>

      <div className="copyright">
        <i className="fa-regular fa-copyright"></i>2022 Nalico Nafico
      </div>
    </div>
  );
};

export default Health;
