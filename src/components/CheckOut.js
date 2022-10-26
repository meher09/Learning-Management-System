import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {


    const course = useLoaderData()

    const total_fee = course.fee.course_fee - course.fee.discount

    console.log(course)
    return (

        <div className='container'>
            <div className="row my-5">
                <div className="alert alert-success" role="alert">
                    You have successfully enrolled the course
                </div>
                <div className="col-md-6 my-5">
                    <div className="card">
                        <div className="card-body">
                            <img src="https://randomuser.me/api/portraits/men/27.jpg" className='rounded-circle' alt="" />
                            <h2 className="card-title h4 my-3">Your Profile Information</h2>

                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Full Name:</p><p className='text-end'>Your Name Here</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Email:</p><p className='text-end'>200 USD</p>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="col-md-6 my-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-uppercase">Summery</h2>
                            <p>
                                Here is short summery of your enrolled course
                            </p>
                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Course Name:</p><p className='text-end'><strong>{course.name}</strong></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Course Fee:</p><p className='text-end'>{course.fee.course_fee} USD</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Discount:</p><p className='text-end'>{course.fee.discount} USD</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p className='text-start'>Total Fee:</p><p className='text-end'>{total_fee} USD</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CheckOut;