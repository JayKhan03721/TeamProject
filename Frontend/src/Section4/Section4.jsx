import './section4.css';
import shieldr from '../assets/shieldr.png';

const Section4 = (props) => {
  return (
    <div className="section4">
      <div className='block1'>
        <p>
        Our Individual Life and Health Insurance line has a variety of products designed to meet the needs at every stage in life.
        </p>
      </div>
      <div className='block2'>
        <ul>
            <li>Whole of Life</li>
            <li>Guaranteed Protector— an special whole of life plan with rates that are lower for persons with
                non-hazardous occupations
            </li>
            <li>10, 15 and 20 Year Limited Payment Whole of Life Plans</li>
            <li>Life Paid-up plans at ages: 50, 55, 60 and 65 years</li>
            <li>Juvenile Estate Builder</li>
            <li>10, 15 and 20 Year Endowment</li>
        </ul>
      </div>
      <button className='start-btn'>Start your Quote</button>

      <div className='lifecon'>
      <div className='headr'><h3>Which life insurance policy is right for me?</h3></div>  
        <div className='textr'> 
        <p>Consider your budget and your reasons for getting life insurance when determining which type of life policy is best for you.
            Do you want to make sure your income is replaced in case you die before you retire? Or do you need coverage no matter when
            you pass? Explore these quick tips for narrowing down your options.
        </p>
        </div>    
      </div>
      <div>
        <img className='shieldr' src={shieldr} alt='shield'/>
      </div>
    </div>
  );
};

export default Section4; // Correct export for Section4
