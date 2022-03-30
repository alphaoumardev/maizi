// import {Link, useLocation} from "react-router-dom";
// import {useEffect, useRef, useState} from "react";
// import axios from "axios";
// import {map} from "react-bootstrap/ElementChildren";
// import Navbar from "../../components/Navbar";
// import Images from "./Images";
//
// const FuturedImg = ()=>
// {
//     const location = useLocation();
//     const id = location.pathname.split("/")[2];
//     const [images, setImages] = useState([])
//
//     useEffect(()=>
//     {
//         const getImages = async ()=>
//         {
//             await axios.get(`/images/`+id).then((res)=>{setImages(res.data);})
//         }
//         getImages(id)
//     },[id])
//     return(
//         // <div className="tab-pane fade show " id={`tab-${images?.id}`}>
//         <>
//             {images?.map((no, index)=>(<Images images={no} key={index}/>))}
//             {/*<a key={images?.id} href={images?.image_url} className="popup-image"><img src={images?.image_url} className="w-100" alt=" " /></a>*/}
//         {/*</div>*/}
//         </>
//     )
// }
// export default FuturedImg
