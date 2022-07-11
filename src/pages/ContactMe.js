import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../pages/Animation';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = () => {
 
  const diff = () => toast.dark("Response have been send successfully ");
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s9s65eg', 'template_bin7gjg', form.current, 'IF4l5RiOAVPdSZ83W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <motion.section variants={pageAnimation} initial="hidden" animate="show" className="text-gray-600  body-font relative">
<form  ref={form} onSubmit={sendEmail}>
    <div className="container px-5 py-24 mx-auto -mt-9">
      <div className="flex flex-col text-center w-full mb-12">
        <p className="lg:w-2/3 mx-auto leading-relaxed md:text-4xl text-base ">GET IN TOUCH</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 md:-mt-8 mt-0 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label name="name" className="leading-7 text-sm text-gray-200" >Name </label>
              {/* <input type="text" id="name" name="name" class=" w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder="Search for"  "> */}
              {/* </input> */}
              <input type="text" name="user_name" className=" placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Your Name" />
            
              </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label type="email" name="email" id="email" className="leading-7 text-sm text-gray-200">Email</label>
              <input type="email" name="user_email" className=" placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email Id"/>

            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label name="message" className="leading-7 text-sm text-gray-300 ">Message</label>
              <textarea type="submit"  id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>

            </div>
          </div>
          <div className="p-2 w-full">
            {/* <button type="submit" className="flex mx-auto text-white border-2   py-2 px-8 focus:outline-none text-lg">Submit</button> */}
            <input onClick={diff}  type="submit" className="flex mx-auto hover:bg-[#22D091] text-white border-2 cursor-pointer  py-2 px-8 focus:outline-none text-lg" /> 
            <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <p><a className="text-2xl text-[#22D091]" href="mailto:blackcodes109@gmail.com">blackcodes109@gmail.com</a></p>
        
            <span className="inline-flex">
              <a href className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href className="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href className="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=sGQSz22U8VM" className="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
</form>
  </motion.section>
  );
}

export default ContactMe;