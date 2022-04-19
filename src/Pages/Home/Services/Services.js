import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='services-title'>Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.di}
                        service={service}></Service>)

                }
            </div>

        </div>
    );
};

export default Services;