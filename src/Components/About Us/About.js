import React from 'react';
import img from './about-us.webp';
const About = () => {
    return (
        <div className="d-flex">
            <div className="p-2">
                <h2 className="mt-5">GET A WORLD CLASS HEALTH SERVICE</h2>
                <p className="mt-5">BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
            </div>
            <div className='p-2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default About;