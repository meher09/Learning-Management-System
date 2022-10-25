import React from 'react';
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import third from "../assets/images/third.png"


const Carousel = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={first} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">Get Know about Programming</h2>
                            <p className="h5">We are providing different kinds of tutorial for you. If you want to train yourself, we are the best</p>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <img
                            src={second}
                            className="d-block w-100"
                            alt="..."
                        />

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">Be Confident, While Learning</h2>
                            <p className="h5">Make Your Confidence Level hight with us. We help you to grow your confident</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={third} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-uppercase'>Your Office is your Laptop</h2>
                            <p className="h5">Become a freelance professional, make your office in your Laptop</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
};

export default Carousel;