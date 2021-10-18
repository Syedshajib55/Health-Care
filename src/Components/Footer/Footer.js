import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <h5 className='mb-4'>Contact us</h5>
                        <p>Mirpur Road, 1203, Dhaka</p>
                        <p>+8801987457643</p>
                        <p>help@CareNow.com</p>
                    </div>
                    <div className="col-md-4 text-start">
                        <h5 className='ms-4'>Services</h5>
                        <ul className='help-list'>
                            <li> <a href="">Doctors</a></li>
                            <li> <a href="">Dentists</a></li>
                            <li> <a href="">Eye Specialist</a></li>
                            <li> <a href="">Indoor Patient Service</a></li>
                            <li> <a href="">Emergency Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-start">
                        <h5 className='ms-4'>Useful Link</h5>
                        <ul className='help-list'>
                            <li> <a href="">Contact us</a></li>
                            <li> <a href="">About us</a></li>
                            <li> <a href="">Refunds & Returns</a></li>
                            <li> <a href="">Medicine Delivery</a></li>
                            <li> <a href="">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className='text-center'>CareNow &copy; Syed Shakil Mahmud 2021 || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;