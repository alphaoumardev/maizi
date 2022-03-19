import Crumb from "../little/Crumb";
import {useState} from "react";
import {Link} from "react-router-dom";
import StarRating from "react-star-rate";

const Shop = ()=>
{
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () =>{setIsOpen(!isOpen)}
  const close = ()=>{setIsOpen(false)}
  if(!isOpen)
  {
    setTimeout(close, 15000)
  }
    return(
  <div>
  <Crumb/>
  <div className="shop-body mb-90 ml-3">
    <div className="container-fluid">
      <div className="shop-wrapper">
        <div className="row">
          <div className="col-xl-3 hidden-xl">
            {/* widget */}
            <div className="widget">
              <h4 className="mb-30">Product Categories</h4>
              <div className="accordion" id="accordionExample">
                <div className="list">
                  <Link to=" ">Accessories <span>(0)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-1">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-1" className="collapse show">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="shop">Camera 1</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Char &amp; Table <span>(10)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-2">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-2" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="shop">Chair <span>(30)</span></Link></li>
                        <li><Link to="shop4">Clothing <span>(45)</span></Link></li>
                        <li><Link to="shop4">Decore <span>(20)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Handbag <span>(10)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-3">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-3" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="shop4">Camerass <span>(1)</span></Link></li>
                        <li><Link to="shop4">Gift Cards <span>(5)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Kids <span>(15)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-4">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-4" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="shop">Lightings <span>(1)</span></Link></li>
                        <li><Link to="shop">Managed <span>(5)</span></Link></li>
                        <li><Link to="shop">Printers <span>(32)</span></Link></li>
                        <li><Link to="shop">Shoes <span>(32)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Price</h4>
              <form action="#">
                <div className="price-filter">
                  <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '46.4%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '15%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '60%'}} />
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}} />
                  </div>
                  <div className="filter-form-submit mt-35">
                    <button type="submit">Filter</button>
                    <div className="filter-price d-inline-block pl-20">Price: <input type="button" id="amount" defaultValue="$75 - $300" /></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Color</h4>
              <ul className="color-list">
                <li style={{backgroundColor: '#000'}} />
                <li style={{backgroundColor: '#1E73BE'}} />
                <li style={{backgroundColor: '#FFD700'}} />
                <li style={{backgroundColor: '#C9C9C9'}} />
                <li style={{backgroundColor: '#008000'}} />
                <li style={{backgroundColor: '#FFFF00'}} />
                <li style={{backgroundColor: '#FFFFFF'}} />
                <li style={{backgroundColor: '#DD3333'}} />
              </ul>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Size</h4>
              <div className="size-link">
                <Link to="shop2">3xl</Link>
                <Link to="shop2">l</Link>
                <Link to="shop2">m</Link>
                <Link to="shop2">s</Link>
                <Link to="shop2">xl</Link>
                <Link to="shop2">xxl</Link>
              </div>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Featured</h4>
              <div className="post-box">
                <ul>
                  <li>
                    <div className="post-img">
                      <img src="../assets/img/product/1.jpg" className="w-100" alt="" />
                    </div>
                    <div className="post-img-desc">
                      <Link to="single-product-4">Capitalize on low hanging fruit to</Link>
                      <div className="price">$250.00</div>
                    </div>
                  </li>
                  <li>
                    <div className="post-img">
                      <img src="../assets/img/product/2.jpg" className="w-100" alt="" />
                    </div>
                    <div className="post-img-desc">
                      <Link to="single-product-4">
                        Tassels pendant earringso</Link>
                      <div className="price">$30 - $334</div>
                    </div>
                  </li>
                  <li>
                    <div className="post-img">
                      <img src="../assets/img/product/3.jpg" className="w-100" alt="" />
                    </div>
                    <div className="post-img-desc">
                      <Link to="single-product-4">
                        Tassels pendant earringso</Link>
                      <div className="price">$30 - $334</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Popular Tags</h4>
              <div className="category-list">
                <ul>
                  <li><Link to="shop2">Accessories</Link></li>
                  <li><Link to="shop2">Clothing</Link></li>
                  <li><Link to="shop2">fashion</Link></li>
                  <li><Link to="shop2">Fly</Link></li>
                  <li><Link to="shop2">Glasses</Link></li>
                  <li><Link to="shop2">men</Link></li>
                  <li><Link to="shop2">Product</Link></li>
                  <li><Link to="shop2">version</Link></li>
                  <li><Link to="shop2">women</Link></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /. widget */}
          <div className="col-xl-9">
            <div className="filter-heading">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="filter-shown-item">
                    <p className="mb-0">Showing <span>1</span>–<span>24</span> of <span className="total_count">56</span> results</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="shop-filter-tab">
                    <ul className="nav nav-pills" role="tablist">
                      <li><span>Views</span></li>
                      <li className="nav-item">
                        <a className="active" data-toggle="pill" href="#shop-tab-1" data-placement="top" title="2 grid"><i className="bi bi-layout-split" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-2" data-placement="top" title="3 grid"><i className="bi bi-grid" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-3" data-placement="top" title="4 grid"><i className="bi bi-grid-3x3-gap" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-4" data-placement="top" title="list view"><i className="bi bi-list-stars" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex justify-content-end position-static">
                  <div className="sorting d-inline-block">
                    <select name="sort" id="shop-sort">
                      <option value="default">Default sorting</option>
                      <option value="default">Short by popularity</option>
                      <option value="default">Sort by average rating</option>
                      <option value="default">Sort by latest</option>
                      <option value="default">Sort by price: low to high</option>
                      <option value="default">Sort by price: high to low</option>
                    </select>
                  </div>
                  <div className="filter">
                    <h6 className="d-inline-block filter-widget-toggle" onClick={togglePopup}>Filter <i className="bi bi-chevron-down"/></h6>
                    {isOpen && <div className="filter-popup">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="filter-popup-item">
                            <div className="widget">
                              <h4 className="mb-30">Filter By Color</h4>
                              <ul className="color-list">
                                <li style={{backgroundColor: '#000'}} />
                                <li style={{backgroundColor: '#1E73BE'}} />
                                <li style={{backgroundColor: '#FFD700'}} />
                                <li style={{backgroundColor: '#C9C9C9'}} />
                                <li style={{backgroundColor: '#008000'}} />
                                <li style={{backgroundColor: '#FFFF00'}} />
                                <li style={{backgroundColor: '#FFFFFF'}} />
                                <li style={{backgroundColor: '#DD3333'}} />
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Size</h4>
                            <div className="size-link">
                              <Link to="shop2">3xl</Link>
                              <Link to="shop2">l</Link>
                              <Link to="shop2">m</Link>
                              <Link to="shop2">s</Link>
                              <Link to="shop2">xl</Link>
                              <Link to="shop2">xxl</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Price</h4>
                            <form action="#">
                              <div className="price-filter">
                                <div id="slider-range-2" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                  <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '46.4%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '15%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '60%'}} />
                                  <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}} />
                                </div>
                                <div className="filter-form-submit mt-35">
                                  <button type="submit">Filter</button>
                                  <div className="filter-price d-inline-block pl-20">
                                    Price: <input type="button" id="amount-2" defaultValue="$75 - $300" /></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 position-static">
                          <div className="widget">
                            <h4 className="mb-30">Popular Tags</h4>
                            <div className="category-list">
                              <ul>
                                <li><Link to="shop2">Accessories</Link></li>
                                <li><Link to="shop">Clothing</Link></li>
                                <li><Link to="shop4">fashion</Link></li>
                                <li><Link to="shop">Fly</Link></li>
                                <li><Link to="shop2">Glasses</Link></li>
                                <li><Link to="shop">men</Link></li>
                                <li><Link to="shop4">Product</Link></li>
                                <li><Link to="shop">version</Link></li>
                                <li><Link to="shop2">women</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
            {/* /. filter heading */}
            <div className="filter-content">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="shop-tab-1">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/5.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/5-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Light green crewnec...</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$58.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/7.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/7-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                  <Link to="shop2" className="product-category"><span>Women</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Leather Courriere duffle
                                bag</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$3.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/9.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/9-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Capitalize on low hanging
                                fruit to</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$250.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-20">
                      <Link to="shop" className="load-more">LOAD MORE...</Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-2">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/5.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/5-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Light green crewnec...</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$58.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/7.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/7-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                  <Link to="shop2" className="product-category"><span>Women</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Leather Courriere duffle
                                bag</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$3.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/9.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/9-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Capitalize on low hanging
                                fruit to</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$250.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/6.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/6-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Handbag</span></Link>
                                  <Link to="shop2" className="product-category"><span>Handbag</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Coating design lighting
                                lamp</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$7.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/7.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/7-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                  <Link to="shop2" className="product-category"><span>Women</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Leather Courriere duffle
                                bag</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$3.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-6">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-20">
                      <Link to="shop" className="load-more">LOAD MORE...</Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-3">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/5.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/5-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Light green crewnec...</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$58.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/7.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/7-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                  <Link to="shop2" className="product-category"><span>Women</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Leather Courriere duffle
                                bag</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$3.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/9.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/9-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Capitalize on low hanging
                                fruit to</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$250.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/6.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/6-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Handbag</span></Link>
                                  <Link to="shop2" className="product-category"><span>Handbag</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Coating design lighting
                                lamp</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$7.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/4.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/4-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Woman</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Tassels Pendant
                                Earrings</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$85.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/7.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/7-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                  <Link to="shop2" className="product-category"><span>Women</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Leather Courriere duffle
                                bag</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$3.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="product-img">
                              <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                              <Link to="single-product-4" className="d-block">
                                <div className="second-img">
                                  <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                </div>
                              </Link>
                              <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                view</Link>
                              <span className="sale bg-red text-white">sale!</span>
                            </div>
                            <div className="product-desc pb-20">
                              <div className="product-desc-top">
                                <div className="categories">
                                  <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                  <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                              </div>
                              <Link to="single-product-4" className="product-title">Wood design bedroom
                                clook</Link>
                              <div className="price-switcher">
                                <span className="price switcher-item">$45-$10.00</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add
                                  to cart</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-20">
                      <Link to="shop" className="load-more">LOAD MORE...</Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-4">
                  <div className="product-wrapper mt-55">
                    <div className="product-box mb-40">
                      <div className="product-box-wrapper">
                        <div className="list-product mb-50">
                          <div className="list-product-wrapper">
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="list-product-img">
                                  <div className="product-img">
                                    <img src="../assets/img/product/8.jpg" className="w-100" alt="" />
                                    <Link to="single" className="d-block">
                                      <div className="second-img">
                                        <img src="../assets/img/product/8-hover.jpg" alt="" className="w-100" />
                                      </div>
                                    </Link>
                                    <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                      view</Link>
                                    <span className="sale bg-red text-white">sale!</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="list-product-desc">
                                  <h3><Link to="single" className="title mb-15">Blandit vel eros
                                      condimentum ulla</Link></h3>

                                      <StarRating count={5} symbol="★" color2={'#ffd700'} />


                                  <div className="price"><span>$90.00</span></div>
                                  <div className="desc">
                                    <p>Typi non habent claritatem insitam, est usus
                                      legentis in iis qui facit eorum claritatem.
                                      Investigationes demonstraverunt lectores
                                      legere
                                      me lius quod ii legunt saepius. Claritas est
                                      etiam processus A Capitalize on low hanging
                                      fruit to identify a ballpark value added
                                      activity to beta test. Override the digital
                                      divide with additional clickthroughs from
                                      DevOps
                                      […]</p>
                                    <ul>
                                      <li>– Light green crewneck sweatshirt.</li>
                                      <li>– Hand pockets.</li>
                                      <li>– Relaxed fit.</li>
                                    </ul>
                                    <Link to="cart" className="list-add-cart-btn text-capitalize mt-40">+add
                                      to cart</Link>
                                    <Link to="single" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                    <Link to=" " data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /. list product */}
                      </div>
                    </div>
                    <div className="product-box mb-40">
                      <div className="product-box-wrapper">
                        <div className="list-product mb-50">
                          <div className="list-product-wrapper">
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="list-product-img">
                                  <div className="product-img">
                                    <img src="../assets/img/product/9.jpg" className="w-100" alt="" />
                                    <Link to="single" className="d-block">
                                      <div className="second-img">
                                        <img src="../assets/img/product/9-hover.jpg" alt="" className="w-100" />
                                      </div>
                                    </Link>
                                    <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                      view</Link>
                                    <span className="sale bg-red text-white">sale!</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="list-product-desc">
                                  <h3><Link to="single" className="title mb-15">Blossom
                                      Porcelain Side Plates</Link></h3>

                                      <StarRating count={5} symbol="★" color2={'#ffd700'} />


                                  <div className="price"><span className="red-color">$399</span><del>$499</del>
                                  </div>
                                  <div className="desc">
                                    <p>Typi non habent claritatem insitam, est usus
                                      legentis in iis qui facit eorum claritatem.
                                      Investigationes demonstraverunt lectores
                                      legere
                                      me lius quod ii legunt saepius. Claritas est
                                      etiam processus A Capitalize on low hanging
                                      fruit to identify a ballpark value added
                                      activity to beta test. Override the digital
                                      divide with additional clickthroughs from
                                      DevOps
                                      […]</p>
                                    <ul>
                                      <li>– Light green crewneck sweatshirt.</li>
                                      <li>– Hand pockets.</li>
                                      <li>– Relaxed fit.</li>
                                    </ul>
                                    <Link to="cart" className="list-add-cart-btn text-capitalize mt-40">+add
                                      to cart</Link>
                                    <Link to="single" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                    <Link to=" " data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /. list product */}
                      </div>
                    </div>
                    <div className="product-box mb-40">
                      <div className="product-box-wrapper">
                        <div className="list-product mb-50">
                          <div className="list-product-wrapper">
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="list-product-img">
                                  <div className="product-img">
                                    <img src="../assets/img/product/farniture-1.jpg" className="w-100" alt="" />
                                    <Link to="single-product-4" className="d-block">
                                      <div className="second-img">
                                        <img src="../assets/img/product/farniture-1-hover.jpg" alt="" className="w-100" />
                                      </div>
                                    </Link>
                                    <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                      view</Link>
                                    <span className="sale bg-red text-white">sale!</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="list-product-desc">
                                  <h3><Link to="single" className="title mb-15">Blossom
                                      Porcelain Side Platess</Link></h3>

                                      <StarRating count={5} symbol="★" color2={'#ffd700'} />

                                  <div className="price"><span className="red-color">$399</span><del>$499</del>
                                  </div>
                                  <div className="desc">
                                    <p>Typi non habent claritatem insitam, est usus
                                      legentis in iis qui facit eorum claritatem.
                                      Investigationes demonstraverunt lectores
                                      legere
                                      me lius quod ii legunt saepius. Claritas est
                                      etiam processus A Capitalize on low hanging
                                      fruit to identify a ballpark value added
                                      activity to beta test. Override the digital
                                      divide with additional clickthroughs from
                                      DevOps
                                      […]</p>
                                    <ul>
                                      <li>– Light green crewneck sweatshirt.</li>
                                      <li>– Hand pockets.</li>
                                      <li>– Relaxed fit.</li>
                                    </ul>
                                    <Link to="cart" className="list-add-cart-btn text-capitalize mt-40">+add
                                      to cart</Link>
                                    <Link to="wishlist" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                    <Link to=" " data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /. list product */}
                      </div>
                    </div>
                    <div className="product-box mb-40">
                      <div className="product-box-wrapper">
                        <div className="list-product mb-50">
                          <div className="list-product-wrapper">
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="list-product-img">
                                  <div className="product-img">
                                    <img src="../assets/img/product/farniture-2.jpg" className="w-100" alt="" />
                                    <Link to="single-product-4" className="d-block">
                                      <div className="second-img">
                                        <img src="../assets/img/product/farniture-2-hover.jpg" alt="" className="w-100" />
                                      </div>
                                    </Link>
                                    <Link to=" " className="product-img-link quick-view-1 text-capitalize">Quick
                                      view</Link>
                                    <span className="sale bg-red text-white">sale!</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="list-product-desc">
                                  <h3><Link to="single" className="title mb-15">Blandit vel eros
                                      condimentum ulla</Link></h3>
                                      <StarRating count={5} symbol="★" color2={'#ffd700'} />

                                  <div className="price"><span>$90.00</span></div>
                                  <div className="desc">
                                    <p>Typi non habent claritatem insitam, est usus
                                      legentis in iis qui facit eorum claritatem.
                                      Investigationes demonstraverunt lectores
                                      legere
                                      me lius quod ii legunt saepius. Claritas est
                                      etiam processus A Capitalize on low hanging
                                      fruit to identify a ballpark value added
                                      activity to beta test. Override the digital
                                      divide with additional clickthroughs from
                                      DevOps
                                      […]</p>
                                    <ul>
                                      <li>– Light green crewneck sweatshirt.</li>
                                      <li>– Hand pockets.</li>
                                      <li>– Relaxed fit.</li>
                                    </ul>
                                    <Link to="cart" className="list-add-cart-btn text-capitalize mt-40">+add
                                      to cart</Link>
                                    <Link to="single" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                    <Link to=" " data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /. list product */}
                      </div>
                    </div>
                    {/* /. product box */}
                    <div className="text-center mt-20">
                      <Link to="shop" className="load-more">LOAD MORE...</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /. filter content */}
          </div>
          {/* /. shop products */}
        </div>
      </div>
    </div>
  </div>

  {/* product popup start */}
  <section id="product-popup">
    <div className="product-popup-overlay" />
    <div className="product-popup-container">
      <div className="product-inner w-100">
        <div className="product-inner-content">
          <div className="quick-close-action"><i className="bi bi-hourglass" /></div>
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
              <ul className="nav nav-pills justify-content-center mt-10" role="tablist">
                <li className="nav-item">
                  <Link className="active" data-toggle="pill" to="#product-popup-1">
                    <img src="../assets/img/product/10.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className data-toggle="pill" to="#product-popup-2">
                    <img src="../assets/img/product/11.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className data-toggle="pill" to="#product-popup-3">
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
                <i className="bi bi-hourglass" />
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
export  default Shop
