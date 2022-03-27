import Crumb from "../little/Crumb";
import Featured from "../components/Featured";
import {Link} from "react-router-dom";
import StarRating from "react-star-rate";

import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Colors from "../items/variants/Colors";
import Sizes from "../items/variants/Sizes";

const SingleProduct = () =>
{

  const location = useLocation();
  const [one, setArticle] = useState();
  const [variant, setVariant] = useState()
  // let [path, setPath] = useState('')
  // let id = path
  let id = location.pathname.split("/")[2];
  // let id = window.location.href.split('/')[4];

  // if(location.pathname === `/single/1`)
  // {
  //   id = location.pathname.split("/")[2];
  // }
  // else
  //   id = location.pathname.split("/")[3];


  useEffect(()=>
  {
    const getOne = async ()=>
    {
      const res = await axios.get(`/one/`+id)
          setArticle(res.data)
    }
    const getVariant = async ()=>
    {
      const res = await axios.get(`/byvariant/`+id)
      setVariant(res.data)
      console.log(res.data)
    }
    getOne(id).then(()=>{})
    getVariant(id).then(()=>{})

  },[id])
    return(
   <div>

  {/* single product start */}
  <section className="single-product mb-90">
    <div className="container-fluid">
      <Crumb/>

      <div className="shop-wrapper">
        <div className="single-product-top">
          <div className="row">
            <div className="col-lg-5 ">
              <div className="shop-img">
                <div className="row">
                  <div className="col-8">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div className="tab-pane fade show active" id="tab-1">
                        <div className="product-img">
                          <a href={one?.image} className="popup-image"><img src={one?.image_hover} className="w-100" alt=" " /></a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2">
                        <div className="product-img">
                          <a href="../assets/img/product/farniture-8.jpg" className="popup-image"><img src="../assets/img/product/farniture-8.jpg" className="w-100" alt=" " /></a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-3">
                        <div className="product-img">
                          <a href="../assets/img/product/farniture-9.jpg" className="popup-image"><img src="../assets/img/product/farniture-9.jpg" className="w-100" alt=" " /></a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-4">
                        <div className="product-img">
                          <a href="../assets/img/product/farniture-10.jpg" className="popup-image"><img src="../assets/img/product/farniture-10.jpg" className="w-100" alt=" " /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 ">
                    <div className="nav nav-pills has-border-img" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="active" data-toggle="pill" href="#tab-1">
                        <img src={one?.image_hover} className="w-100 mt-5-px" alt=" " />
                      </a>
                      <a data-toggle="pill" href="#tab-2">
                        <img src={one?.image} className="w-100 mt-5-px" alt=" " />
                      </a>
                      <a data-toggle="pill" href="#tab-3">
                        <img src="../assets/img/product/farniture-9.jpg" className="w-100 mt-5-px" alt=" " />
                      </a>
                      <a data-toggle="pill" href="#tab-4">
                        <img src="../assets/img/product/farniture-10.jpg" className="w-100 mt-5-px" alt=" " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="single-product-sidebar">
                <div className="product-content">

                  <div className="single-product-title">
                    <h2>{one?.name}</h2>
                  </div>
                  <div className="single-product-price">$<span>{one?.price}</span></div>
                  <div className="single-product-component">
                    <h6>Color</h6>
                    <form action="#" style={{overflow: 'hidden'}} className="mt-15">
                      {variant?.map((no, index)=>(
                          <Colors key={index} variant={no}/>
                      ))}
                    </form>
                  </div>
                  <div className="single-product-component mt-15">
                    <div className="size">
                      <h6>Size</h6>
                      <form action="#">
                        {variant?.map((no, index)=>(
                            <Sizes key={index} variant={no}/>
                        ))}
                      </form>
                    </div>
                  </div>
                  <div className="quick-quantity mt-60">
                    <form action="#" method="POST">
                      <button type="submit" className="list-add-cart-btn red-hover-btn border-0" style={{paddingLeft: 80, paddingRight: 80, transition: 'all .5s'}}>Add to cart
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xl-4 ">
              <div className="single-product-desc mb-12 bold-submenu">
                <h4><strong> Single Description</strong></h4>
                <p>{one?.description}</p>
                <div className="product-list single-product-list">
                  <ul>
                    <li>– Light green crewneck sweatshirt.</li>
                    <li>– Hand pockets.</li>
                  </ul>

                  <div className="single-product-action mt-35">
                    <ul>
                      <li><Link to="wishlist"><i className="bi bi-heart" /> add to wishlist</Link></li>
                      <li><Link to="single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>
                    </ul>
                  </div>
                  <div className="sku"><span>Sku: </span> <strong>M-Hat-8</strong></div>
                  <div className="single-product-category">
                    <ul>
                      <li className="mb-0"><Link to="/" className="title">Categories: </Link></li>
                      <li className="mb-0"><Link to="single">Chair &amp; Table</Link></li>
                      <li className="mb-0"><Link to="single">Chairs</Link></li>
                      <li className="mb-0"><Link to="single">Handbeg</Link></li>
                    </ul>
                  </div>
                  <div className="share-product mt-20">
                    <ul>
                      <li><Link to="/" className="title">Share this product</Link></li>
                      <li><Link to="/" data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook" /></Link></li>
                      <li><Link to="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
                      <li><Link to="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest" /></Link></li>
                      <li><Link to="/" data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="single-product-bottom mt-80 gray-border-top">
          <ul className="nav nav-pills justify-content-center mt-100">
            <li className="nav-item">
              <a className="active" data-toggle="pill" href="#desc-tab-1">Description</a>
            </li>
            <li className="nav-item">
              <a data-toggle="pill" href="#desc-tab-3">Additional information</a>
            </li>
            <li className="nav-item">
              <a  data-toggle="pill" href="#desc-tab-2">Reviews (0)</a>
            </li>
          </ul>
          <div className="container container-1200">
            <div className="tab-content mt-60">
              <div className="tab-pane fade show active" id="desc-tab-1">
                <div className="single-product-tab-content">
                  <h3 className="title mb-30">Description</h3>
                  <p>Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen &amp; Son, and produced since 1950. The last of a series of chairs Wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging. A light chair, easy to move around the dining table and about the room.</p>
                  <p>The characteristic “Y” provides comfortable back support and stability to the steam-bent top, also inspiring the chair’s names An excellent example of Wegner’s constant striving towards organic simplicity to create sculptural beauty, comfort and outstanding stability.</p>
                  <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging. A light chair, easy to move around the dining table and about the room.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="desc-tab-3">
                <div className="single-product-tab-content">
                  <h3 className="title mb-30">Additional information</h3>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th>size</th>
                        <td>
                          <ul>
                            <li><Link to="shop4">3XL</Link></li>
                            <li><Link to="shop4">L</Link></li>
                            <li><Link to="shop4">M</Link></li>
                            <li><Link to="shop4">S</Link></li>
                            <li><Link to="shop4">XL</Link></li>
                            <li><Link to="shop4">XXL</Link></li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>color</th>
                        <td>
                          <ul>
                            <li><Link to="shop4">Black</Link></li>
                            <li><Link to="shop4">Blue</Link></li>
                            <li><Link to="shop4">Gold</Link></li>
                            <li><Link to="shop4">Gray</Link></li>
                            <li><Link to="shop4">White</Link></li>
                            <li><Link to="shop4">Yellow</Link></li>
                            <li><Link to="shop4">Red</Link></li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="desc-tab-2" role="tabpanel">
                <div className="single-product-desc">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="review-wrapper">
                        <div className="single-review">
                          <div className="review-img">
                            <img src="assets/images/testimonial/1.png" alt=" " />
                          </div>
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>White Lewis</h4>
                                </div>
                                <StarRating count={5} symbol="★" color2={'#ffd700'} />

                              </div>
                              <div className="review-left">
                                <Link to="#">Reply</Link>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>
                                Vestibulum ante ipsum primis aucibus orci
                                luctustrices posuere cubilia Curae Suspendisse
                                viverra ed viverra. Mauris ullarper euismod
                                vehicula. Phasellus quam nisi, congue id nulla.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="single-review child-review">
                          <div className="review-img">
                            <img src="assets/images/testimonial/2.png" alt=" " />
                          </div>
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>White Lewis</h4>
                                </div>  <StarRating count={5} symbol="★" color2={'#ffd700'} />

                              </div>
                              <div className="review-left">
                                <Link to="#">Reply</Link>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>
                                Vestibulum ante ipsum primis aucibus orci
                                luctustrices posuere cubilia Curae Sus pen disse
                                viverra ed viverra. Mauris ullarper euismod
                                vehicula.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="ratting-form-wrapper">
                        <h3>Add a Review</h3>
                        <div className="ratting-form">
                          <form action="#">
                            <div className="star-box">
                              <span>Your rating:</span>
                              <StarRating count={5} symbol="★" color2={'#ffd700'} />
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="rating-form-style mb-10">
                                  <input placeholder="Name" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="rating-form-style mb-10">
                                  <input placeholder="Email" type="email" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="rating-form-style form-submit">
                                  <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                                  <button type="submit" className="generic-btn red-hover-btn" style={{fontSize: '14px !important'}}>Submit</button>
                                </div>
                              </div>
                            </div>
                          </form>
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
    </div>
  </section>
  {/* single product end */}
  {/* sugession start */}
  <section className="sugession-product mt-120">
    <div className="container-fluid">
      <div className="generic-title text-center">
        <h2 className="mb-20">You May Also Like</h2>
        {/*The featured products*/}
        <Featured/>
      </div>
      <div className="main-product-carousel owl-carousel red-nav mt-50">
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-1.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-1-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Light green crewneck
                    sweatshir</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$58.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-2.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-2-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Light green crewneck
                    sweatshir</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$58.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-4.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-4-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Tassels Pendant Earrings</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$85.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box mb-40">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-5.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-5-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Shoes</span></Link>
                      <Link to="shop3" className="product-category"><span>Sneaker</span></Link>
                      <Link to="shop3" className="product-category"><span>Women</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Leather Courriere duffle
                    bag</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$3.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box mb-40">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-6.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-6-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                  <span className="sale bg-red text-white">sale!</span>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Shoes</span></Link>
                      <Link to="shop3" className="product-category"><span>Sneaker</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Wood design bedroom clook</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$45-$10.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box mb-40">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-7.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-7-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                  <span className="sale bg-red text-white">sale!</span>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Capitalize on low hanging
                    fruit to</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$250.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box mb-40">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-8.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-8-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Light green crewneck
                    sweatshir</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$58.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-single-item">
          <div className="col-12">
            <div className="product-box mb-40">
              <div className="product-box-wrapper">
                <div className="product-img">
                  <img src="../assets/img/product/farniture-9.jpg" className="w-100" alt=" " />
                  <Link to="/single" className="d-block">
                    <div className="second-img">
                      <img src="../assets/img/product/farniture-9-hover.jpg" alt=" " className="w-100" />
                    </div>
                  </Link>
                  <Link to="/" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                </div>
                <div className="product-desc pb-20">
                  <div className="product-desc-top">
                    <div className="categories">
                      <Link to="shop3" className="product-category"><span>Woman</span></Link>
                    </div>
                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                  </div>
                  <Link to="/single" className="product-title">Tassels Pendant Earrings</Link>
                  <div className="price-switcher">
                    <span className="price switcher-item">$85.00</span>
                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to
                      cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* sugession end */}
  {/* related product start */}
  <section className="related-product mt-120">
    <div className="container-fluid">
      <div className="generic-title text-center">
        <h2 className="mb-20">Related Product</h2>
      </div>
      <Featured/>
    </div>
  </section>
  {/* related product end */}

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
                    <img src="../assets/img/product/10.jpg" className="w-100" alt=" " />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-2">
                  <div className="product-popup-img">
                    <img src="../assets/img/product/11.jpg" className="w-100" alt=" " />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-3">
                  <div className="product-popup-img">
                    <img src="../assets/img/product/12.jpg" className="w-100" alt=" " />
                  </div>
                </div>
              </div>
              <ul className="nav nav-pills justify-content-center mt-10">
                <li className="nav-item">
                  <Link className="active" data-toggle="pill" to="#product-popup-1">
                    <img src="../assets/img/product/10.jpg" className="w-100" alt=" " />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  data-toggle="pill" to="#product-popup-2">
                    <img src="../assets/img/product/11.jpg" className="w-100" alt=" " />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  data-toggle="pill" to="#product-popup-3">
                    <img src="../assets/img/product/12.jpg" className="w-100" alt=" " />
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
                <Link to="/single" className="all-feature">See all feature</Link>
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
                    digital...ditional clickthroughs from DevOps. Nasinglechnology immersion along the
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
export default SingleProduct
