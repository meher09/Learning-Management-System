import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../mylogo.png"
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { HiUserCircle } from 'react-icons/hi';


const Headers = () => {
    const [light, setLight] = useState(true);
    const { user, logOut } = useContext(AuthContext);




    const handleLightDark = () => {
        setLight(!light);
    }

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => error.message)
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" height="60" />

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faqs">FAQ's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item ms-4" >
                                <button className="nav-link btn btn-secondary" onClick={handleLightDark}>
                                    {
                                        light ? <><FaSun className='text-warning' /> Light Mode</> : <><FaMoon className='text-light' /> Dark Mode</>
                                    }
                                </button>
                            </li>

                        </ul>
                        <>
                            {
                                !user?.uid ?
                                    <div className="text-md-end">
                                        <Link type="button" className="btn btn-warning  me-2" to='/login'> <HiUserCircle /> Login</Link>
                                        <Link type="button" className="btn btn-warning  me-2" to='/register'> Register</Link>
                                    </div>
                                    :
                                    <div className="text-md-end">

                                        <Link data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                            <img src={user?.photoURL} alt="" height="40" width="40" className='rounded-circle me-3 d-inline ' />
                                        </Link>
                                        <button type="button" className="btn btn-warning  me-2" onClick={handleLogout}> Logout</button>
                                    </div>
                            }
                        </>



                    </div>
                </div>
            </nav>

        </header >
    );
};

export default Headers;