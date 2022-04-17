import React from 'react';
import aboutImage from '../../images/profile.png';
import './About.css';

const About = () => {
    return (
        <div className='my-5'>

            <div className='about-container '>

                <div className='text-container rounded'>
                    <div className='my-3'>
                        <h4 className='fw-bold y-2'>About Me:</h4>
                        <p>Hello Friends I am Imran Hossain. I am a Manager of Store in Hamid roup (Hospitality and catering LTD). But i want to be a professional Web developer. Then i admitted to programming Hero. Inshallah till now i staying mid level position in the course.</p>
                    </div>
                    <div>
                        <h4 className='fw-bold'>My Vision: <small>2022</small></h4>
                        <p>So my vision is that, after 3 month i would like to be a professional junior Full Stack js developer. because its my hobby and i love programming.</p>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;