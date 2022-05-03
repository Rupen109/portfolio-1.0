import React from 'react';
import styled from 'styled-components';
import Rup4 from '../imgs/R4.png';
// import home from '../imgs/home.svg';

const AboutSection = () => {
  return (
       
       <About>
       <Description>
         
           <div className='title'>
               <div className="hide">
                 <span>Hi, There My Name is </span>
                   <h2> Rupen Bhimani</h2>
               </div>
               <div className="hide">
                   <h2>Work To Make Your <span>Dreams</span> Come True
                   </h2>
               </div>
               {/* <div className="hide">
                   <h2>True</h2>
               </div> */}
           </div>
           <p>I’m a Web Developer. Working with my hands to make magic happen on the internet.  </p>
           <button>Contact Me</button>
       </Description>
           <Image>
             <img src={Rup4} alt="Developer Img"/>
           </Image>
    </ About>
    
  );
}

//styled Components

const About = styled.div`
   min-height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`

const Description = styled.div`
  
  h2{
    font-weight: lighter;
  }
`

const Image = styled.div`
   flex: 1;
   background-size: cover;
  img{
    width: 45vh;
    height: 45vh;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    object-position: top;
    border: 3px solid #65FEDA;
  }  
`

export default AboutSection;