// import {Link, useLocation} from "react-router-dom";
// import {useEffect, useRef, useState} from "react";
// import axios from "axios";
// import {map} from "react-bootstrap/ElementChildren";
// import Navbar from "../../components/Navbar";
// import SubCategories from "./SubCategories";
//
// const NavIds = ()=>
// {
//     const location = useLocation();
//     const id = location.pathname.split("/")[1];
//     const [genre, setGenre] = useState([])
//     useEffect(()=>
//     {
//         const getSubcatery = async (id)=>
//         {
//             const res = await axios.get(`/bygenre/${id}`)
//             setGenre(res.data)
//             // console.log(res.data)
//         }
//         getSubcatery(id).then(()=>{})
//     },[id])
//     return(
//         <div>
//             {genre.map((no, index)=>
//                 <SubCategories key={index} genre={no}/>
//             )}
//         </div>
//     )
// }
// export default NavIds
