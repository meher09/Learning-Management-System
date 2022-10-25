import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from './Carousel';
import CourseCard from './CourseCard';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {

    const allCourse = useLoaderData()


    return (
        <>
            <Carousel></Carousel>
            <WhyChooseUs></WhyChooseUs>
            <div className="container">
                <h2 className='text-uppercase'>Our Latest Courses</h2>
                <p>Here we have added some of the courses for your consideration.
                    you can browse our course page for more courses</p>
                <hr className='w-50 mx-auto mb-5' />
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        allCourse.slice(0, 3).map(course => <CourseCard
                            key={course.id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
                <Link to='courses'>
                    <button className="btn btn-warning my-4">Browse All Courses</button>
                </Link>

            </div>


        </>
    );
};

export default Home;