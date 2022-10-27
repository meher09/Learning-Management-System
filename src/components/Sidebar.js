import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";


const Sidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://itshikkha-course-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (

        <>
            <div className="list-group text-start mx-md-4 ">
                <Link to="/courses" className=' text-decoration-none text-reset'>
                    <button type="button" className="list-group-item list-group-item-action">
                        <AiFillCaretRight className='text-danger' /> All Courses
                    </button>
                </Link>


                {
                    categories.map(category => <Link className='text-decoration-none text-reset' to={`/category/${category.slug}`}> <button
                        type='button'
                        className='list-group-item list-group-item-action '
                    >
                        <AiFillCaretRight className='text-danger' /> {category.name}
                    </button> </Link>
                    )
                }

            </div>
        </>
    );
};

export default Sidebar;