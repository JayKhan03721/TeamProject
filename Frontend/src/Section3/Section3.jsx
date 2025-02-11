import './section3.css'
import { LuCalendarClock } from "react-icons/lu";
import { MdPeopleOutline } from "react-icons/md";
import { FaRegHourglass } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import Cards from './Cards';

const Section3 = (props) => {

  return (
    <div className='Section3'>
        <h3>Explore the types of life Insurance we offer.</h3>
        <div className="divisions">
        <Cards img={<LuCalendarClock />}>
            <h4>Term life Insurance</h4>
            <p>Term. Popular and
                affordable, traditional term life insurance is for protecting your loved ones in case you pass while they still depend
                on your income. Get coverage for 10, 15, 20, or 30 years.
            </p>
        </Cards>
        <Cards img={<MdPeopleOutline />}>
            <h4>Final expense insurance</h4>
            <p>Final expense. Also known as burial insurance, it's designed to cover your funeral, health care bills, and other costs after you pass away. It's an affordable policy with no medical exam.
            </p>
        </Cards>
        <Cards img={<FaRegHourglass />}>
            <h4>Short-term life insurance</h4>
            <p>Term. Starting out with life insurance or have a temporary need? This unique policy provides one year of inexpensive coverage. There's no medical exam so you can quickly get a policy online.
            </p>
        </Cards>
        <Cards img={<MdOutlineHealthAndSafety />}>
            <h4>Whole life insurance</h4>
            <p>Permanent. The most popular permanent policy, whole life provides coverage for your entire life at a fixed premium. Plus, it builds cash value at a fixed rate over time, which you can borrow from.
            </p>
        </Cards>
        </div>
        <div className="buttons">
            <button>See more types +</button>
            <button>Start your qoute</button>
        </div>
    </div>
    );
};
export default Section3;