import React from 'react';

import Rup3 from '../imgs/Rupen3.jpg';


const Intro = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap w-full flex-col items-center text-center">
                    <h1 className="sm:text-7xl text-2xl mt-14 font-medium title-font mb-2 text-white">About <span>Me</span></h1>
                    <div className="h-1 mt-9 w-32 bg-cyan-300 rounded"></div>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24  flex flex-col items-center text-center">
                        <div className="p-4 md:w-11/12">
                            <div className="h-full bg-[#23D997] shadow-2xl shadow-slate-200  p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block  w-5 h-5 text-gray-900 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                    <img className=" w-[3rem] h-[3rem] rounded-full mx-auto" src={Rup3} alt="Developer Img" />
                             
                                <p className="leading-relaxed text-xl text-gray-900 mb-6">Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.

                                    I also love doing open source development, I actively maintain various notable open source projects with over,
                                    30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.</p>
                                <a href className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font text-2xl mb-16 font-extralight text-gray-900">Thank You 🙂</span>
                                        <span className=" text-3xl"></span>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="container px-5 md:-mt-44 md:ml-48  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-2 lg:w-3/12">
                            <div className="h-2/3 bg-[#d6fbff] shadow-2xl shadow-cyan-300 px-8 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font sm:text-xl mt-5 text-xl font-medium text-gray-900 mb-3">“Simplicity is the baddest choice to be the best.“</h1>
                                <p className="leading-relaxed  sm:text-lg text-gray-900 mb-3">- Rupen Bhimani </p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-3/12">
                            <div className="h-2/3 bg-[#d6fbff] shadow-2xl shadow-[#23D997] px-8  pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font sm:text-xl mt-5 text-xl font-medium text-gray-900 mb-3">“Creativity is the driver of an unstoppable train called Passion.”</h1>
                                <p className="leading-relaxed  sm:text-lg text-gray-900 mb-3">- Rupen Bhimani </p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-3/12">
                            <div className="h-2/3 bg-[#d6fbff] shadow-2xl shadow-cyan-300 px-8  p rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font sm:text-xl mt-5 text-xl font-medium text-gray-900 mb-3">“I know I’m not successful enough, but I’m passionate enough not to worry about success.“</h1>
                                <p className="leading-relaxed sm:text-lg text-gray-900 mb-3">- Rupen Bhimani</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};



export default Intro;