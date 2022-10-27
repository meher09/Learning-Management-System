import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { FaCalculator, FaFilePdf, FaStar, FaVideo } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();



const Course = () => {
    const { name, description, image, whatlearn, contents, instructor_image, instructor, total_vedio, rating, reviews_count, slug } = useLoaderData()
    return (
        <div className='container text-start' ref={ref}>
            <div className="row">
                <div className="col-md-8 my-5 border p-5">
                    <div className="text-center">
                        <img src={image} alt="" height="200" className='text-center mb-3' />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <h2 className='text-uppercase h3 '>{name}</h2>

                        <Pdf targetRef={ref} filename="course-outline.pdf">
                            {({ toPdf }) => <button className="btn btn-danger" onClick={toPdf}><FaFilePdf className='me-3' />Download PDF</button>}
                        </Pdf>
                    </div>

                    <hr />
                    <p className='text-start mb-4'>{description}</p>
                    <h3 className='h4 text-uppercase mb-3'>What you learn</h3>
                    <ul className='text-start'>
                        {
                            whatlearn.map(c => <li >{c}</li>)
                        }
                    </ul>
                    <h3 className='my-4'>Course Contents</h3>
                    <ul className="list-group list-group-flush">
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

                    <div className="d-grid gap-2 mx-auto">
                        <Link to={`/checkout/${slug}`} className="btn btn-warning" type="button">Get Access Now</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Course;