import {Link} from "react-router-dom";

const Banners = ()=>
{
    return(
        <div>
            {/*/!*<!-- Banner section Start -->*!/*/}
            <section className="banner-section section-padding-bottom section-padding-top">
                <div className="container">
                    <div className="row mb-n4">
                        <div className="col-lg-8 mb-4">
                            <div className="banner">
                                {/*/!*<!-- thumb-nail start -->*!/*/}
                                <Link to="#" className="thumb-nail">
                                    <img src="../assets/images/banner/banner1.jpg" alt="image_not_found"/>
                                </Link>
                                {/*/!*<!-- thumb-nail end -->*!/*/}
                                <div className="banner-content banner-position-top-left">
                                    <span className="banner-sub-title">Furniture </span>
                                    <h3 className="banner-title">For Sale</h3>
                                    <Link to="single" className="btn btn-outline-dark">Shop Now</Link>
                                </div>
                                {/* <!-- banner-content end -->*/}
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="banner">
                                {/* <!-- thumb-nail start -->*/}
                                <Link to="#" className="thumb-nail">
                                    <img src="../assets/images/banner/banner2.jpg" alt="image_not_found"/>
                                </Link>
                                {/*// <!-- thumb-nail end -->*/}
                                <div className="banner-content banner-position-bottom-left">
                                    <span className="banner-sub-title">Led </span>
                                    <h3 className="banner-title">bulbs</h3>
                                    <Link to="single" className="btn btn-outline-dark">Shop Now</Link>
                                </div>
                                {/*// <!-- banner-content end -->*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Banner section End -->*/}
        </div>
    )
}
export default Banners
