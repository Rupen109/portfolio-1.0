import React from 'react';
import Rupen from '../imgs/Rupen.jpg';

const AboutSection = () => {
  return (
    <div>
       <div className='description'>
           <div className='title'>
               <div className="hide">
                   <h2>We Work To Make</h2>
               </div>
               <div className="hide">
                   <h2>Your <span>Dreams</span> Come
                             
                   </h2>
               </div>
               <div className="hide">
                   <h2>True</h2>
               </div>
           </div>
           <p>I’m a software engineer specializing in building and occasionally designing exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
           <button>Contact Us</button>
       </div>
           <div className="image">
             <img src={Rupen} alt="Developer Img"/>
           </div>
    </div>
  );
}

export default AboutSection;