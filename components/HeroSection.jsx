import React from 'react';
const  bg = require("../public/hero.jpg");

const HeroSection = () => {
  
    return (
        <section className="hero-wrap"style={{
            backgroundImage: `url(https://res.cloudinary.com/dub6q8hhb/image/upload/v1668264923/xbg_1.jpg.pagespeed.ic.y0vTiKxqA1_t1dxpd.jpg)`,
        }}
            data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-8 ftco-animate d-flex align-items-end">
                        <div className="text w-100">
                            <h1 className="mb-4">Good books don't give up all their secrets at once</h1>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary
                                regelialia.</p>
                            <p><a href="#" className="btn btn-primary py-3 px-4">View All Books</a> <a href="#"
                                className="btn btn-white py-3 px-4">Explore Now</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;