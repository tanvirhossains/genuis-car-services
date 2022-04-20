import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service

    const navigate = useNavigate()
    const serviceDetailId = (id) => {
        navigate(`/serviceDetail/${id}`)
    }
    return (
        <div className='service-container '>
            <img className='w-100' src={img} alt="" />
            <h1>Name:{name}</h1>
            <h3>Price:{price}</h3>
            <p>{description}</p>
            <button className='btn btn-primary' onClick={() => serviceDetailId(id)}>{name}</button>
        </div>
    );
};

export default Service;