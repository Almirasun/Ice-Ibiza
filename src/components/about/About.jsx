import React from 'react';
import './About.css';
// import img1 from './img1.jpg'

const About = () => {
    return (
        <div className='about-content'>
            <div className='container'>
                <div className='about-card'>
                    <div className="about-img1"></div>
                    {/* <img src={{img1}} alt="" /> */}
                    <div>
                        <h3>Join Our Club.</h3>
                        <p>Use the knowledge, experience and network of our club members.</p>
                        <a href="https://www.google.com/">Learn more</a>
                    </div>
                </div>
                <div className='about-card'>
                    <div>
                        <h3>Join Our Club.</h3>
                        <p>Use the knowledge, experience and network of our club members.</p>
                        <a href="https://www.google.com/">Learn more</a>
                    </div>
                    <div className="about-img2"></div>
                </div>
            </div>
        </div>
    );
}
 
export default About;