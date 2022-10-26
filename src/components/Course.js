import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { FaCalculator, FaStar, FaVideo } from 'react-icons/fa';




const Course = () => {
    const course = useLoaderData()
    return (
        <div className='container text-start'>
            <div className="row">
                <div className="col-md-8 my-5 border p-5">
                    <h2 className='text-uppercase h3'>{course.name}</h2>
                    <div className="text-center">
                        <img src={course.image} alt="" height="200" className='text-center' />
                    </div>

                    <hr />
                    <p className='text-start mb-4'>{course.description}</p>
                    <h3 className='h4 text-uppercase mb-3'>What you learn</h3>
                    <ul className='text-start'>
                        {
                            course.whatlearn.map(c => <li >{c}</li>)
                        }
                    </ul>

                    <h3 className='my-4'>Course Contents</h3>
                    <ul class="list-group list-group-flush">
                        {
                            course.contents.map(content => <li className='list-group-item'><FcApproval className='me-2' /> {content}</li>)
                        }

                    </ul>

                </div>
                <div className="col-md-4 my-5 p-5">
                    <h3 className='text-uppercase h5'>Course Overview</h3>
                    <hr />
                    <div className="card p-3">
                        <img src={course.instructor_image} className="rounded-circle mx-auto" alt="" />
                        <h3 className='h6 my-3 text-uppercase text-center'>Instructor: {course.instructor}</h3>
                        <p> <FaVideo className='text-danger me-3' />  Total Video: {course.total_vedio} </p>
                        <p><FaStar className='text-warning me-3' /> Overall Ratings: {course.rating}</p>
                        <p><FaCalculator className='text-warning me-3' />Review Counts: {course.reviews_count}</p>
                    </div>

                    <div class="d-grid gap-2 mx-auto">
                        <button class="btn btn-warning" type="button">Get Access Now</button>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default Course;