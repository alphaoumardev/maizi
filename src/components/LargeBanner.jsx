import {Link} from "react-router-dom";

const LargeBanner =()=>
{
    return(
        <div>
            {/*<!-- large banner section start -->*/}
            <section className="large-banner-section section-padding-top section-padding-bottom">
                <div className="container">
                    <div className="row mb-n4">
                        <div className="col-lg-4 mb-4">
                            <div className="large-banner-content text-center text-lg-end">
                                <h3 className="large-banner-sub-title">Select Home Decor</h3>
                                <h3 className="large-banner-sub-title">& Furniture</h3>
                                <h4 className="large-banner-title">Up to 35% Off</h4>
                                <Link to="shop-grid-left-sidebar.html" className="btn btn-outline-dark">Shop Decor</Link>
                                <Link to="shop-grid-left-sidebar.html" className="btn btn-outline-dark">Shop
                                    Furniture</Link>
                            </div>
                            {/*<!-- large-banner-content end -->*/}
                            <Link to="shop-grid-left-sidebar.html" className="thumb-nail">
                                <img src="../assets/images/banner/banner3.jpg" alt="image_not_found"/>
                            </Link>
                            {/*/!*<!-- thumb-nail end-->*!/*/}
                        </div>
                        <div className="col-lg-8 mb-4">
                            <div className="large-banner-wrap position-relative">
                                <Link to="shop-grid-left-sidebar.html" className="large-thumb-nail">
                                    <img src="../assets/images/banner/banner4.jpg" alt="image_not_found"/>
                                </Link>
                                {/*/!*<!-- thumb-nail end-->*!/*/}
                                <Link to="shop-grid-left-sidebar.html" className="small-thumb-nail">
                                    <img src="../assets/images/banner/banner5.jpg" alt="image_not_found"/>
                                </Link>
                                {/*/!*<!-- thumb-nail end-->*!/*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/!*<!-- large banner section end -->*!/*/}

        </div>
    )
}
export default LargeBanner
