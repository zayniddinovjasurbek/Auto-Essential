import React from 'react';
import "./ourblogs.css"
// images
import img1 from './Rectangle 13.png'
import img2 from './Rectangle 14.png'
import img3 from './Rectangle 15.png'
// icons
import { FaRegClock } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";


const OurBlogs = () => {
  return (
    <div id="ourblogs" className='OurBlogs'>

      <div className='blogs-text-content'>
            <h1>Our Blogs</h1>
            <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>

        <div className='blogs-img-content'>

            <div className='img1'>
                <img src={img1} alt="img1"/>
                <h2>How to change engine oil at home?</h2>
                <a href='/#'>Read More</a> 
                <p> <FaRegClock /> 5 min  <BsCalendar2Date /> 12<sup>th</sup> Oct 2023 </p> 
            </div>
        
            <div>
                <img src={img2} alt="img2"/>
                <h2>Guide to prolong the life of engine oil</h2>
                <a href='/#'>Read More</a>
                <p> <FaRegClock /> 5 min  <BsCalendar2Date /> 12<sup>th</sup> Oct 2023 </p> 
            </div>
            <div>
                <img src={img3} alt="img3"/>
                <h2>How to take care of engine oil?</h2>
                <a href='/#'>Read More</a>
                <p> <FaRegClock /> 5 min  <BsCalendar2Date /> 12<sup>th</sup> Oct 2023 </p> 
            </div>

        
      </div>
        <div className='view-all-post'>
           <p><a href='/#'>View All Post</a></p> 
        </div>
    </div>
  );
}

export default OurBlogs;
