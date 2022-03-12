import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

const Futured = () =>
{
  function NextArrow(props)
  {
    const { className,onClick } = props;
    return (<div className="swiper-button-next" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </div> );
  }

  function PrevArrow(props)
  {
    const {className, onClick } = props;
    return (<div className="swiper-button-prev" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </div> );
  }
  const settings =
  {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility:true,
    easing:'linear',
    focusOnSelect:true,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };


    return (
     <div>
  {/* featured product start */}
  <div className="featured-product-section section-padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="featured-product swiper-arrow arrow-position-center">
              <Slider {...settings}>
                  <div>
                    <div  className="swiper-slide">
                      <div  className="product-list">
                        <div  className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-warning">hot</span>
                            <img src="../assets/images/products/product7.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">Gold Metal Fox Design Trinket Tray</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-danger">sale!</span>
                            <img src="../assets/images/products/product1.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">3 Tier Wood With Metal Shelf</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-danger">sale!</span>
                            <img src="../assets/images/products/product3.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">68in. Bronze Metal Coat Rack</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price">$85.00 - $60.00</h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-warning">hot!</span>
                            <img src="../assets/images/products/product5.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">Gold Circle Mirrored Shelf Bar Cart</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-warning">hot</span>
                            <img src="../assets/images/products/product7.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">Gold Metal Fox Design Trinket Tray</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-success">new</span>
                            <img src="../assets/images/products/product9.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">Parkview 5 Tier Metal &amp; Wood</Link>
                            </h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>
                  <div>
                    <div className="swiper-slide">
                      <div className="product-list">
                        <div className="product-card">
                          <Link to="shop-grid-left-sidebar.html" className="product-thumb">
                            <span className="onsale bg-danger">sale!</span>
                            <img src="../assets/images/products/product1.jpg" alt="image_not_found" />
                          </Link>
                          {/* thumb end */}
                          <div className="product-content">
                            <h4><Link to="shop-grid-left-sidebar.html" className="product-title">3 Tier Wood With Metal Shelf</Link></h4>
                            <div className="product-group">
                              <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                              <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                            </div>
                          </div>
                          {/* actions  */}
                          <ul className="actions actions-verticale">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="ion-ios-heart-outline" /></button>
                            </li>
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="ion-ios-eye-outline" /></button>
                            </li>
                            <li className="action compare">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="ion-android-sync" /></button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* product list end */}
                    </div>
                    {/* swiper-slide end */}
                  </div>

                </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* featured product end */}

<div>
  {/* Modal */}
  <div className="modal fade" id="product-modal">
    <div className="modal-dialog modal-dialog-centered product-modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
        <div className="modal-body">
          <div className="row mb-n7">
            <div className="col-xl-5 mb-10">
              <div className="modal-gallery-slider">
                <div className="product-modal-gallery">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/1.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/2.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/3.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/4.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/5.jpg" alt="image_not_found" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-modal-gallery-thumbs">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/">
                          <img src="../assets/images/products/small/1.jpg" alt="image_not_found" />
                        </Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/2.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/3.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/4.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/5.jpg" alt="image_not_found" /></Link>
                      </div>
                    </div>
                  </div>
                  {/* If we need pagination */}
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-7">
              <div className="modal-product-des">
                <h3 className="modal-product-title"><Link to="#">Tropical Juice Drink</Link></h3>
                <div className="reviews">
                  <span className="ion-star" />
                  <span className="ion-star" />
                  <span className="ion-star" />
                  <span className="ion-star" />
                  <span className="ion-star" />
                </div>
                <div className="product-price-wrapp-lg">
                  <span className="product-regular-price-lg">€43.80</span>
                  <span className="product-price-on-sale-lg">€39.42</span>
                  <span className="badge badge-lg bg-dark">Save 8%</span>
                </div>
                <div className="product-description-short">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                </div>
                <div className="product-variants">
                  <div className="product-variants-item">
                    <span className="control-label">Size</span>
                    <select className="form-control form-control-select">
                      <option value={1} title="S" selected="selected">S</option>
                      <option value={2} title="M">M</option>
                      <option value={3} title="L">L</option>
                      <option value={4} title="XL">XL</option>
                    </select>
                  </div>
                  <div className="product-variants-item">
                    <span className="control-label">color</span>
                    <ul>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" />
                          <span className="color" />
                        </label>
                      </li>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" defaultChecked="checked" />
                          <span className="color" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-add-to-cart">
                  <span className="control-label">Quantity</span>
                  <div className="product-count style d-flex my-4">
                    <div className="count d-flex">
                      <input type="number" min={1} max={100} step={1} defaultValue={1} />
                      <div className="button-group">
                        <button className="count-btn increment">
                          <span className="ion-chevron-up" />
                        </button>
                        <button className="count-btn decrement">
                          <span className="ion-chevron-down" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <button data-bs-toggle="modal" data-bs-target="#add-to-cart" className="btn btn-dark">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="product-add-to-card">
                    <Link className="product-add-to-card-item" to="#"><i className="ion-ios-heart-outline" /> Add to wishlist</Link>
                    <Link className="product-add-to-card-item" to="#"><i className="ion-android-sync" /> My wishlist</Link>
                  </div>
                  <div className="product-social-sharing">
                    <span>Share</span>
                    <ul>
                      <li className="facebook"><Link to="#" target="_blank"><i className="ion-social-facebook" /></Link></li>
                      <li className="twitter"><Link to="#" target="_blank"><i className="ion-social-twitter" /></Link></li>
                      <li className="pinterest"><Link to="#" target="_blank"><i className="ion-social-pinterest" /></Link></li>
                      <li className="google"><Link to="#" target="_blank"><i className="ion-social-google" /></Link></li>
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
  {/* Modal */}
  <div className="modal fade" id="product-modal-compare">
    <div className="modal-dialog modal-dialog-centered compare-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> <i className="ion-checkmark" /> Product added to compare.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-wishlist">
    <div className="modal-dialog modal-dialog-centered wishlist-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> You must be logged in to manage your wishlist.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="addto-cart-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-dark border-bottom-0 justify-content-center">
          <span className="ion-android-done me-5" />
          <h4 className="modal-title text-center">Product successfully added to your shopping cart</h4>
          <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close">×</button>
        </div>
        <div className="modal-body p-5">
          <div className="row align-items-center align-items-lg-start">
            <div className="col-lg-5">
              <div className="row align-items-center align-items-lg-start">
                <div className="col-md-6">
                  <img className="product-image" src="../assets/images/products/product1.jpg" alt="images_not_found" />
                </div>
                <div className="col-md-6">
                  <h6 className="product-name">Snacking Essentials Walnuts</h6>
                  <ul className="quntity-list">
                    <li>€23.06</li>
                    <li>Color: White</li>
                    <li>Quantity:1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cart-content">
                <p className="title">There are 3 items in your cart.</p>
                <p><span>Total products:</span>€23.06</p>
                <p><span>Total shipping:</span>Free</p>
                <p><span>Taxes:</span> €0.00</p>
                <p><span>Total:</span> €23.06 (tax excl.)</p>
                <div className="cart-content-btn">
                  <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                    shopping</button>
                  <button className="btn btn-sm btn-dark mt-3 mt-sm-0">Proceed to
                    checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

    );
}

export default Futured;

