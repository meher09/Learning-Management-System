import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const LoginForm = () => {

    const { signIn } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })




    }

    return (
        <div className="container w-50 mx-auto my-5">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4 className='text-uppercase'>Sign In</h4>
                        <p>Login to Access the Contents</p>
                        <hr className='w-25 mx-auto' />

                        <div className="d-flex justify-content-center">
                            <div className="bg-light me-2 p-3 rounded border text-uppercase">
                                <h2 className='h5'> <GoMarkGithub className='fs-1 me-2' /> Sign in with Github </h2>
                            </div>
                            <div className="bg-secondary me-2 p-3 rounded border text-uppercase text-white">
                                <h2 className='h5'><FcGoogle className='fs-1 me-2' />sign in with Google</h2>
                            </div>
                        </div>
                        <hr className='w-50 mx-auto' />
                        <h2 className='text-muted h5'>or</h2>

                        <form className='text-start' onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" />
                                <div className="form-text text-end text-danger">Forget Password</div>


                            </div>
                            <div className="d-grid gap-2">
                                <input className="btn btn-success" type="submit" value="Login" />
                            </div>
                        </form>

                        <div className="my-3 text-start">New to Site ? <Link to='/register' className='text-decoration-none text-danger'> Register Now</Link></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;