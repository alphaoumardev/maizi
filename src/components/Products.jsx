import Futured from "./Futured";
import Owl from "./Owl";
import React from "react";
import AllProducts from "./AllProducts";
import {Link} from "react-router-dom";
import NewArrivals from "../comps/NewArrivals";

const Products = () =>
{
    return(
<div>
  <Owl/>
  {/* Banner section Start */}
  <div className="banner-section section-padding-bottom section-padding-top">
    <div className="container">
      <div className="row mb-n4">
        <div className="col-lg-6 mb-4">
          <div className="banner">
            {/* thumb-nail start */}
            <Link to="single" className="thumb-nail">
              <img src="../assets/images/banner/banner6.jpg" alt="image_not_found" />
            </Link>
            {/* thumb-nail end */}
            <div className="banner-content home-style2 banner-position-top-center">
              <span className="banner-sub-title">Accent Chair</span>
              <h3 className="banner-title">Up To 50% Off</h3>
              <Link to="single" className="btn btn-light">Shop Now</Link>
            </div>
            {/* banner-content end */}
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="banner">
            {/* thumb-nail start */}
            <Link to="single" className="thumb-nail">
              <img src="../assets/images/banner/banner7.jpg" alt="image_not_found" />
            </Link>
            {/* thumb-nail end */}
            <div className="banner-content banner-position-top-center">
              <span className="banner-sub-title">New Arrvials</span>
              <h3 className="banner-title">Style &amp; Comfort</h3>
              <Link to="single" className="btn btn-light">Shop Now</Link>
            </div>
            {/* banner-content end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner section End */}

  {/* featured product start */}
  <div className="col-12">
    <section className="section-title text-center">
      <h3 className="title">Featured Products</h3>
    </section>
  </div>

  <Futured/>
  {/* featured product end */}

  {/* Banner section Start */}
  <div className="banner-section section-padding-bottom">
    <div className="container">
      <div className="row mb-n4">
        <div className="col-lg-6 mb-4">
          <div className="row mb-n4">
            <div className="col-12 mb-4">
              <div className="banner">
                {/* thumb-nail start */}
                <Link to="single" className="thumb-nail">
                  <img src="../assets/images/banner/banner8.jpg" alt="image_not_found" />
                </Link>
                <span className="label">Seating Chair</span>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="banner">
                {/* thumb-nail start */}
                <Link to="single" className="thumb-nail">
                  <img src="../assets/images/banner/banner10.jpg" alt="image_not_found" />
                </Link>
                <span className="label">Lighting</span>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="banner">
                {/* thumb-nail start */}
                <Link to="single" className="thumb-nail">
                  <img src="../assets/images/banner/banner11.jpg" alt="image_not_found" />
                </Link>
                <span className="label">Tables</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="banner">
            {/* thumb-nail start */}
            <Link to="single" className="thumb-nail">
              <img src="../assets/images/banner/banner9.jpg" alt="image_not_found" />
            </Link>
            <span className="label">Home Decor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner section End */}
  {/* product tab section start */}
  <div className="product-tab-section section-padding-bottom">
    <div className="container">
      <div className="row">
        {/* tabs liks start */}
        <div className="col-12">
          <ul className="nav nav-pills product-tab-nav" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-arrivals">New Arrivals</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-seller">Best Sellers</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-onsale">On Sale</button>
            </li>
          </ul>
        </div>
        {/* tabs liks end */}

      </div>
    </div>
  </div>
  {/* product tab section end */}
  <NewArrivals/>

  {/* large banner section start */}
  <section className="large-banner-section section-padding-bottom">
    <div className="container">
      <div className="row mb-n4">
        <div className="col-lg-8 mb-4">
          <Link to="single" className="thumb-nail">
            <img src="../assets/images/banner/banner12.jpg" alt="image_not_found" />
          </Link>
          {/* thumb-nail end*/}
        </div>
        <div className="col-lg-4 mb-4">
          <div className="large-banner-content large-banner-content-wrap text-center text-lg-start">
            <h3 className="large-banner-title">Palafittle 83</h3>
            <h4 className="large-banner-title">Coffee Table</h4>
            <p>We design your home more beautiful</p>
            <ul>
              <li><span>Origin</span>
                <em>Japan</em>
              </li>
              <li><span>Material</span>
                <em>Oak</em>
              </li>
              <li><span>Designer</span>
                <em>hastheme</em>
              </li>
            </ul>
            <Link to="single" className="btn btn-dark">discover now</Link>
          </div>
          {/* large-banner-content end */}
        </div>
      </div>
    </div>
  </section>
  {/* large banner section end */}

  <AllProducts/>
</div>

    )
}
export default Products
