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
        <Toggle title="How do i Started?">
        <div className="Questions">
           <div className="answer">
               <p>From First Year Of Collage I Know About Web Dev And Get Interested, So My Web Dev Journey Started From That Point.</p>
               {/* <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p> */}
           </div>
        </div>
        </Toggle>

        <Toggle title="My Resources">
        <div className="Questions">
           <div className="answer">
               <p>I Have Learned Web Dev From Free Sources Like Youtube,Google (Some Tutorials). etc</p>
               {/* <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p> */}
           </div>
        </div>
        </Toggle>

        <Toggle title="Experience In IT Industry?">

        <div className="Questions">
           <div className="answer">
               <p>I Have Almost 2+ Years Experience In IT Industry</p>
               {/* <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p> */}
           </div>
        </div>
        </Toggle>

        <Toggle title="Have Any More QNA?">

        <div className="Questions">
           <div className="answer">
               <p>Please Contact Me.</p>
               {/* <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p> */}
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