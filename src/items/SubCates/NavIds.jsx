// import './Nav.css'
// import {useEffect, useState} from "react";
// import {changeSlide} from "react-slick/lib/utils/innerSliderUtils";
//
// const NavIds = ({one}) =>
// {
//     const [mainImg, setMainImg] = useState(false)
//     let [n, setN] = useState(0)
//     let [m, setM] = useState(1)
//     const change0 = () =>{setMainImg(mainImg);console.log(n, m)}
//     const change1 = () =>{setN(n+1); setM(m+1); setMainImg(mainImg);console.log(n, m)}
//     const change2 = () =>{setN(n+1); setM(m+1); setMainImg(mainImg);console.log(n, m)}
//     const change3 = () =>{setN(n+1); setM(m+1); setMainImg(mainImg);console.log(n, m)}
//     const change4 = () =>{setN(n+1); setM(m+1); setMainImg(mainImg);console.log(n, m)}
//
//     const futuredImages = [
//         { "id": 1, "url": "https://res.cloudinary.com/diallo/image/upload/v1647154154/8_ojzern.jpg" },
//         { "id": 2, "url": "https://res.cloudinary.com/diallo/image/upload/v1647154154/7_kgtfqa.jpg" },
//         { "id": 3, "url": "https://res.cloudinary.com/diallo/image/upload/v1647154150/16-hover_fsd93d.jpg" },
//         { "id": 4, "url": "https://res.cloudinary.com/diallo/image/upload/v1647154148/17-hover_eee4dp.jpg" },
//         { "id": 5, "url": "https://res.cloudinary.com/diallo/image/upload/v1647154146/13_ke4oai.jpg" }
//     ]
//     // for(let ne =0; ne<=futuredImages.length; ne++)
//     // {
//     //     for(let me = 1; me<=futuredImages.length; me++)
//     //     {
//     //         console.log("")
//     //     }
//     // }
//     return(
//         <div className="main-wrapper">
//             <div className="container">
//                 <div className="product-div">
//                     <div className="product-div-left">
//                         <div className="img-container">
//                             {mainImg ? <img src={one?.image} alt="watch"/>
//                                 : futuredImages.map((item, index) => <img key={index} src={item?.url} alt=""/>).at(n)
//                             }
//                         </div>
//                         <div >
//                             {futuredImages.map((item, index) => <img className="hover" onClick={change1} key={index} src={item?.url} alt=""/>)}
//
//                             {/*<div><img onClick={change0} src="https://res.cloudinary.com/diallo/image/upload/v1647154154/8_ojzern.jpg" alt="" /></div>*/}
//                             {/*<div><img onClick={change1} src="https://res.cloudinary.com/diallo/image/upload/v1647154154/7_kgtfqa.jpg" alt="" /></div>*/}
//                             {/*<div><img onClick={change2} src="https://res.cloudinary.com/diallo/image/upload/v1647154150/16-hover_fsd93d.jpg" alt="" /></div>*/}
//                             {/*<div><img onClick={change3} src="https://res.cloudinary.com/diallo/image/upload/v1647154148/17-hover_eee4dp.jpg" alt="" /></div>*/}
//                             {/*<div><img onClick={change4} src="https://res.cloudinary.com/diallo/image/upload/v1647154146/13_ke4oai.jpg" alt="" /></div>*/}
//                         </div>
//                     </div>
//                     {/*<div className="product-div-right">*/}
//                     {/*    <span className="product-name">(New) Analog Watch - For Men</span>*/}
//                     {/*    <span className="product-price">$ 50.25</span>*/}
//                     {/*    <div className="product-rating">*/}
//                     {/*        <span><i className="fas fa-star" /></span>*/}
//                     {/*        <span><i className="fas fa-star" /></span>*/}
//                     {/*        <span><i className="fas fa-star" /></span>*/}
//                     {/*        <span><i className="fas fa-star" /></span>*/}
//                     {/*        <span><i className="fas fa-star-half-alt" /></span>*/}
//                     {/*        <span>(350 ratings)</span>*/}
//                     {/*    </div>*/}
//                     {/*    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>*/}
//                     {/*    <div className="btn-groups">*/}
//                     {/*        <button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>*/}
//                     {/*        <button type="button" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>*/}
//                     {/*    </div>*/}
//                     {/*</div>*/}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export  default NavIds
//
//
//
//
//
// // import {Link, useLocation} from "react-router-dom";
// // import {useEffect, useRef, useState} from "react";
// // import axios from "axios";
// // import {map} from "react-bootstrap/ElementChildren";
// // import Navbar from "../../components/Navbar";
// // import SubCategories from "./SubCategories";
// //
// // const NavIds = ()=>
// // {
// //     const location = useLocation();
// //     const id = location.pathname.split("/")[1];
// //     const [genre, setGenre] = useState([])
// //     useEffect(()=>
// //     {
// //         const getSubcatery = async (id)=>
// //         {
// //             const res = await axios.get(`/bygenre/${id}`)
// //             setGenre(res.data)
// //             // console.log(res.data)
// //         }
// //         getSubcatery(id).then(()=>{})
// //     },[id])
// //     return(
// //         <div>
// //             {genre.map((no, index)=>
// //                 <SubCategories key={index} genre={no}/>
// //             )}
// //         </div>
// //     )
// // }
// // export default NavIds
//
//
// // import FuturedImg from "../variants/FuturedImg";
// // import ThumbImg from "../variants/ThumbImg";
// //
// // <div className="row">
// //     <div className="col-8">
// //         <div className="tab-content" id="v-pills-tabContent">
// //             <div className="tab-pane fade show active">
// //                 <div className="product-img">
// //                     <a href={one?.image} className="popup-image"><img src={one?.image} className="w-100" alt=" " /></a>
// //                 </div>
// //             </div>
// //             <div className="tab-pane fade active"  id="tab-002">
// //                 <div className="product-img">
// //                     <a href={one?.image} className="popup-image"><img src={one?.image} className="w-100" alt=" " /></a>
// //                 </div>
// //             </div>
// //             <div className="tab-pane fade show " id={`tab-${images?.id}`}>
// //                 {/*{images?.map((no, index)=>(<Images images={no} key={index}/>))}*/}
// //                 {/*<a key={images?.id} href={images?.image_url} className="popup-image"><img src={images?.image_url} className="w-100" alt=" " /></a>*/}
// //                 <FuturedImg/>
// //             </div>
// //
// //         </div>
// //     </div>
// //     <div className="col-2 ">
// //         <div className="nav nav-pills has-border-img" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// //
// //             <a data-toggle="pill" href="#tab-002">
// //                 <img src={one?.image} className=" w-100 mt-5-px" alt=" " />
// //             </a>
// //             <a className="" data-toggle="pill" href={`#tab-${images?.id}`}>
// //                 {images?.map((no, index)=>( <ThumbImg images={no} key={index}/> ))}
// //             </a>
// //         </div>
// //     </div>
// // </div>
