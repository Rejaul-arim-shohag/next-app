import React from 'react';

const TopBar = () => {
    return (
        <div className="container-fluid px-md-5  pt-4 pt-md-5">
        <div className="row justify-content-between">
          <div className="col-md-8 order-md-last">
            <div className="row">
              <div className="col-md-6 text-center">
                <a className="navbar-brand" href="index-2.html">Publishing <span>Company</span> <small>Book Publishing
                    Company</small></a>
              </div>
              <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                <form action="#" className="searchform order-lg-last">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control pl-3" placeholder="Search"/>
                    <button type="submit" placeholder="" className="form-control search"><span
                        className="fa fa-search"></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i
                      className="sr-only">Facebook</i></span></a>
                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i
                      className="sr-only">Twitter</i></span></a>
                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i
                      className="sr-only">Instagram</i></span></a>
                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i
                      className="sr-only">Dribbble</i></span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopBar;