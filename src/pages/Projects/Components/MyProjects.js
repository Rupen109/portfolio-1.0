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
      desc: "An App in which user can login and then share thoughts.",
      img: twit,
      link: "https://firebase-twitt-post.vercel.app/auth/Login",
    },

    {
      title: "Dhinga Masti Game Site",
      desc: "Dhinga Masti is the app where kids play various game",
      img: dhinga,
      link: "https://dhinga-masti.netlify.app/",
    },
    {
      title: "FullStack Dashboard",
      desc: "An FullStack dashboard where admin have database and allow user to login.",
      img: dashboard,
      link: "https://fullstack-dashboard.vercel.app/login",
    },
    {
      title: "Black Codes",
      desc: "Black codes is the Website where various javascript projects ideas are there and codes are also available",
      img: BlackCodes,
      link: "https://blackcodes.ml/",
    },


    {
      title: "Strengthen reflex action",
      desc: "google clone",
      img: google,
      link: "https://rupen109.github.io/googleClone/",
    },

    {
      title: "Quiz App",
      desc: "quiz app for in javascript",
      img: quiz,
      link: "https://rupen109.github.io/quizapp/",
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