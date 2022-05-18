import React from 'react';
import styled from 'styled-components';
import Node from '../imgs/NodeJS.png';
import react from '../imgs/ReactJS.png';
import tailwind from '../imgs/TailwindCSS.png';
import git from '../imgs/Git.png';
import Js from '../imgs/Js.png';
import GitHub2 from '../imgs/GitHub2.png';
import Html from '../imgs/Html.png';
import FireBase from '../imgs/Firebase.png';                                    
import Netlify from '../imgs/Netlify.png';
import Heroku from '../imgs/Heroku.png';
import Figma from '../imgs/Figma.png';
import Photoshop from '../imgs/Photoshop.png';

const ServicesSection = () => {
    return (
        <Services>
            <div className="description">
                <h2>About <span> Skills </span> </h2>
                <Line>
                </Line>
                {/* <Title> 
                    <h3>Full Stack Development
                    <h3>Fopedjgf</h3>
                    </h3>
                </Title> */}
                  <TitleLeft>
                     Development
                  </TitleLeft>
                <Cards>
                    <Card>
                        <div className="icon">
                        <img src={Node} alt="NodeJs" />
                        <h3>Node Js</h3>
                        </div>
                      
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={react} alt="ReactJs" />
                        <h3>React Js</h3>
                        </div>
                       
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={git} alt="git" />
                        <h3>Git</h3>
                        </div>
                        
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={tailwind} alt="git" />
                        <h3>Tailwind Css</h3>
                        </div>
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={Js} alt="git" />
                        <h3>Javascript</h3>
                        </div>
                    </Card>
                    
                    <Card>
                        <div className="icon">
                        <img src={GitHub2} alt="git" />
                        <h3>Git Hub</h3>
                        </div>
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={Html} alt="git" />
                        <h3>Html</h3>
                        </div>
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={tailwind} alt="git" />
                        <h3>Tailwind Css</h3>
                        </div>
                    </Card>
                </Cards>
               
            </div>
            
                <div className='tools'>
                   <TitleRight>
                        Tools
                   </TitleRight>

                <DecRight>
                    <DecCard>
                    <div className="icon">
                    <img src={FireBase} alt="git" />
                    <h3>FireBase</h3>
                    </div>  
                    </DecCard>

                    <DecCard>
                    <div className="icon">
                        <img src={Netlify} alt="git" />
                        <h3>Netlify</h3>
                        </div>  
                    </DecCard>       

                    <DecCard>
                    <div className="icon">
                        <img src={Heroku} alt="git" />
                        <h3>Heroku</h3>
                        </div>  
                    </DecCard>      

                    <DecCard>
                    <div className="icon">
                        <img src={Figma} alt="git" />
                        <h3>Figma</h3>
                        </div>  
                    </DecCard>   

                    <DecCard>
                    <div className="icon">
                        <img src={Photoshop} alt="git" />
                        <h3>Photoshop</h3>
                        </div>  
                    </DecCard>   

                </DecRight>
                </div>
            
        </Services>


    );
}

const Services = styled.div`
    min-height: 100vh;
   display: flex;
   flex-direction: row;
   padding: 5rem 10rem;
   color: white;

   h2{
     margin-left: 450px;
   }
`

const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 3rem 0rem 0rem ;
   width: 40rem;
   height: 20rem;
   
`
const Card = styled.div`
   
   img{
     width: 4rem;
     height: 4rem;
     margin: 1rem 6rem 1rem 0rem; 
   }
`

const Line = styled.div`
   background-color: aqua;
   height: 0.2rem;
   width: 8rem;
   margin: 2rem 1rem 1rem 35rem;
   border-radius: 40px;
   
`
const Title = styled.div `
   margin: 4rem 0rem -4rem -14rem;
   
   h3{
       display: flex;
       color: #23d997;
       flex-direction: row;
       margin-left: 25rem;
       
   }
`

const TitleLeft = styled.div`
     font-size: 30px;
     background-color: #0A162C;
     margin: 4rem 26rem 0rem 12rem;
     padding: 0.7rem 1rem;
     color: #23d997;
     
`
const TitleRight = styled.div`
   font-size: 30px;
     background-color: #0A162C;
     margin: 11rem 17rem 0rem 8rem;
     padding: 0.7rem 1rem;
     color: #23d997;

`

const DecRight = styled.div`
display: flex;
   flex-wrap: wrap;
   margin: 5rem 6rem 0rem;
   width: 18rem;
   height: 20rem;

   h3{
       /* margin-left: -0.5rem; */
   }
`

const DecCard = styled.div`
img{
     margin: 1rem 6rem 1rem 0rem; 
   }
`


export default ServicesSection;