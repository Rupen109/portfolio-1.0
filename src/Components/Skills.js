import React from 'react';
import styled from 'styled-components';
import fd from '../imgs/web-development.png';
import js from '../imgs/js-format.png';
import idea from '../imgs/idea.png';


const Skills = () => {
  return (
    <>               
 
    <Container>

      <section className="text-gray-600  body-font">
        <div className="container px-16 py-16 mx-auto">
          <div className="flex flex-wrap -m-">

          <div className="flex flex-wrap w-full flex-col items-center text-center">
                    <h1 className="sm:text-7xl text-2xl font-medium title-font mb-2 text-white">Things <span>I Love</span></h1>
                    <div className="h-1 mt-9 w-32 bg-cyan-300 rounded"></div>
                </div>
      
            {/* <div className="p-4 flex flex-col mt-16 ml-[55rem] lg:w-1/3 h-[20rem]">
              <div className="h-full backdrop-blur-lg border-[1px] border-blue-800 bg-opacity-90 px-8 pt-6 pb-24 rounded-lg overflow-hidden  relative">

                <div className="text-[#CCCCCC] text-lg">1. class <span> Person󠁻󠁻󠁻󠁻󠁻 ｛  </span></div>
                <div className="text-[#CCCCCC] text-lg">2. constructor()｛ <span>  </span></div>
                <div className="text-[#CCCCCC] text-lg">3. this.name =  <span> "Rupen Bhimani";</span> </div>
                <div className="text-[#CCCCCC] text-lg">4.  this.traits = <span>  ["DESIGN", "DEV"]; </span></div>
                <div className="text-[#CCCCCC] text-lg">5.  this.traits = this.age = new Date().getFullYear() - 2001; <span>  </span></div>
                <div className="text-[#CCCCCC] text-lg">6.    ｝  <span>  </span></div>
                <div className="text-[#CCCCCC] text-lg">7.  ｝  <span>  </span></div>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                </div>
              </div>
         
            </div> */}
            <section className="text-gray-600 body-font">
              <div className="container px-5  py-24 mt-4 mx-auto">
                <div className="flex flex-wrap  -m-">
                  <div className="p- scroll mx-auto  lg:w-1/4">
                    <div className="h-3/4 bg-black border-y-2 shadow-lg shadow-slate-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <img className=" w-[3rem] h-[3rem] rounded-full mx-auto" src={fd} alt="Developer Img" />

                      <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">FrontEnd</h1>
                      <p className="leading-relaxed text-xl text-white mb-3">I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.</p>
                      <a className="text-indigo-500 inline-flex items-center"/>Learn More
                       
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      </div>
                    </div>
                  </div>
                  <div className="p- mx-auto lg:w-1/4">
                    <div className="h-3/4 bg-black border-y-2 shadow-lg shadow-slate-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <img className=" w-[3rem] h-[3rem] rounded-full mx-auto" src={js} alt="Developer Img" />
              
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Javascript</h1>
                      <p className="leading-relaxed text-xl text-white mb-3">I just extremely love javascript, I can’t even express how much I love javascript with just a few lines.</p>
                      <a className="text-indigo-500 inline-flex items-center"/>Learn More
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        
                        
                      </div>
                    </div>
                  </div>
                  <div className="p- mx-auto lg:w-1/4">
                    <div className="h-3/4 bg-black border-y-2 shadow-lg shadow-slate-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <img className=" w-[3rem] h-[3rem] rounded-full mx-auto" src={idea} alt="Developer Img" />

                      <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Creative Coding</h1>
                      <p className="leading-relaxed text-xl text-white mb-3">I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.</p>
                      <a className="text-indigo-500 inline-flex items-center" />Learn More
          
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Container>
  </>
  )
};

const Container = styled.div `
   ::before{
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");
    opacity: 0.4;   
    overflow: hidden;
    position: absolute;
    right: -10%;
    top: 250%;
    /* z-index: -1; */
   }
`


export default Skills;