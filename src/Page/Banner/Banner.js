import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    height={500}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best Masala and Raw Materials</h3>
                    <p><small>Super tasty products and good looking products around bangladesh</small></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={500}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='align-items-center text-white'>
                        <h3>Delecious Menu Lunch and Dinner</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={500}
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;