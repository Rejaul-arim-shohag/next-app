import React from 'react';
import { GiHorseHead, GiLoveHowl } from "react-icons/gi";
import { TbBuildingBank } from "react-icons/tb";

const Services = () => {
    return (
        <section className="ftco-section ftco-no-pt mt-5 mt-md-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-stretch ftco-animate">
                        <div className="services-2 text-center">
                            <div className="icon-wrap">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <GiHorseHead style={{fontSize:"50px"}}/>
                                </div>
                            </div>
                            <h2><a href="#">Children's Book</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-stretch ftco-animate">
                        <div className="services-2 text-center">
                            <div className="icon-wrap">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <GiLoveHowl style={{fontSize:"50px"}}/>
                                </div>
                            </div>
                            <h2><a href="#">Romance</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-stretch ftco-animate">
                        <div className="services-2 text-center">
                            <div className="icon-wrap">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <TbBuildingBank style={{fontSize:"50px"}}/>
                                </div>
                            </div>
                            <h2><a href="#">Art &amp; Architecture</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-stretch ftco-animate">
                        <div className="services-2 text-center">
                            <div className="icon-wrap">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <TbBuildingBank style={{fontSize:"50px"}}/>
                                </div>
                            </div>
                            <h2><a href="#">History</a></h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;