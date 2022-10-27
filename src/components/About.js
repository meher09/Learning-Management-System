import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
    return (
        <div className="container my-5">
            <h2 className='text-start'>About Us</h2>
            <div className="row  text-start">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="h4">Why We use React</h3>
                                <p>There are many different types of learning management systems (LMS), but they all have one common goal:
                                    to provide a platform where learners can access and interact with educational content. A good LMS will offer
                                    features like course creation and organization, gamification, assessment tools, and social learning features.
                                    React is a great option for developing an LMS because it offers so many ways to customize the user experience.
                                </p>

                                <h3 className="h4">What Features are Availabl here</h3>
                                <p>There are many features that make our lms  good, but here are some of the most important ones:</p>
                                <ul>
                                    <li>- Ease of use: The system should be easy to use for both administrators and learners. This includes having a user-friendly interface and intuitive controls.</li>
                                    <li>- Flexibility: The LMS should be flexible enough to accommodate different learning styles and needs. It should also be able to integrate with other systems as needed.</li>
                                    <li>- Scalability: The system should be able to handle a large number of users and courses without any issues.</li>
                                </ul>
                                <h3 className="h4">Technology and Library Lists</h3>
                                <ul>
                                    <li>Firebase</li>
                                    <li>React</li>
                                    <li>React</li>
                                    <li>React Dom </li>
                                    <li>React Icons</li>
                                    <li>React Router Dom </li>
                                    <li>Bootstrap </li>
                                    <li>Toast </li>
                                </ul>
                                <p>This is an open source projects. You can check our github pages and feel free to ask any question
                                    regarding this projects</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>




            </div>
        </div >
    );
};

export default About;