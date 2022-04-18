import React from 'react';
import clients1 from '../../images/experts/expert-1.jpg';
import clients2 from '../../images/experts/expert-3.jpg';
import clients3 from '../../images/experts/expert-4.jpg';
import './Customer.css';


const Customer = () => {

    return (
        <div>
            <h2 className='text-center text-info my-5 fw-bold'>Clients Review</h2>
            <div className='clicents-container'>
                <div className='client'>
                    <img src={clients1} alt="" />
                    <p>Name: Johan Mark</p>
                    <p><small>Comments: This is very good food platfrom in bangladesh.</small></p>
                    <p className='text-warning'>Rating : 4.3</p>
                </div>
                <div className='client'>
                    <img src={clients2} alt="" />
                    <p>Name: Tom wood</p>
                    <p><small>Comments: This is very good food platfrom in bangladesh.</small></p>
                    <p className='text-warning'>Rating : 5</p>
                </div>
                <div className='client'>
                    <img src={clients3} alt="" />
                    <p>Name: Alon Mark</p>
                    <p><small>Comments: This is very good food platfrom in bangladesh.</small></p>
                    <p className='text-warning'>Rating : 4.5</p>
                </div>
            </div>

        </div >
    );
};

export default Customer;