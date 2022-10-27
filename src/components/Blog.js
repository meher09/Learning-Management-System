import React from 'react';
import Sidebar from './Sidebar';

const Blog = () => {
    return (
        <div className="container text-start">
            <div className="row">
                <div className="col-md-8 my-5">
                    <h2 className='mb-3'>Blog Sections</h2>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className='h3'>What is cors?</h2>
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any
                                origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                                CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the
                                cross-origin resource, in order to check that the server will permit the actual request. In that preflight,
                                the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className='h3'> How does the private route work?</h2>
                            <p>The react private route component renders child components (children) if the user is logged in.
                                If not logged in the user is redirected to the /login page with the return url passed in the location state
                                property.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className='h3'> What is Node? How does Node work?</h2>
                            <p>Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also
                                powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into
                                Node.</p>
                            <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another.</p>
                            <p> A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO
                                operation, it does not wait until it completes and instead registers a callback function. The server then
                                immediately starts to process another event (maybe another request). When the IO operation is finished, that is
                                another kind of event, and the server will process it (i.e. continue working on the request) by executing the
                                callback as soon as it has time.</p>
                            <p>So the server never needs to create additional threads or switch between threads, which means it has very little overhead.
                                If you want to make full use of multiple hardware cores, you just start multiple instances of node.js</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className='h3'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                            <p>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google.
                                As an Web developer I use Firebase in  my projects. It has many features like Authentication, user management system and Hosting and many more etc.
                                Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my apps in production. You will not have to take care of servers, etc, Google will take care of it for you.
                                If you do not find the need to develop your own backend, Firebase is one of the best options.
                            </p>
                            <p>In my Projects I have used Google Authentication System, Github Authentication System and User State Observer and many more things</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <h2 className="h4 mb-4 text-center">Our Course Categories</h2>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div >
    );
};

export default Blog;