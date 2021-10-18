import React from 'react';
import { useParams } from 'react-router';
const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className="p-5">
            <p>Neurosurgery is the surgical specialty concerned with diagnosis, treatment and rehabilitation of patients with disorders that affect the nervous system, including the brain, spinal column, spinal cord, peripheral nerves, and extra-cranial cerebrovascular system. These disorders may be due to a birth defect, traumatic injury, cancer or other reasons.
 
 Department of Neurosurgery of Bangladesh Specialized Hospital employs a multidisciplinary approach to providing comprehensive neurosurgical services, utilizing state-of-the-art equipment’s and facilities. Our team consists of expert neurosurgeons, neuro nurses and technicians. We also have skilled doctors from other departments for support with Neurosurgery subspecialties. The department has already performed over six hundred highly demanding, successful neurosurgeries since 2016.</p>
       </div>
    );
};

export default ServiceDetails;