import Crumb from "../little/Crumb";
import Featured from "../components/Featured";
import {Link} from "react-router-dom";
import StarRating from "react-star-rate";

import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Singles from "../items/SubCates/Singles";

const SingleProduct = () =>
{

  const location = useLocation();
  const [one, setArticle] = useState();
  const [variant, setVariant] = useState()
  const [images, setImages] = useState()

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
      // console.log(res.data)
    }
    const getImages = async ()=>
    {
      await axios.get(`/images/`+id).then((res)=>{setImages(res.data);})
    }
    getImages(id)
    getOne(id).then(()=>{})
    getVariant(id).then(()=>{})

  },[id])
    return(
   <div>

  {/* single product start */}
  <section className="single-product mb-90">
    <div className="container-fluid">
      {/*<Crumb/>*/}

      <div className="shop-wrapper">
        <div className="single-product-top">
          <div className="row">
            <Singles images={images} variant={variant} one={one}/>
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
                  <p>{one?.description}</p>
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
                            {variant?.map((item, index)=>
                                <div key={index} className="d-inline-block m-2">
                                  <label   htmlFor="l">{item?.size?.size_name}</label>
                                  <input type="radio" className="d-none" id="l" />
                                </div>
                            )}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>color</th>
                        <td>
                          <ul>
                            {variant?.map((item, index)=>(
                                <div key={index} className="color-input">
                                  <label htmlFor="yellow" style={{backgroundColor: item?.color?.color_name}} />
                                  <input type="radio" className="d-none" id="yellow" />
                                  <span>{item?.color?.color_name}</span>
                                </div>
                            ))}
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
                            <img src="../assets/images/testimonial/1.png" alt=" " />
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
                            <img src="../assets/images/testimonial/2.png" alt=" " />
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
    <h2 className="mb-20 text-center">You May Also Like</h2>
    {/*The featured products*/}
    <Featured/>
  </section>
  {/* sugession end */}
  {/* related product start */}
  <section className="related-product mt-120">
      <h2 className="mb-20 text-center">Related Product</h2>
      <Featured/>
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
