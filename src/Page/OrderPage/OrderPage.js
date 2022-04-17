import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderPage = (props) => {

    const { serviceId, name } = useParams();
    return (
        <div>
            <h4>Welcome to Order Page Are you want to order Please Click Order Confirm button</h4>
            <h2>{serviceId}</h2>
            <p>{serviceId.name}</p>

            <Link to='/bookingfood'>Booking Food</Link>


        </div>
    );
};

export default OrderPage;