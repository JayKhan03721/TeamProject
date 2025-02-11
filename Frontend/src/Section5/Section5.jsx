import './section5.css';
import personr from '../assets/personr.png';

const Section5 = (props) => {
  return (
    <div className="section5">
        <img className='person' src={personr} alt='Person'/>
      
      
      <div className="policy-type">
        <h1>Policy Type</h1>
        <h2>Term life</h2>
        <p>Term life insurance with a term of 10, 15, 20, or 30 years makes sense if:</p>
        <ul>
          <li>You support a partner, spouse, or children</li>
          <li>You're paying off debt, like a mortgage</li>
          <li>Your loved ones depend on your income</li>
        </ul>
        <p><b>Example:</b> You're married, in your 20s, and a new homeowner with a 30-year $250,000 mortgage. You get a 30-year term life insurance policy with $250,000 of coverage and name your spouse as the beneficiary. In case you pass away in the next 30 years, they can use the death benefit to pay off the mortgage and cover other costs.</p>
      </div>

      <hr /> {/* Separator */}

      <div className="policy-type">
        <h2>Final expense</h2>
        <p>Final expense or burial life insurance makes sense if:</p>
        <ul>
          <li>You're between 50 and 85 years old</li>
          <li>You want an affordable policy</li>
          <li>You only want your funeral and other final expenses covered</li>
        </ul>
        <p><b>Example:</b> You're 55 and planning for your retirement years. You want to make sure your loved ones don't have to pay for your burial and funeral costs when you pass away, so you estimate your final expenses and purchase an affordable policy for that amount.</p>
      </div>

      <hr /> {/* Separator */}

      <div className="policy-type">
        <h2>Short-term (one year)</h2>
        <p>One year or term life insurance coverage makes sense if:</p>
        <ul>
          <li>You want to try out life insurance</li>
          <li>You only want temporary coverage</li>
          <li>You're in between jobs and temporarily without employer-provided coverage</li>
        </ul>
        <p><b>Example:</b> You are 25, have a child, and aren't sure where to start with life insurance. You decide to get one year of highly affordable coverage so you can decide if you want to commit to a longer-term policy.</p>
      </div>

      <hr /> {/* Separator */}

      <div className="policy-type">
        <h2>Whole life</h2>
        <p>A permanent, whole life insurance policy makes sense if:</p>
        <ul>
          <li>You want to be covered no matter when you pass away</li>
          <li>You want the cash value feature and the option to take out a life insurance loan</li>
          <li>You want a fixed premium and hands-off cash value growth</li>
        </ul>
        <p><b>Example:</b> You have long-term dependents that will rely on you until you pass away, so you purchase whole life insurance to make sure they can claim the death benefit no matter when you die.</p>
      </div>

      <hr /> {/* Separator */}

      <div className="policy-type">
        <h2>Universal life</h2>
        <p>A permanent, universal life insurance policy makes sense if:</p>
        <ul>
          <li>You want to be covered no matter when you pass away</li>
          <li>You want the potential of a zero-cost policy or an adjustable premium</li>
          <li>You want the benefit of cash value and can afford the higher fees and risks associated with universal life's cash value growth setup</li>
        </ul>
        <p> <b>Example:</b> You want to make sure your kids are covered even if you die well into your senior years. While universal life has higher costs, fees, and risks than whole life, you can afford it and you like the potential of an adjustable premium or a no-cost policy.</p>
        <button className='btn'>Start your quote</button>
      </div>

      <div className='copy'>© 2022 Nalico Nafico</div>
    </div>
  );
};

export default Section5;
