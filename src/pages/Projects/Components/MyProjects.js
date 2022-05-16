import React from 'react';
import ProjectsCard from './ProjectsCard';
import styled from 'styled-components';
import BlackCodes from "../../../imgs/Bb.png";
import Bc from "../../../imgs/Bc.png";

const MyProjects = () => {

  const projects = [
    {
      title: "Strengthen reflex action",
      desc: "Photo booth fam kinfolk cold-pressed sriracha leggings ",
      img: BlackCodes,
      link: "https://www.towergame.app/",
    },
    
    {
      title: "Strengthen reflex action",
      desc: "a statement or account giving the characteristics of someone or something : a descriptive",
      img: Bc,
      link: "https://www.towergame.app/",
    },

    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words, or account that describes; ",
      img: BlackCodes,
      link: "https://www.towergame.app/",
    },

    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words, or account that describes; ",
      img: BlackCodes,
      link: "https://www.towergame.app/",
    },

    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words, or account that describes; ",
      img: BlackCodes,
      link: "https://www.towergame.app/",
    },

    {
      title: "Strengthen reflex action",
      desc: "Description definition, a statement, picture in words, or account that describes; ",
      img: BlackCodes,
      link: "https://www.towergame.app/",
    },

  ];


  return (
    
    <>
    <Container>
        <span className=" text-justify font-light ml-[36rem]  text-6xl">Development</span>
        <div className="md:flex md:flex-wrap bg-BackG  mt-20">
            {projects.map((projects, index) => (
              <ProjectsCard title={projects.title}  key={index}  desc={projects.desc} img={projects.img} link={projects.link} />
              ))}
        </div>
    </Container>
</>
  );
}

const Container = styled.div`
/* background-color: brown; */
background: url("https://blackcodes.ml/imgs/Untitle4.png");
padding-top: 1rem;
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;

`

export default MyProjects;