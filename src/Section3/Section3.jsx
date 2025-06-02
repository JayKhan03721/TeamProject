import './section3.css';
import Tab1 from '../assets/Tab1.png';
import tab2 from '../assets/tab2.png';
import tab3 from '../assets/tab3.png';
import tab4 from '../assets/tab4.png';

import Cards from './Cards';

const Section3 = (props) => {
  return (
    <div className='Section3'>
        <h3>Explore the types of life Insurance we offer.</h3>
        <div className="divisions">
          <Cards className="card1" img={<img src={Tab1} alt="tab1" />}>
              <h4>Term life Insurance</h4>
              <p>Term. Popular and
                  affordable, traditional term life insurance is for protecting your loved ones in case you pass while they still depend
                  on your income. Get coverage for 10, 15, 20, or 30 years.
              </p>
          </Cards>
          <Cards className="card2" img={<img src={tab2} alt="Final expense insurance icon" />}>
            <h4>Final expense insurance</h4>
            <p>Final expense. Also known as burial insurance, it's designed to cover your funeral, health care bills, and other costs after you pass away. It's an affordable policy with no medical exam.</p>
          </Cards>
          <Cards className="card3" img={<img src={tab3} alt="tab3" />}>
              <h4>Short-term life insurance</h4>
              <p>Term. Starting out with life insurance or have a temporary need? This unique policy provides one year of inexpensive coverage. There's no medical exam so you can quickly get a policy online.
              </p>
          </Cards>
          <Cards className="card4" img={<img src={tab4} alt="tab4" />}>
              <h4>Whole life insurance</h4>
              <p>Permanent. The most popular permanent policy, whole life provides coverage for your entire life at a fixed premium. Plus, it builds cash value at a fixed rate over time, which you can borrow from.
              </p>
          </Cards>
        </div>
        <div className="buttons">
            <button>See more types +</button>
            <button>Start your quote</button>
        </div>
    </div>
  );
};
export default Section3;