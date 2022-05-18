import React from 'react';
import styled from 'styled-components';
import Rup4 from '../imgs/R4.png';
import { motion } from 'framer-motion';
import { titleAnim, photoAnim } from '../pages/Animation';

const AboutSection = () => {
  
 const Button ={
    show: {
    
      opacity: 1,
      transition: {
          ease:"easeOut",
          duration:10,
  
      },
    hidden:{
      opacity: 0.1,
      
    },  
 },
 };
  return (
    
       <About>
       <Description>
           <motion.div className='title'>
               <div className="hide">
                 <span className="text-2xl"> Hi,There 👋 I'M</span>
                   <motion.h2 > Rupen Bhimani,</motion.h2>
               </div>
               <div className="hide">
                   <motion.h2 variants={titleAnim} initial="hidden" animate="show">Work To Make Your <span>Dreams</span> Come True
                   </motion.h2>
               </div>
               {/* <div className="hide">
                   <h2>True</h2>
               </div> */}
           </motion.div>
           <motion.p>I’m a Web Developer. Working with my hands to make magic happen on the internet. </motion.p>
           <motion.button variants={Button} initial="hidden" animate="show">Contact Me</motion.button>
       </Description>
           <Image className="">
             <motion.img variants={photoAnim} initial="hidden" animate="show" className="p-6" src={Rup4} alt="Developer Img"/>
           </Image>
    </ About>
    
  );
}

//styled Components

const About = styled.div`
   min-height: 100vh;
   background-attachment: fixed;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding:0rem 11rem 6rem 11rem;
   color: white;

   ::before{
    content: url("https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg");
    opacity: 0.5;
    overflow: hidden;
    position: absolute;
    right: -10%;
    z-index: -1;
   }

`

const Description = styled.div`
  h2{
    font-weight: lighter;
  }

 
`

const Image = styled.div`

   /* flex: 1; */
   background-size: cover;
   width: 50vh;
   height:50vh;
   object-fit: cover;
   object-position: top;
   object-position: top;
   /* border-radius: 1rem; */
   
   
   img{
     border-bottom:7px solid red;
      border-top:7px solid cyan;
      backdrop-filter: blur(6px);
      /* border-right:7px solid red;  */
      /* border-left: cyan 7px solid; */
      border-bottom-right-radius: 10rem;
      border-top-left-radius: 10rem;

      /* border-style: double; */
    /* border-top: cyan 6px solid; */
      /* border-radius: 1rem;   */
    }
`

export default AboutSection;