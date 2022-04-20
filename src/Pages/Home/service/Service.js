import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price , description } =service
    return (
        <div className='service-container '>
            <img className='w-100' src={img} alt="" />
            <h1>Name:{name}</h1>
            <h3>Price:{price}</h3>
            <p>{description }</p>
            <button>{name}</button>
        </div>
    );
};

export default Service;