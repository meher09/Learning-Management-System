import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const RegisterForm = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext)


    // Toast 

    // handle submit form
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const full_name = form.full_name.value;
        const email = form.email.value;
        const password = form.password.value;
        const password_two = form.password_two.value;
        const photo = form.photo.value;
        console.log(full_name, email, password, password_two, photo)


    }


    return (
        <div className="container w-50 mx-auto my-5 text-center">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4 className='text-uppercase'>Register Now</h4>
                        <p>Register to Access the Contents</p>
                        <hr className='w-25 mx-auto' />
                        <form className='text-start' onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="full_name" className="form-label">Full Name</label>
                                <input type="text" name="full_name" className="form-control" />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password_two" className="form-label">Password Confirmation</label>
                                <input type="password" name="password_two" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label">Photo Url</label>
                                <input type="url" name="photo" className="form-control" />
                            </div>
                            <div className="d-grid gap-2">
                                <input className="btn btn-success" type="submit" value="Register" />
                            </div>
                        </form>

                        <div className="my-3 text-start">Already Have an Account? <Link to='/login' className='text-decoration-none text-danger'>Login Now</Link></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;