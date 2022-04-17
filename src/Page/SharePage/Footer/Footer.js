import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='bg-success text-white py-5 height-30 mt-5 text-center mb-0'>
            <h4 className='text-warning'>Madang healthy Food Catering </h4>
            <p className='text-warning'>©copyRight : {year}</p>
        </footer>
    );
};

export default Footer;