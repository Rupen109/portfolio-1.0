import React from 'react';
import { motion } from 'framer-motion';


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

const ProjectsCard = ({title,desc,img,link}) => {
  return (

    <section className="text-gray-600 body-font">
    <div className="container py-12 -mx-6 ">
      <div className=" -m-4 ">
        <div className="p-4 md:w-[25rem] md:h-[31rem] md:ml-32">
          <div className="h-full p-4 backdrop-blur-2xl border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-52 md:h-36 w-full rounded-xl object-cover object-center" src={img} alt="blog"/>
            <div className="p-6 ">
              <h1 className="title-font text-2xl font-medium text-white mb-3">{title}</h1>
              <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
              <p className="leading-relaxed text-lg mb-3">{desc}</p>
              <div className="flex items-center flex-wrap ">
               
           <motion.button as={link} to="/contact" className="p-2 text-base" variants={Button} initial="hidden" animate="show"> View More</motion.button>
           
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  );
}

export default ProjectsCard;