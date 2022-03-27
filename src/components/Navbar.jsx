import {useState, useEffect} from "react";
import {TextField} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import AllProductItem from "../items/AllProductItem";
import NavbarItem from "../items/NavbarItem";
import SubCategories from "../items/SubCates/SubCategories";

const Navbar =()=>
{
    const [input, setInput] = useState(null)
    const [urls, setUrls] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [isOp, setIsOp] = useState(false);
    const [searchButton, setSearchButton] = useState(false);
    const toggleSearchButton = () =>{setSearchButton(!searchButton)}

    const close = () =>
    {
        setIsOpen(false)
        setIsOp(false)
    }
    const closing = ()=>{setSearchButton(false)}
    if(!isOpen || !isOp || !searchButton){setTimeout(close, 5000)}
    if(!searchButton){setInterval(closing, 20000)}

    const getUrls = async ()=>
    {
        await axios.get('/catename/')
            .then((res)=>
            {
                // console.log(res.data)
                setUrls(res.data)
            }, error =>{console.log(error)})
    }
    useEffect(() =>
    {
        getUrls()
    }, []);


    const location = useLocation();
    const id = location.pathname.split("/")[1];
    const [subcates, setSubcates] = useState([])
    // const [genre, setGenre] = useState('')
    // const getGenre = (e)=>
    // {
    //     // e.preventDefault()
    //     const id = e.target.value
    //     setGenre(id)
    //     // console.log(id)
    // }
    // useEffect(()=>
    // {
    //     const getSubcateries = async ()=>
    //     {
    //         const res = await axios.get(`/bygenre/2`)
    //         setSubcates(res.data)
    //         console.log(res.data)
    //     }
    //     getSubcateries(id).then(()=>{})
    // },[])

    useEffect(()=>
    {
        const getSubcatery = async (id)=>
        {
            const res = await axios.get(`/catename/${id}`)
            setSubcates(res.data)
            // console.log(res.data)
        }
        getSubcatery(id).then(()=>{})
        // console.log(genre)
    },[id])

    const [genre, setGenre] = useState([])
    // useEffect(()=>
    // {
    //     const getsubs = async (id)=>
    //     {
    //         const res = await axios.get(`/bygenre/${id}`)
    //         setGenre(res.data)
    //         console.log(res.data)
    //     }
    //     getsubs(id).then(()=>{})
    // },[id])
    return(
        <div >
            {/* header section start */}
            <header className="header pt-10 pb-10  is-sticky header-static " >

                <div className="container-fluid  " >
                    <div className="header-nav position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-3">
                                <div className="logo" >
                                    <Link to="/"><img src="../assets/../assets/img/logo/logo1.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 hidden-md position-static">
                                <div className="header-nav">
                                    <nav className="d-flex justify-content-around">

                                            {/*{urls.map((no, index)=>*/}
                                            {/*    <NavbarItem key={index} urls={no}/>*/}
                                            {/*)}*/}

                                        <ul>
                                            <li>
                                                <Link to={`/men`}><span >Men<i className="bi bi-chevron-down" /></span></Link>
                                                <div className="submenu">
                                                    <div >
                                                        {subcates.map((no, index)=>
                                                            <SubCategories key={index} subcates={no}/>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to={`/women`}><span>Women<i className="bi bi-chevron-down" /></span></Link>
                                                <div className="submenu">
                                                    <div>
                                                        {subcates.map((no, index)=>
                                                            <SubCategories key={index} subcates={no}/>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to={`/home kits`}><span>Home Kits<i className="bi bi-chevron-down" /></span></Link>
                                                <div className="submenu">
                                                    <div>
                                                        {subcates.map((no, index)=>
                                                            <SubCategories key={index} subcates={no}/>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to={`/gifts`}><span>Gifts<i className="bi bi-chevron-down" /></span></Link>
                                                <div className="submenu">
                                                    <div>
                                                        {subcates.map((no, index)=>
                                                            <SubCategories key={index} subcates={no}/>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li ><Link to={`/kids`}><span>Kids<i className="bi bi-chevron-down" /></span></Link>
                                                <div className="submenu">
                                                    <div>
                                                        {subcates.map((no, index)=>
                                                            <SubCategories key={index} subcates={no}/>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>

                                            <li><Link to={``}><span>Blog<i className="bi bi-chevron-down" /></span> </Link>
                                                <div className="submenu">
                                                    <div>
                                                        <ul>
                                                            <li><Link to="blog">Blogs</Link></li>
                                                            <li><Link to="about">About</Link></li>
                                                            <li><Link to="author">Author</Link></li>
                                                            <li><Link to="blogrid">Sidebar</Link></li>
                                                            <li><Link to="bloglist">Blog list</Link></li>
                                                            <li><Link to="allblogposts">All Blogs</Link></li>
                                                            <li><Link to="post">Post Details</Link></li>
                                                            <li><Link to="blogcategory">Posts Category</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to="contact"><span>Contact</span></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-xl-4  col-lg-4 col-6 col-md-6 col-sm-6 col-9">
                                <div className="header-right">
                                    <ul className="text-right">
                                        <li>
                                            <span>
                                                <i onClick={toggleSearchButton} className="bi bi-search" title="Looking for something?" />
                                                {searchButton && <TextField onChange={(e)=>setInput(e.target.value)}  id="standard-size-small" defaultValue="" placeholder="Search" size="small" variant="standard" style={{paddingLeft:10}}/>}
                                            </span>
                                            <><Link to="login" className="account"><i className="bi bi-person-fill" /> <article className="account-registar d-inline-block"></article></Link></>
                                            <><Link to="/" className="account"><i  className="bi bi-translate"/> </Link></>

                                            {/* search popup */}

                                        </li>
                                        <li><Link to="wishlist" data-toggle="tooltip" data-placement="bottom"  data-original-title="view wishlist"><i className="bi bi-heart"><span>0</span></i></Link></li>
                                        <li><Link to="cart">
                                            <i className="bi bi-cart3"><span>5</span></i>
                                            </Link>
                                            <div className="minicart">
                                                <div className="minicart-body">
                                                    <div className="minicart-content">
                                                        <ul className="text-left">
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/1.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Capitalize on low hanging fruit t</Link>
                                                                    <strong>1 × $250.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/2.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Leather Courriere duffle ba</Link>
                                                                    <strong>1 × $150.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="minicart-img">
                                                                    <Link to="single-product-4" className="p-0"><img src="../assets/img/product/3.jpg" className="w-100" alt="" /></Link>
                                                                </div>
                                                                <div className="minicart-desc">
                                                                    <Link to="single-product-4" className="p-0">Party Supplies Around Cupcake</Link>
                                                                    <strong>1 × $150.00</strong>
                                                                </div>
                                                                <div className="remove">
                                                                    <i className="bi bi-x" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="minicart-checkout">
                                                    <div className="minicart-checkout-heading mt-8 mb-25 overflow-hidden">
                                                        <strong className="float-left">Subtotal:</strong>
                                                        <span className="price float-right">503.00</span>
                                                    </div>
                                                    <div className="minicart-checkout-links">
                                                        <Link to="cart" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">View cart</Link>
                                                        <Link to="checkout" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to={``}><i className="bi bi-text-right" /></Link>
                                            <ul className="submenu bold-content text-right">
                                                <li><Link to="login">My Account</Link></li>
                                                <li><Link to="checkout">Checkout</Link></li>
                                                <li><Link to="shop">Shop</Link></li>
                                                <li><Link to="wishlist">Wishlist</Link></li>
                                                <li><Link to="question">Frequently</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobbile*/}
                    <div className="mobile-menu visible-sm">
                        <div id="mobile-menu">
                            <ul>
                                <li><Link className="pl-3" to="">Home</Link>
                                    <ul className="pl-4">
                                        <li><Link to="index">Products</Link></li>
                                        <li><Link to="index2">Fashion</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="pl-3" to="">Shop</Link>
                                    <ul>
                                        <li><Link to="shop">Shop Layout</Link></li>
                                        <li><Link to="shop4">Masonry – Grid</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="">Blog</Link>
                                    <ul>
                                        <li><Link to="blog">Grid layout</Link></li>
                                        <li><Link to="blog2">Large image</Link></li>

                                    </ul>
                                </li>
                                <li><Link to="">Portfolio</Link>
                                    <ul>
                                        <li><Link to="portfolio">Single project</Link></li>
                                        <li><Link to="portfolio3">Three Columns</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* /. mobile nav */}
                </div>
            </header>
            {/* header section end */}
        </div>
    )
}
export default Navbar
