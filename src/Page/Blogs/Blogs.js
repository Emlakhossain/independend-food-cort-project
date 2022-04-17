import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2 className='text-center text-info mt-5 fw-bold'>Blogs</h2>
            <div className='blogs'>
                <div className='blog rounded'>
                    <h4>Difference between authorization and authentication ?</h4>
                    <p>Authentication	Authorization
                        Authentication verifies who the user is.	Authorization determines what resources a user can access.
                        Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	Authorization works through settings that are implemented and maintained by the organization.
                        Authentication is the first step of a good identity and access management process.	Authorization always takes place after authentication.
                        Authentication is visible to and partially changeable by the user.	Authorization isn’t visible to or changeable by the user.
                        Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.	Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                    </p>
                </div>
                <div className='blog rounded'>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p> <strong>Firebase:</strong> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience..</p>
                    <p> <strong>authentication:</strong>
                        I thing below to emplement to firebase authentication that,
                        <li>At first create react projects</li>
                        <li>second option is create firebase project name</li>
                        <li>Third go to console that ensure settings that as your projects name wise</li>
                        <li>Fourth then you need to enable to google or email or anything else. that you want.</li>
                        <li>Finally use your authentication process make your projects area as your requirement wise.</li>

                    </p>
                </div>
                <div className='blog rounded'>
                    <h4>What other services does firebase provide other than authentication</h4>
                    <p>Another firebase service are more easy of my end firebase hooks are very simple to google firebase authentication. So i enjoy more easy and i comfortable to firebase hooks use my projects.</p>
                    <p>Firebase hooks just use simple function and make projects. its buildin function their github website. and you can use this your projects just copy past.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;