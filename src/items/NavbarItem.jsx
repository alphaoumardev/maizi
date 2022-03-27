import {Link, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {map} from "react-bootstrap/ElementChildren";
import SubCategories from "./SubCates/SubCategories";

const NavbarItem = ({urls})=>
{
    const location = useLocation();
    // const id = location.pathname.split("/")[2];
    const id ='men'
    const [subcates, setSubcates] = useState([])
    const [genre, setGenre] = useState('')
    const getGenre = (e)=>
    {
        // e.preventDefault()
        const name = e.target.value
        setGenre(name)
        console.log(name)
    }

    useEffect(()=>
    {
        const getArticles = async ()=>
        {
            const response = await fetch('/catename/women')
            const data = await response.json()
            setSubcates(data)
            console.log(data)
        }
        // getGenre().then((err)=>{console.log(err)})

        getArticles().then(()=>{})
        // console.log(genre)

    },[])
    // useEffect(()=>
    // {
    //     const getSubcategories = async ()=>
    //     {
    //         // const res = await axios.get(`${/catename/id}`)
    //         const res = await axios.get('/catename/Men')
    //
    //         setSubcates(res.data)
    //         console.log(res.data)
    //     }
    //     getSubcategories().then(()=>{})
    //
    // },[])
    return(
        <ul>
            {/*<li className="position-static">*/}
            {/*    <a href=''>*/}
            {/*        <span onClick={(e)=>setGenre(e.target.current)}>*/}
            {/*            {urls.genre_name} <i className="bi bi-chevron-down" />*/}
            {/*        </span>*/}
            {/*    </a>*/}
            {/*    <div className="mega-menu">*/}
            {/*        <div className="col-lg-2  position-static">*/}
            {/*            {subcates.map((no, index)=>*/}
            {/*                <SubCategories key={index} subcates={no}/>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</li>*/}
        </ul>
    )
}
export default NavbarItem
