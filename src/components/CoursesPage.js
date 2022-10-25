import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import Sidebar from './Sidebar';

const CoursesPage = () => {
    const allCourse = useLoaderData()
    return (
        <div>
            <div className="container my-5">
                <h2 className='text-uppercase'>Our Latest Courses</h2>
                <p>Here we have added some of the courses for your consideration.
                    you can browse our course page for more courses</p>
                <hr className='w-50 mx-auto mb-5' />

                <div className="row">
                    <div className="col-md-9">
                        
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                                allCourse.map(course => <CourseCard
                                    key={course.id}
                                    course={course}
                                ></CourseCard>)
                            }
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h4>Course Categories</h4>
                        <hr className='w-50 mx-auto' />
                        <Sidebar></Sidebar>
                    </div>





                </div>







            </div>
        </div>
    );
};

export default CoursesPage;