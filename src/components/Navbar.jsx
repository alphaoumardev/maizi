import {useState} from "react";
import {TextField} from "@mui/material";
import {Link} from "react-router-dom";

const Navbar =()=>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isOp, setIsOp] = useState(false);
    const [searchButton, setSearchButton] = useState(false);
    const toggleSearchButton = () =>{setSearchButton(!searchButton)}

    const close = () =>
    {
        setIsOpen(false)
        setIsOp(false)
    }
    const closing = ()=>{setSearchButton(false)}
    if(!isOpen || !isOp || !searchButton){setTimeout(close, 5000)}
    if(!searchButton){setInterval(closing, 20000)}


    return(
        <div >
            {/* header section start */}
            <header className="header pt-10 pb-10  is-sticky header-static " >

                <div className="container-fluid  " >
                    <div className="header-nav position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-3">
                                <div className="logo" >
                                    <Link to="/"><img src="../assets/../assets/img/logo/logo1.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 hidden-md position-static">
                                <div className="header-nav">
                                    <nav>
                                        <ul>
                                            {/*<li><Link  to="/"><b className="active">Home</b></a></li>*/}
                                            <li className="position-static"><Link to=""><span>Shop  <i className="bi bi-chevron-down" /></span></Link>
                                                <div className="mega-menu">
                                                    <div className="col-xl-7 pl-0 position-static">
                                                        <ul>
                                                            <li><Link to="category">Category</Link></li>
                                                            <li><Link to="products">Products</Link></li>
                                                            <li><Link to="shop">Shop</Link></li>
                                                            <li><Link to="singlepro">SinglePro</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <li><Link to="big">Big Product</Link></li>
                                                            <li><Link to="single">Single</Link></li>
                                                            <li><Link to="cart">Cart</Link></li>
                                                            <li><Link to="checkout">Checkout</Link></li>
                                                        </ul>
                                                        <ul>
                                                            <li><Link to="">Product Layout</Link></li>
                                                            <li><Link to="">Description Sticky</Link></li>
                                                            <li><Link to="">Product Carousels</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to=""><span>Blog <i className="bi bi-chevron-down" /></span> </Link>
                                                <ul className="submenu">
                                                    <li><Link to="blog">Blogs</Link></li>
                                                    <li><Link to="about">About</Link></li>
                                                    <li><Link to="author">Author</Link></li>
                                                    <li><Link to="blogrid">Sidebar</Link></li>
                                                    <li><Link to="bloglist">Blog list</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to=""><span>Portfolio <i className="bi bi-chevron-down" /></span> </Link>
                                                <ul className="submenu">
                                                    <li><Link to="portfolio">Single project</Link></li>
                                                    <li><Link to="portfolio2">Two Columns</Link></li>
                                                    <li><Link to="portfolio3">Three Columns</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to=""><span>Page</span> <i className="bi bi-chevron-down" /></Link>
                                                <ul className="submenu">
                                                    <li><Link to="about">About</Link></li>
                                                    <li><Link to="question">Frequently Questions</Link></li>
                                                    <li><Link to="contact">Contact</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="contact"><span>Contact</span></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-3 col-6 col-md-6 col-sm-6 col-9">
                                <div className="header-right">
                                    <ul className="text-right">
                                        <li>
                                            <span>
                                                <i onClick={toggleSearchButton} className="bi bi-search" title="Looking for something?" />
                                                {searchButton && <TextField  id="standard-size-small" defaultValue="" placeholder="Search" size="small" variant="standard" style={{paddingLeft:10}}/>}
                                            </span>
                                            <li><Link to="login" className="account"><i className="bi bi-person-fill" /> <article className="account-registar d-inline-block">Login</article></Link></li>
                                            <li><Link to="/" className="account"><i  className="bi bi-translate"/> </Link></li>

                                            {/* search popup */}

                                        </li>
                                        <li><Link to="wishlist" data-toggle="tooltip" data-placement="bottom"  data-original-title="view wishlist"><i className="bi bi-heart"><span>0</span></i></Link></li>
                                        <li><Link to="cart">
                                            <i className="bi bi-cart3"><span>5</span></i>
                                            </Link>
                                            <div className="minicart">
                                                <div className="minicart-body">
                                                    <div className="minicart-content">
                                                        <ul className="text-left">
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/1.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Capitalize on low hanging fruit t</Link>
                                                                    <strong>1 × $250.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/2.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Leather Courriere duffle ba</Link>
                                                                    <strong>1 × $150.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/3.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Party Supplies Around Cupcake</Link>
                                                                    <strong>1 × $150.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="minicart-checkout">
                                                    <div className="minicart-checkout-heading mt-8 mb-25 overflow-hidden">
                                                        <strong className="float-left">Subtotal:</strong>
                                                        <span className="price float-right">503.00</span>
                                                    </div>
                                                    <div className="minicart-checkout-links">
                                                        <Link to="cart" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">View cart</Link>
                                                        <Link to="checkout" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to=""><i className="bi bi-text-right" /></Link>
                                            <ul className="submenu bold-content text-right">
                                                <li><Link to="login">My Account</Link></li>
                                                <li><Link to="checkout">Checkout</Link></li>
                                                <li><Link to="shop">Shop</Link></li>
                                                <li><Link to="wishlist">Wishlist</Link></li>
                                                <li><Link to="question">Frequently</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobbile*/}
                    <div className="mobile-menu visible-sm">
                        <div id="mobile-menu">
                            <ul>
                                <li><Link className="pl-3" to="">Home</Link>
                                    <ul className="pl-4">
                                        <li><Link to="index">Home Fashion 1</Link></li>
                                        <li><Link to="index2">Home Fashion 2</Link></li>
                                        <li><Link to="index3">Home Fashion 3</Link></li>
                                        <li><Link to="index4">Home Fashion 4</Link></li>
                                        <li><Link to="index5">Home Fashion 5</Link></li>
                                        <li><Link to="index6">Home Fashion 6</Link></li>
                                        <li><Link to="index7">Home Fashion 7</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="pl-3" to="">Shop</Link>
                                    <ul>
                                        <li><Link to="shop">Shop Layout</Link></li>
                                        <li><Link to="shop4">Masonry – Grid</Link></li>
                                        <li><Link to="shop3">Pagination</Link></li>
                                        <li><Link to="shop2">Ajax Load More</Link></li>
                                        <li><Link to="shop2">Infinite Scroll</Link></li>
                                        <li><Link to="shop2">Sidebar Right</Link></li>
                                        <li><Link to="shop">Sidebar Left</Link></li>
                                        <li><Link to="shop">Shop Pages</Link></li>
                                        <li><Link to="shop2">List View</Link></li>
                                        <li><Link to="shop3">Small Products</Link></li>
                                        <li><Link to="shop2">Large Products</Link></li>
                                        <li><Link to="shop3">Shop — 3 Items</Link></li>
                                        <li><Link to="shop3">Shop — 4 Items</Link></li>
                                        <li><Link to="shop4">Shop — 5 Items</Link></li>
                                        <li><Link to="single-product-2">Product Layout</Link></li>
                                        <li><Link to="single-product">Description Sticky</Link></li>
                                        <li><Link to="single-product-2">Product Carousels</Link></li>
                                        <li><Link to="single-product-3">Gallery Modern</Link></li>
                                        <li><Link to="single-product-4">Thumbnail Left</Link></li>
                                        <li><Link to="single-product-5">Thumbnail Right</Link></li>
                                        <li><Link to="single-product-6">Thumbnail Botttom</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="">Blog</Link>
                                    <ul>
                                        <li><Link to="blog">Grid layout</Link></li>
                                        <li><Link to="blog2">Large image</Link></li>
                                        <li><Link to="blog3">Left Sidebar</Link></li>
                                        <li><Link to="blog4">Right Sidebar</Link></li>
                                        <li><Link to="blog5">No sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="">Portfolio</Link>
                                    <ul>
                                        <li><Link to="portfolio">Single project</Link></li>
                                        <li><Link to="portfolio2">Two Columns</Link></li>
                                        <li><Link to="portfolio3">Three Columns</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* /. mobile nav */}
                </div>
            </header>
            {/* header section end */}
        </div>
    )
}
export default Navbar
