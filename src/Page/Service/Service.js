import React from 'react';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4 align-items-center'>
            <div class="card p-2" style={{ width: "22rem", height: "38rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"> <small>{description}</small></p>
                    <p><small>Price:${price}</small></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Service;