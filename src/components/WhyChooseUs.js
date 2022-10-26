import React from 'react';
import { HiBadgeCheck, HiLightningBolt } from "react-icons/hi"
const WhyChooseUs = () => {
    return (
        <div className="container my-5">
            <h2 className='text-uppercase mb-3'>Why should you choose us</h2>
            <hr className='w-50 mx-auto mb-5' />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card py-5">
                        <div className="card-body">
                            <HiBadgeCheck className='h1 text-success' />
                            <h5 className="card-title">We Care you</h5>
                            <p className="card-text">We take care of every students.
                                Dedicated support panel who are regularly monitors every students progress</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card py-5">
                        <div className="card-body">
                            <HiLightningBolt className="h1 text-success" />
                            <h5 className="card-title">Assignment & Quizes</h5>
                            <p className="card-text">Our dedicated team take care of the students progress. We regularly take asesment and quizes for you which will help tracking your progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default WhyChooseUs;