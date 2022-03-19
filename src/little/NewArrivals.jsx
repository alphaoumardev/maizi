import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
const NewArrivals = ()=>
{
    function NextArrow(props)
    {
        const { className,onClick } = props;
        return (<div className="swiper-button-next" onClick={onClick}>
            <i className="bi bi-caret-right-fill"></i>
        </div> );
    }

    function PrevArrow(props)
    {
        const {className, onClick } = props;
        return (<div className="swiper-button-prev" onClick={onClick}>
            <i className="bi bi-caret-left-fill"></i>
        </div> );
    }
    const settings =
        {
            className: "center",
            infinite: true,
            slidesToShow: 3,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            easing:'linear',
            focusOnSelect:true,
            cssEase: "linear",
            centerMode: true,
            centerPadding: "60px",
            rows: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        };
    return(
        <div>
            <div className="generic-title text-center">
                <h2 className="mb-20">Related Product</h2>
            </div>
            <div className="row pr">
                <Slider {...settings}>
                    <div className="col-12 ">
                        <div className="product-box">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-1.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block">
                                        <div className="second-img">
                                            <img src="../assets/img/product/farniture-1-hover.jpg" alt="" className="w-80" />
                                        </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Light green crewneck sweatshir</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$58.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-2.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-2-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Light green crewneck sweatshir</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$58.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-4.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-4-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Tassels Pendant Earrings</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$85.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box ">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-5.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-5-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Shoes</span></a>
                                            <a href="shop" className="product-category"><span>Sneaker</span></a>
                                            <a href="shop" className="product-category"><span>Women</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Leather Courriere duffle bag</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$3.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box ">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-6.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-6-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                    <span className="sale bg-red text-white">sale!</span>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Shoes</span></a>
                                            <a href="shop" className="product-category"><span>Sneaker</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Wood design bedroom clook</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$45-$10.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box ">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-7.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-7-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                    <span className="sale bg-red text-white">sale!</span>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Capitalize on low hanging fruit to</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$250.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box ">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-8.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-8-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Light green crewneck sweatshir</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$58.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product-box ">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src="../assets/img/product/farniture-9.jpg" className="w-80" alt="" />
                                    <a href="single" className="d-block"><div className="second-img">
                                        <img src="../assets/img/product/farniture-9-hover.jpg" alt="" className="w-80" />
                                    </div></a>
                                    <a href="/" className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href="single" className="product-title">Tassels Pendant Earrings</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$85.00</span>
                                        <a href="cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default NewArrivals
