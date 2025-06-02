import React from 'react';
import './Group.css';
import GroupImg from '../../assets/group insurance vector.png'; 
import grouptt from '../../assets/group.png'; 

const Group = () => {
  return (
    <div>
      <div className='group'>
        <ul>
          <li>Homepage &gt;</li> 
          <li>All insurance &gt;</li> 
          <li>Pension and Annuities</li>
        </ul>
        <h1 className='head'>Group Life Insurance</h1>
        <p className='par'>
          We are here to help you protect your home and personal property. Call us today <br/> to get started. (592) 227-0440-3 Ext 239
        </p>
        <button className='btn1'>Find an agent</button>
        <img className="Group" src={GroupImg} alt="group insurance vector" />
      </div>
      
      <div>
        <img className="text-img" src={grouptt} alt="Text Image" />
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

export default Group;
