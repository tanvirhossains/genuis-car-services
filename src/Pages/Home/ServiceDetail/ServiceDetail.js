import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const param = useParams()
     return (
        <div>
            <h1>Service detail: {param.serviceId} </h1>
        </div>
    );
};

export default ServiceDetail;