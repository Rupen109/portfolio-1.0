import React from 'react';
import ProjectsCard from './ProjectsCard';
import styled from 'styled-components';
import BlackCodes from "../../../imgs/Bb.png";
import Css from "../../../imgs/css-styles.png";
import shreebai from "../../../imgs/shreebai.png"
import dhinga from "../../../imgs/Dhinga.png";
import dashboard from "../../../imgs/dashboard.png";
import twit from "../../../imgs/twitt.png";
import google from "../../../imgs/Google.png";
import quiz from "../../../imgs/quizapp.png"
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../pages/Animation';

const MyProjects = () => {

  const projects = [
    {
      title: "Twitt App",
      desc: "Photo booth fam kinfolk cold-pressed sriracha leggings ",
      img: twit,
      link: "https://firebase-twitt-post.vercel.app/auth/Login",
    },

    {
      title: "Dhinga Masti Game Site",
      desc: "a statement or account giving the characteristics of som",
      img: dhinga,
      link: "https://dhinga-masti.netlify.app/",
    },
    {
      title: "FullStack Dashboard",
      desc: "Description definition, a statement, picture in words ",
      img: dashboard,
      link: "https://fullstack-dashboard.vercel.app/login",
    },
    {
      title: "Black Codes",
      desc: "Description definition, a statement, picture in words ",
      img: BlackCodes,
      link: "https://blackcodes.ml/",
    },


    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words ",
      img: google,
      link: "https://www.towergame.app/",
    },

    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words ",
      img: quiz,
      link: "https://www.towergame.app/",
    },

  ];


  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Container>
        <span className=" text-justify font-light md:ml-[38rem] ml-[22rem] text-6xl">Development</span>
        <div className="md:flex justify-center  md:flex-wrap mt-12 md:-ml-12 ">
          {projects.map((projects, index) => (
            <ProjectsCard title={projects.title} key={index} desc={projects.desc} img={projects.img} link={projects.link} />
          ))}
        </div> 
      </Container>
    </motion.div>
  );
}

const Container = styled.div`
/* background-color: brown; */
background: url("https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg");
right: 400%;
margin-top: 50px;
padding-top: 1rem;
background-attachment: fixed;
background-size: cover;
/* scroll-behavior: smooth; */

`

export default MyProjects;