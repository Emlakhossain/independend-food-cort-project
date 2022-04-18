import React from 'react';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center fw-bold mt-5 text-warning'>Foods Lists</h2>
            <Services></Services>
            <Customer></Customer>
        </div>
    );
};

export default Home;