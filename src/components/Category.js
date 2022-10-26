import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import CoursesPage from './CoursesPage';

const Category = () => {
    const courses = useLoaderData()
    return (
        <div className='container'>
            <CoursesPage></CoursesPage>
        </div>
    );
};

export default Category;