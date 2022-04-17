import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center fw-bold mt-5 text-warning'>Foods List</h2>
            <Services></Services>
        </div>
    );
};

export default Home;