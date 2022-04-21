import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const param = useParams()
    return (
        <div>
            <h1>Service detail: {param.serviceId} </h1>
            <div className='text-center' >
                <Link to='/checkout' > <button className='btn btn-primary'>Proceed checkout!!</button></Link>
            </div>

        </div>
    );
};

export default ServiceDetail;