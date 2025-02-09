import './section2.css'

const Section2 = (props) => {

  return (

    <div className='Section2'>
      <div className='co1'>
        <h3>What is life insurance?</h3>
      <p>Purchasing life insurance allows you to provide a safety net for your loved ones in case you <br/> pass away. A life insurance policy is a contract stating that, as long as your premium is paid <br/> and the policy is active when you die, your beneticiarie can receive a death benefit payout <br/> to be used however they like — for final expenses, paying off outstanding debt, and even <br/> everyday costs.
      </p>
      </div>

      <div className='co2'> 
  <h3>Types of life insurance products</h3>
  <p>
    Life insurance policies generally fall into three categories: term, permanent, and final expense.
    Once you understand the difference, you can easily determine which is right for your beneficiaries' needs and your budget.
  </p>
  <ul>
    <li> <b>Term policies</b> last a set timeframe (often 1, 10, 15, 20, or 30 years) and are affordable.
    They're typically for supporting your loved ones in case you pass away unexpectedly.
    In some states, we also offer a "flexible term" policy via Nalico / Nafico — it allows you to adjust your coverage amount (up or down) without having to re-apply or get a new policy.</li>
    
    <li>
    <b>Permanent policies</b> last your entire lifetime, have cash value that grows, and are more expensive.
    </li>
  
    <li>
    <b>Final expense</b> policies are a more affordable type of permanent life insurance with a lower death benefit that's designed to cover your end-of-life costs
    </li>
  </ul>
    </div>

    <button id='Start-quote'>Start your quote</button>
      
    </div>
    );
};
export default Section2;