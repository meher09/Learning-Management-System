import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaVideo } from 'react-icons/fa'

const CourseCard = ({ course }) => {

    const { id, slug, name, rating, total_vedio, instructor, instructor_image, description, reviews_count, image } = course

    return (
        <>
            {
                <div className="col">
                    <div className="card border">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body my-3">
                            <div className="d-flex">
                                <img src={instructor_image} className="rounded-circle me-2"
                                    width="30" height="30" alt="" />
                                <p>{instructor}</p>
                            </div>
                            <h5 className="card-title text-primary text-start">{name} </h5>

                            <p className='text-start'>{description}</p>


                            <div className="d-flex justify-content-between my-3">
                                <p><FaStar className='text-warning' /><strong> {rating} </strong>({reviews_count} Reviews)</p>
                                <p><FaVideo className='text-danger' />  {total_vedio} Vedios</p>

                            </div>
                            <div className="card-footer bg-transparent border-success">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Link to={slug}>
                                        <button className="btn btn-success" type="button">
                                            Get Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

export default CourseCard;