import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='bg-dark text-white py-5 height-30 mt-5'>
            <h4>Madang healthy Food Catering </h4>
            <p>©copyRight : {year}</p>
        </footer>
    );
};

export default Footer;