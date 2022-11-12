import React from 'react';

const Footer = () => {
    return (
        <footer className="ftco-footer">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 logo"><a href="#">Connect</a></h2>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                            <ul className="ftco-footer-social list-unstyled mt-2">
                                <li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Extra Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Affiliate Program</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Business Services</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Education Services</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Legal</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Join us</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Blog</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Privacy &amp; Policy</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Term &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Company</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About Us</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Blog</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid px-0 py-5 bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="mb-0" style={{color:"rgba(255,255,255,.5)"}}>
                                Copyright &copy;
                                <script data-cfasync="false"
                                    src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                2022  All rights reserved | This template is made
                                with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com/"
                                    target="_blank">Colorlib.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;