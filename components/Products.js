import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import ReactPaginate from 'react-paginate';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GiRoyalLove } from "react-icons/gi";
import { BsEyeFill } from "react-icons/bs";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(6);


    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            // fetch('https://fakestoreapi.com/products')
            //     .then(res => res.json())
            //     .then(json => setProducts(json))
            const response = await fetch('https://fakestoreapi.com/products');
            const prd = await response.json();
            setProducts(prd)
            setLoading(false)
        }
        fetchPost()
    }, [])

    

    const indexOfLastProducts = currentPage * perPage;
    const indexOfFirstProducts = indexOfLastProducts - perPage;
    const currentProduct = products.slice(indexOfFirstProducts, indexOfLastProducts)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <section class="ftco-section ftco-no-pt pt-5 pb-0">
                <div class="container-fluid px-md-4">
                    <div class="row justify-content-center pb-5 mb-3">
                        <div class="col-md-7 heading-section text-center ftco-animate">
                            <span class="subheading">Books</span>
                            <h2>New Release</h2>
                        </div>
                    </div>

                    <div class="row">
                        {
                            currentProduct?.map((pd, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-lg-4 d-flex">
                                        <div className="book-wrap d-lg-flex">
                                            <div className="img d-flex justify-content-end" style={{
                                                backgroundImage: `url(${pd.image})`,

                                            }}>
                                                {/* <img src={pd?.image} alt="Girl in a jacket" />  */}
                                                <div className="in-text">
                                                    <a href="#" className="icon d-flex align-items-center justify-content-center" data-toggle="tooltip"
                                                        data-placement="left" title="Add to cart">
                                                        <AiOutlineShoppingCart className="flaticon-shopping-cart" />

                                                    </a>
                                                    <a href="#" className="icon d-flex align-items-center justify-content-center" data-toggle="tooltip"
                                                        data-placement="left" title="Add to Wishlist">

                                                        <GiRoyalLove className="flaticon-heart-1" />
                                                    </a>
                                                    <a href="#" className="icon d-flex align-items-center justify-content-center" data-toggle="tooltip"
                                                        data-placement="left" title="Quick View">
                                                        <AiOutlineSearch className="flaticon-search" />

                                                    </a>
                                                    <a href="#" className="icon d-flex align-items-center justify-content-center" data-toggle="tooltip"
                                                        data-placement="left" title="Compare">
                                                        <BsEyeFill className="flaticon-visibility" />

                                                    </a>
                                                </div>
                                            </div>
                                            <div className="text p-4 order-md-first">
                                                <p className="mb-2"><span className="price">${pd?.price}</span></p>
                                                <h2><a href="#">{pd?.category}</a></h2>
                                                <span className="position">{pd?.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <div className="col-12 mt-2 text-center container mb-5">
                <nav className="text-center" style={{display: "flex", justifyContent: "center"}}>
                    <ul className="pagination ">
                        {
                            pageNumbers.map((page, index) => {
                                return (
                                    <li className="page-item" key={index}>
                                        <a onClick={() => paginate(page)} className="page-link" style={{ cursor: "pointer" }}>{page}</a>
                                    </li>

                                )
                            })
                        }
                    </ul>

                </nav>

            </div>
        </div>
    );
};

export default Products;