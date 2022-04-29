import React from 'react';
import Node from '../imgs/NodeJS.png';
import react from '../imgs/ReactJS.png';
import tailwind from '../imgs/TailwindCSS.png';
import git from '../imgs/Git.png';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span> Quality </span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                        <img src={Node} alt="NodeJs" />
                        <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsom magi noodle panjabi</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                        <img src={react} alt="ReactJs" />
                        <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsom magi noodle panjabi</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                        <img src={git} alt="git" />
                        <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsom magi noodle panjabi</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                        <img src={tailwind} alt="tailwind"/>
                        <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsom magi noodle panjabi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;