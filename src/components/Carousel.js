import React from 'react';
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import third from "../assets/images/third.png"


const Carousel = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={first} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">Get Know about Programming</h2>
                            <p className="h5">We are providing different kinds of tutorial for you. If you want to train yourself, we are the best</p>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <img
                            src={second}
                            class="d-block w-100"
                            alt="..."
                        />

                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">Be Confident, While Learning</h2>
                            <p className="h5">Make Your Confidence Level hight with us. We help you to grow your confident</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={third} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className='text-uppercase'>Your Office is your Laptop</h2>
                            <p className="h5">Become a freelance professional, make your office in your Laptop</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
};

export default Carousel;