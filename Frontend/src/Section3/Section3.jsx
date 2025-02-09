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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus maiores animi! Facere aspernatur totam molestiae. Libero sapiente cupiditate quia temporibus, aperiam omnis esse iste hic ea. Optio, suscipit earum.</p>
        </Cards>
        <Cards img={<MdPeopleOutline />}>
            <h4>Final expense insurance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus maiores animi! Facere aspernatur totam molestiae. Libero sapiente cupiditate quia temporibus, aperiam omnis esse iste hic ea. Optio, suscipit earum.</p>
        </Cards>
        <Cards img={<FaRegHourglass />}>
            <h4>Short-term life insurance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus maiores animi! Facere aspernatur totam molestiae. Libero sapiente cupiditate quia temporibus, aperiam omnis esse iste hic ea. Optio, suscipit earum.</p>
        </Cards>
        <Cards img={<MdOutlineHealthAndSafety />}>
            <h4>Whole life insurance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus maiores animi! Facere aspernatur totam molestiae. Libero sapiente cupiditate quia temporibus, aperiam omnis esse iste hic ea. Optio, suscipit earum.</p>
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