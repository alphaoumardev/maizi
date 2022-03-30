// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import React, { Component } from "react";
// import Slider from "react-slick";
// import {Link, useLocation} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import Images from "./Images";
// import ThumbImg from "./ThumbImg";
// import NavIds from "../SubCates/NavIds";
//
// // export default class Details extends Component {
// //     render() {
// const  Details = () =>
// {
//     const location = useLocation();
//     const id = location.pathname.split("/")[2];
//     const [images, setImages] = useState([])
//     const [mainImg, setMainImg] = useState(false)
//     let [n, setN] = useState(0)
//     let [m, setM] = useState(1)
//     useEffect(function()
//     {
//         const getImages = async ()=>
//         {
//             await axios.get(`/images/`+id).then((res)=>{setImages(res.data); console.log(res.data)})
//         }
//         getImages(id)
//     },[id])
//     const change1 = () =>{setN(n+1); setM(m+1); setMainImg(mainImg);console.log(n, m)}
//
//     const settings = {
//         customPaging: function()
//         {
//             return (
//                 <div className="d-flex justify-content-center align-items-center text-center">
//                     <div className="nav nav-pills has-border-img" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                         {/*<img alt="" className="w-200" src="https://res.cloudinary.com/diallo/image/upload/v1647154149/2_ukaapq.jpg"/>*/}
//                         {
//                             images?.map((item, index) => (<img onClick={change1} key={index.id} alt="" src={item?.image_url}  />)).at(n)
//                         }
//                     </div>
//                 </div>
//             );
//         },
//         dots: true,
//         dotsClass: "slick-dots slick-thumb",
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     }
//
//     return (
//         <div>
//             <Slider {...settings}>
//                 {images?.map((item, index)=>(<img alt="" key={index} src={item?.image_url}/>))}
//             </Slider>
//
//             <div className="col-lg-5 float-left ">
//                 {/*<div className="shop-img">*/}
//                 {/*   <div className="row">*/}
//                 {/*<div className="col-8">*/}
//                 {/*   <Details/>*/}
//                 <NavIds one={one}/>
//                 {/*</div>*/}
//                 {/*</div>*/}
//                 {/*</div>*/}
//             </div>
//             <div className="col-3 ">
//                 <div className="single-product-sidebar">
//                     <div className="product-content">
//
//                         <div className="single-product-title">
//                             <h2>{one?.name}</h2>
//                         </div>
//                         <div className="single-product-price">$<span>{one?.price}</span></div>
//                         <div className="single-product-component">
//                             <h6>Color</h6>
//                             <form action="#" style={{overflow: 'hidden'}} className="mt-15">
//                                 {variant?.map((no, index)=>(
//                                     <Colors key={index} variant={no}/>
//                                 ))}
//                             </form>
//                         </div>
//                         <div className="single-product-component mt-15">
//                             <div className="size">
//                                 <h6>Size</h6>
//                                 <form action="#">
//                                     {variant?.map((no, index)=>(
//                                         <Sizes key={index} variant={no}/>
//                                     ))}
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="quick-quantity mt-60">
//                             <form action="#" method="POST">
//                                 <button type="submit" className="list-add-cart-btn red-hover-btn border-0" style={{paddingLeft: 80, paddingRight: 80, transition: 'all .5s'}}>Add to cart
//                                 </button>
//                             </form>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xl-4 ">
//                 <div className="single-product-desc mb-12 bold-submenu">
//                     <h4><strong> Single Description</strong></h4>
//                     <p>{one?.description}</p>
//                     <div className="product-list single-product-list">
//                         <ul>
//                             <li>– Light green crewneck sweatshirt.</li>
//                             <li>– Hand pockets.</li>
//                         </ul>
//
//                         <div className="single-product-action mt-35">
//                             <ul>
//                                 <li><Link to="wishlist"><i className="bi bi-heart" /> add to wishlist</Link></li>
//                                 <li><Link to="single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>
//                             </ul>
//                         </div>
//                         <div className="sku"><span>Sku: </span> <strong>{one?.sku}</strong></div>
//                         <div className="single-product-category">
//                             <ul>
//                                 <li className="mb-0"><Link to="/" className="title">Categories: </Link></li>
//                                 <li className="mb-0"><Link to="single">Chair &amp; Table</Link></li>
//                                 <li className="mb-0"><Link to="single">Chairs</Link></li>
//                                 <li className="mb-0"><Link to="single">Handbeg</Link></li>
//                             </ul>
//                         </div>
//                         <div className="share-product mt-20">
//                             <ul>
//                                 <li><Link to="/" className="title">Share this product</Link></li>
//                                 <li><Link to="/" data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook" /></Link></li>
//                                 <li><Link to="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
//                                 <li><Link to="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest" /></Link></li>
//                                 <li><Link to="/" data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Details
