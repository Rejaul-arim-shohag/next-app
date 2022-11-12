import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active"><a href="index-2.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="coming-soon.html" className="nav-link">Coming Soon</a></li>
                        <li className="nav-item"><a href="top-seller.html" className="nav-link">Top Seller</a></li>
                        <li className="nav-item"><a href="book.html" className="nav-link">Books</a></li>
                        <li className="nav-item"><a href="author.html" className="nav-link">Author</a></li>
                        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;