import React from 'react';
import styled from 'styled-components';
import {About} from '../Styles.js';
import Toggle from './Toggle.js';
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
  <div>
      <Faq>
        <h2>
            Any Questions? <span> FAQ </span>
        </h2>
        <AnimateSharedLayout>
        <Toggle title="how do i Started?">
        <div className="Questions">
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
        </div>
        </Toggle>

        <Toggle title="How Do I Started?">
        <div className="Questions">
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
        </div>
        </Toggle>

        <Toggle title="How Do I Started?">

        <div className="Questions">
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
        </div>
        </Toggle>

        <Toggle title="How Do I Started?">

        <div className="Questions">
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
        </div>
        </Toggle>
       </AnimateSharedLayout>
      </Faq>
  </div>
    );

}

const Faq = styled(About)`

 
display: block;
   span{
       display: block;
   }
   
   h2{
       padding-bottom: 2rem;
       font-weight: lighter;
   }

   .faq-line{
       background: #cccccc;
       height: 0.2rem;
       margin: 2rem 0rem;
       width: 100%;
   }

   .questions{
       padding: 3rem 0rem;
       cursor: pointer;
   }

   .answer{
       padding: 2rem 0rem;

       p{
           padding: 1rem 0rem;
       }
   }
`;

export default FaqSection;