import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { FaCalculator, FaStar, FaVideo } from 'react-icons/fa';

const Course = () => {
    const { name, description, image, whatlearn, contents, instructor_image, instructor, total_vedio, rating, reviews_count, slug } = useLoaderData()
    return (
        <div className='container text-start'>
            <div className="row">
                <div className="col-md-8 my-5 border p-5">
                    <div className="text-center">
                        <img src={image} alt="" height="200" className='text-center' />
                    </div>
                    <h2 className='text-uppercase h3 my-4'>{name}</h2>
                    <hr />
                    <p className='text-start mb-4'>{description}</p>
                    <h3 className='h4 text-uppercase mb-3'>What you learn</h3>
                    <ul className='text-start'>
                        {
                            whatlearn.map(c => <li >{c}</li>)
                        }
                    </ul>
                    <h3 className='my-4'>Course Contents</h3>
                    <ul class="list-group list-group-flush">
                        {
                            contents.map(content => <li className='list-group-item'><FcApproval className='me-2' /> {content}</li>)
                        }

                    </ul>
                </div>
                <div className="col-md-4 my-5 p-5">
                    <h3 className='text-uppercase h5'>Course Overview</h3>
                    <hr />
                    <div className="card p-3">
                        <img src={instructor_image} className="rounded-circle mx-auto" alt="" />
                        <h3 className='h6 my-3 text-uppercase text-center'>Instructor: {instructor}</h3>
                        <p> <FaVideo className='text-danger me-3' />  Total Video: {total_vedio} </p>
                        <p><FaStar className='text-warning me-3' /> Overall Ratings: {rating}</p>
                        <p><FaCalculator className='text-warning me-3' />Review Counts: {reviews_count}</p>
                    </div>

                    <div class="d-grid gap-2 mx-auto">
                        <Link to={`/checkout/${slug}`} className="btn btn-warning" type="button">Get Access Now</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Course;