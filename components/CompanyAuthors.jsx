import React from 'react';

const CompanyAuthors = () => {
    return (
        <section class="ftco-section">
            <div class="container">
                <div className="row">
                    <div className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dub6q8hhb/image/upload/v1668263312/xabout-1.jpg.pagespeed.ic.EXhrSjRLu-_yd7gsv.jpg)`,
                       
                    }}
                    >

                    </div>
                    <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-5" >
                        <div className="heading-section">
                            <span className="subheading">Welcome To Publishing Company</span>
                            <h2 className="mb-4">Publishing Company Created By Authors</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                                paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have
                                been rewritten a thousand times and everything that was left from its origin would be the word "and" and
                                the Little Blind Text should turn around and return to its own, safe country.</p>
                            <a href="#" className="btn btn-primary">View All Our Authors</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyAuthors;