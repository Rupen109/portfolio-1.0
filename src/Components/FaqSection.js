import React from 'react';
import styled from 'styled-components';
import {About} from '../Styles.js';

const FaqSection = () => {
  return (
  <div>
      <Faq>
        <h2>
            Any Questions? <span> FAQ </span>
        </h2>
        <div className="Questions">
           <h4>How Do I Started?</h4>
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
           <div className='faq-line'>

           </div>
        </div>

        <div className="Questions">
           <h4>How Do I Started?</h4>
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
           <div className='faq-line'></div>
        </div>

        <div className="Questions">
           <h4>How Do I Started?</h4>
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
           <div className='faq-line'></div>
        </div>

        <div className="Questions">
           <h4>How Do I Started?</h4>
           <div className="answer">
               <p>lorem Lorem ipsom magi noodle panjabi</p>
               <p>
               Lorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabiLorem ipsom magi noodle panjabi.
               </p>
           </div>
           <div className='faq-line'>   </div>
        </div>
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