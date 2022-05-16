import React from "react";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactMe from "./pages/ContactMe";
import MyProjects from "./pages/Projects/Components/MyProjects";
import {Routes,Route} from "react-router-dom";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import FaqSection from "./Components/FaqSection";


function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />

    <Routes> 
      <Route path="/" exact element={<AboutUs />} />
      <Route path="/work" exact element={<MyProjects />} />
      <Route path="/contact" exact element={<ContactMe />} />     
    </Routes> 
     
    </div>
  );
}

export default App;
