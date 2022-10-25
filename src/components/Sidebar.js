import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";


const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('Data/course-categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (

        <>
            <div class="list-group text-start mx-md-4 ">
                <button type="button" class="list-group-item list-group-item-action">
                    <Link to='courses' className=' text-decoration-none text-reset'>
                        <AiFillCaretRight className='text-danger' /> All Courses</Link>
                </button>


                {
                    categories.map(category => <button
                        type='button'
                        className='list-group-item list-group-item-action '
                        key={category.id}>
                        <Link className='text-decoration-none text-reset' to={`/category/${category.slug}`}><AiFillCaretRight className='text-danger' /> {category.name}</Link>
                    </button>)
                }

            </div>
        </>
    );
};

export default Sidebar;