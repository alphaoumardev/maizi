import {Link} from "react-router-dom";

const Footer = ()=>
{
    return(
        <div>
            {/* footer section start */}
            <section className="footer">
                <div className="footer-top  pb-120 pt-0" style={{backgroundColor: '#f5f5f5'}}>
                    <div className="footer-top-wrapper">
                        <div className="newsletter ">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <h2 className="title m-0">Sign Up For Our Newsletter</h2>
                                    <p>Subscribe our newsletter and get discount 20% Off</p>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="newsletter-form">
                                        <form action="#" method="POST">
                                            <input type="text" style={{padding:29}} placeholder="Search for our newsletter..." />
                                            <button type="submit" className="generic-btn red-hover-btn text-uppercase float-right">Subscribe
                                                Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.newsletter */}
                        <div className="service pt-57 mt-40 gray-border-top">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6 service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4 className="">Worldwide Shipping</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4 className="">Online Support 24/7</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 hidden-md service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4 className="">Money Return Guarantee</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /. service */}
                        {/* /. footer bottom */}
                    </div>
                </div>
                {/* footer top */}
                <div className="footer-bottom pt-70" style={{backgroundColor: '#292929'}}>
                    <div className="container-1180">
                        <div className="footer-bottom-wrapper">
                            <div className="footer-bottom-primary pb-60">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-9">
                                        <div className="footer-item has-desc">
                                            <div className="footer-logo mb-25">
                                                <img src="../assets/img/logo/logo2.png" width={120} height={31} alt="" />
                                            </div>
                                            <div className="footer-desc">
                                                <p className="mb-10">Mazia store is a premium theme with advanced admin module. It’s
                                                    extremely customizable, easy to use and fully responsive and retina ready.
                                                </p>
                                            </div>
                                            <div className="footer-img mt-65">
                                                <img src="../assets/img/logo/paypal.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">MY ACCOUNT</Link></li>
                                                        <li><Link to="login">My account</Link></li>
                                                        <li><Link to="checkout">Checkout</Link></li>
                                                        <li><Link to="shop">Shop</Link></li>
                                                        <li><Link to="wishlist">Wishlist</Link></li>
                                                        <li><Link to="question">Frequently</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">Quick Links</Link></li>
                                                        <li><Link to="shop">Special Offers</Link></li>
                                                        <li><Link to="shop">Gift Cards</Link></li>
                                                        <li><Link to="shop">F21 Red</Link></li>
                                                        <li><Link to="about">Privacy Policy</Link></li>
                                                        <li><Link to="about">Teams of Use</Link></li>
                                                        <li><Link to="portfolio">Portfolio</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 hidden-sm">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">Company Info</Link></li>
                                                        <li><Link to="about">About us</Link></li>
                                                        <li><Link to="blog">Careers</Link></li>
                                                        <li><Link to="portfolio">Business With Us</Link></li>
                                                        <li><Link to="shop">Find a Store</Link></li>
                                                        <li><Link to="question">Teams of Use</Link></li>
                                                        <li><Link to="portfolio">Press &amp; Talent</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer section end */}
            {/* product popup start */}
            <section id="product-popup">
                <div className="product-popup-overlay" />
                <div className="product-popup-container">
                    <div className="product-inner w-100">
                        <div className="product-inner-content">
                            <div className="quick-close-action"><i className="bi bi-x" /></div>
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="product-popup-1">
                                            <div className="product-popup-img">
                                                <img src="../assets/img/product/10.jpg" className="w-100" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-popup-2">
                                            <div className="product-popup-img">
                                                <img src="../assets/img/product/11.jpg" className="w-100" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-popup-3">
                                            <div className="product-popup-img">
                                                <img src="../assets/img/product/12.jpg" className="w-100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-pills justify-content-center mt-10">
                                        <li className="nav-item">
                                            <Link className="active" data-toggle="pill" to="#product-popup-1">
                                                <img src="../assets/img/product/10.jpg" className="w-100" alt="" />
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  data-toggle="pill" to="#product-popup-2">
                                                <img src="../assets/img/product/11.jpg" className="w-100" alt="" />
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  data-toggle="pill" to="#product-popup-3">
                                                <img src="../assets/img/product/12.jpg" className="w-100" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6">
                                    <div className="product-content">
                                        <div className="product-title">
                                            <h2>Nari Narwhal Usb...</h2>
                                        </div>
                                        <div className="price">$<span>44.00</span>–<span>$250.00</span></div>
                                        <Link to="single-product-4" className="all-feature">See all feature</Link>
                                        <div className="quick-quantity mt-30">
                                            <form action="#" method="POST">
                                                <input type="number" defaultValue={1} />
                                                <button type="submit" className="generic-btn red-hover-btn text-capitalize">add to
                                                    cart</button>
                                            </form>
                                        </div>
                                        <div className="product-desc pb-20 mt-25 gray-border-top">
                                            <p className="mb-0">Typi non habent claritatem insitam, est usus legentis in iis qui
                                                facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius
                                                quod ii legunt saepius. Claritas est etiam processus A Capitalize on low hanging
                                                fruit to identify a ballpark value added activity to beta test. Override the
                                                digital...ditional clickthroughs from DevOps. Nanotechnology immersion along the
                                                information highway will close the […]</p>
                                        </div>
                                        <div className="product-list mt-25">
                                            <ul>
                                                <li>– Light green crewnec...t.</li>
                                                <li>– Hand pockets.</li>
                                                <li>– Relaxed fit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product popup end */}
            {/* startup popup start */}
            <section id="startup-popup">
                <div className="product-popup-overlay has-startup" style={{opacity: 1, visibility: 'visible'}} />
                <div className="startup-popup-body">
                    <div className="startup-body-content h-100">
                        <div className="row justify-content-end h-100">
                            <div className="col-6 h-100">
                                <div className="startup-popup-inner h-100">
                                    <div className="close-search-popup">
                                        <i className="bi bi-x" />
                                    </div>
                                    <div className="startup-popup-main-content">
                                        <h2>Get Our Email Letter</h2>
                                        <p className="mb-0">Subscribe to the Mazia store mailing list to receive updates on new
                                            arrivals, special offers
                                            and other discount information.</p>
                                        <div className="startup-subscribe-form">
                                            <form action="#" method="POST">
                                                <input type="text" placeholder="Subscribe to our newsletter" className="mb-30" />
                                                <button className="generic-btn red-hover-btn text-uppercase">Subscribe now</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="startup-popup-sub-content">
                                        <div className="popup-warning">
                                            <input type="checkbox" id="startup-popup-hidden" />
                                            <label htmlFor="startup-popup-hidden">Do not show the popup again</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* startup popup end */}
        </div>
    )
}
export default Footer
