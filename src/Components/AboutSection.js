import React from 'react';
import styled from 'styled-components';
import Rup4 from '../imgs/R4.png';
import { motion } from 'framer-motion';
import { titleAnim, photoAnim } from '../pages/Animation';
import { Link } from "react-router-dom";

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
                 <span className="text-3xl "> Hi,There 👋 I'M</span>
                   <motion.h2 className="text-8xl md:text-7xl"> Rupen Bhimani,</motion.h2>
               </div>
               <div className="hide">
                   <motion.h2 className="text-5xl md:text-7xl md:mt-0 mt-6" variants={titleAnim} initial="hidden" animate="show">Work To Make Your <span>Dreams</span> Come True
                   </motion.h2>
               </div>
               {/* <div className="hide">
                   <h2>True</h2>
               </div> */}
           </motion.div>
           <motion.p className="text-3xl md:text-3xl">I’m a Web Developer. Working with my hands to make magic happen on the internet. </motion.p>
           {/* <motion.button as={Link} to="/work" variants={Button} initial="hidden" animate="show">
            Contact Me
            </motion.button> */}
            <Link to="/contact" className="w-32 flex justify-center p-3 border-[#23D997] hover:bg-[#23d997] text-center text-2xl text-white duration-200 border-2 md:p-[1rem 2rem]">
                    Hire Me
                  </Link>
       </Description>
           <Image className="PersonalPhoto">
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
  
      @media (max-width:500px){
        
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden !important;
        /* min-width: max-content; */
        /* width: 75rem; */
        flex-direction:column-reverse;

   }

   ::before{
    content: url("https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg");
    opacity: 0.5;
    overflow: hidden;
    position: absolute;
    right: -10%;
    z-index: -1;
    overflow: hidden;
   }
   ::before{
    @media (max-width: 500px){
      content :none;
    }
   }

`

const Description = styled.div`
  h2{
    font-weight: lighter;
  }
  .title{
    @media (max-width: 500px){
      overflow: hidden;
      overflow: hidden;
      /* display: flex; */
      /* flex-direction: column; */
      margin-top: -21rem;
      /* justify-content: center; */
      /* align-items: center; */
      /* max-width: max-content; */
      /* justify-items: center; */
    }
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
   
   @media (max-width:500px){

    width: 25rem;
    overflow: hidden;
    /* margin-left: -6rem; */
    align-items: center;
    justify-content: center;
    margin-top: -20rem;
    
   }
   
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

    @media (max-width:500px){
      content: none;
      
    }
`

export default AboutSection;