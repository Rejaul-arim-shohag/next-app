import React, { useRef } from 'react';
import Slider from "react-slick";
const ClientTestimonial = () => {
    const data = [
        {
            image: "https://res.cloudinary.com/dub6q8hhb/image/upload/v1668264435/xperson_2.jpg.pagespeed.ic.yyrmjBH91b_rtbkb0.jpg",
            name: "Roger Scott",
            position: "Marketing Manager",
            comment: "Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts."
        },
        {
            image: "https://res.cloudinary.com/dub6q8hhb/image/upload/v1668283478/xperson_1.jpg.pagespeed.ic.P4pHl6glbj_vjiflc.jpg",
            name: "Rejaul karim",
            position: "Marketing Manager",
            comment: "Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts."
        },
        {
            image: "https://res.cloudinary.com/dub6q8hhb/image/upload/v1668264435/xperson_2.jpg.pagespeed.ic.yyrmjBH91b_rtbkb0.jpg",
            name: "Roger Scott",
            position: "Marketing Manager",
            comment: "Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts."
        },
        {
            image: "https://res.cloudinary.com/dub6q8hhb/image/upload/v1668283502/person_3_fh76b8.jpg",
            name: "Roger Scott",
            position: "Marketing Manager",
            comment: "Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts."
        },
        {
            image: "https://res.cloudinary.com/dub6q8hhb/image/upload/v1668264435/xperson_2.jpg.pagespeed.ic.yyrmjBH91b_rtbkb0.jpg",
            name: "Roger Scott",
            position: "Marketing Manager",
            comment: "Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts."
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="ftco-section testimony-section ftco-no-pb">
            <div className="img img-bg border"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dub6q8hhb/image/upload/v1668264219/xbg_4.jpg.pagespeed.ic.Warq8UN9la_crpyuf.jpg)`,
                }}
            ></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-3">Kinds Words From Clients</h2>
                    </div>
                </div>

                <div className="row ftco-animate">
                    <div className="col-md-12">
                        <div className="carousel-testimony owl-carousel ftco-owl">
                            <Slider {...settings}>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div className="item">
                                                <div className="testimony-wrap py-4" style={{margin:"0 10px"}}>
                                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                                    <div className="text">
                                                        <p className="mb-4">{item.comment}</p>
                                                        <div className="d-flex align-items-center">
                                                            <div className="user-img"
                                                                style={{
                                                                    backgroundImage: `url(${item.image})`,
                                                                }}
                                                            ></div>
                                                            <div classNameName="pl-3">
                                                                <p className="name">{item.name}</p>
                                                                <span className="position">{item.position}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>



                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ClientTestimonial;