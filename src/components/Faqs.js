import Sidebar from './Sidebar';


const Faqs = () => {

    return (
        <div className="container text-start my-5">


            <div className="row">
                <div className="col-md-8">
                    <h1 className='my-3'>Frequently Asked Questions</h1>

                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className='h3'>What is a ITShikkha Learning Management System?</h2>
                                <p>
                                    A Learning Management System is an effective tool that is created and designed to establish administration,
                                    documentation, reporting, tracking, and deliver online learning. It's also known as e-learning because the
                                    software that is used will provide a virtual classroom-like environment for training organization employee
                                    and trainers alike.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="h3">
                                What are the main features of ITshikkha LMS?
                            </h2>
                            <p>ITShikkha Learning Management System (LMS) allows Instructors to easily create courses and add course material.
                                Adding learners/trainees, creating batches/groups, importing list of users/trainees makes it very convenient to
                                manage a large user base. From creating and managing courses to adding users/trainees and tracking user progress,
                                making announcements and staying in touch with the users makes ITShikkha a very powerful training platform.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="h3">
                                Can you use Learning Management System features for distance learning?
                            </h2>
                            <p>Yes, you can use the Learning Management System features for distance learning and complement any kind of
                                classroom education. The best LMS software will allow you to deploy courses online that will update
                                learners/students at any time and anywhere across the globe. As a trainer, you can create and launch content that
                                can be accessed anywhere in the world, be it corporate offices, health institutions, financial organizations, dorm rooms, and so on. When used in the right way, LMS can help with efficient e-learning and training.</p>
                        </div>
                    </div>




                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className='h3'>What type of training materials are included in LMS?</h2>
                                <p>Usually, LMS features will include SCORM compatible materials. This will usually have videos and quizzes that will
                                    provide you with performance scores and feedback, that will help you analyze whether the learners are retaining the
                                    information that is taught to them. You can also upload any other documents to distribute to students and corporate
                                    learners while providing them with links to external resources, as well.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 my-5">
                    <h4>Our Course Categories</h4>
                    <Sidebar></Sidebar>
                </div>
            </div>




        </div>
    );
};

export default Faqs;