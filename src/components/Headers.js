import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div class="container">
                    <Link class="navbar-brand" to="/">IT Shikkha</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="courses">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="faqs">FAQ's</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="blog">Blog</Link>
                            </li>

                        </ul>
                        <div class="text-md-end">
                            <Link type="button" class="btn btn-warning  me-2" to='login'> Login</Link>
                            <i class="fa-regular fa-circle"></i>
                        </div>

                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Headers;