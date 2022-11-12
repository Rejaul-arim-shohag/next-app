import React from 'react';

const Counting = () => {
    return (
        <section className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img bg-light" id="section-counter">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-4 mb-4">
                            <div className="text align-items-center">
                                <strong className="number" data-number="75678">75678</strong>
                                <span>Active Readers</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-4 mb-4">
                            <div className="text align-items-center">
                                <strong className="number" data-number="3040">3040</strong>
                                <span>Total Pages</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-4 mb-4">
                            <div className="text align-items-center">
                                <strong className="number" data-number="283">283</strong>
                                <span>Cup Of Coffee</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-4 mb-4">
                            <div className="text align-items-center">
                                <strong className="number" data-number="14500">14500</strong>
                                <span>Facebook Fans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Counting;