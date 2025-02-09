import './Section1.css'


const Section1 = (props) => {
  return (
    <div className='Sec1Con'>
      <ul>
        <li>Homepage &gt;</li> 
        <li>All insurance &gt;</li> 
        <li>Pension and Annuities</li>
      </ul>

      <h1>Life / Health Insurance</h1>

      <p className='p1'>
        We are here to help you protect your employees' retirement pension plan. 
        Call us today <br /> to get started. (592) 227-0440-3 Ext 239
      </p>

      <div className='Quote'>
        <div className='QuoteInput'>
          <div className="input-group">
            <h4>Product</h4>
            <select name="product" id="product">
                <option value="life">Life</option>
                <option value="life">Car</option>
                <option value="life">Fire</option>
            </select>
          </div>
          
          <div className="input-group">
            <h4>Email</h4>
            <input type='email' placeholder='Email' />
          </div>
          
          <div className="input-group">
            <h4>Name</h4>
            <input type='text' placeholder='Name' />
          </div>
          
          <button>Get a quote</button>
        </div>
      </div>


    </div>
  );
};

export default Section1;
