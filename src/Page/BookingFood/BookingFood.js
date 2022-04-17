import React from 'react';
import './BookingFood.css';

const BookingFood = () => {
    return (
        <div className='text-center mt-5 booking'>
            <h4>Please Enter Your Name</h4>
            <div className='text-center'>
                <input className='my-2' type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <input className='my-2' type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default BookingFood;