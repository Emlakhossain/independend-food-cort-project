import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = (props) => {

    const { serviceId, name } = useParams();
    return (
        <div className=' order text-center mt-5'>
            <h4>Welcome to Order Page Are you want to order Please Click Order Confirm button</h4>
            <h2>{serviceId}</h2>
            <p>{serviceId.name}</p>

            <Link to='/bookingfood'><button className='btn btn-warning '>Check Out Order</button></Link>


        </div>
    );
};

export default OrderPage;