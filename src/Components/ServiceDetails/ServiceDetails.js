import React from 'react';
import { useParams } from 'react-router';
const ServiceDetails = () => {
    const {serviceId, description} = useParams();
    return (
        <div>
            <h2>{description}</h2>
        </div>
    );
};

export default ServiceDetails;