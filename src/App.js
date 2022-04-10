import './App.css';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Products from "./pages/Products";
import Shop from "./pages/Shop";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import {Route, Routes, useParams} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import RelatedProduct from "./little/RelatedProduct";
import ScrollUp from "./little/ScrollUp";
import BlogIndex from "./blog/BlogIndex";
import BlogAbout from "./blog/BlogAbout";
import Author from "./blog/Author";
import BlogGrid from "./blog/BlogGrid";
import BlogList from "./blog/BlogList";
import BlogCategory from "./blog/BlogCategory";
import AllBlogPosts from "./blog/AllBlogPosts";
import PostDetail from "./blog/PostDetail";
import Contact from "./blog/Contact";
import AllProCrumb from "./pages/AllProCrumb";
import Singles from "./items/Singles";
import Page404 from "./pages/Page404";
import ToTop from "./Top";
import {useContext} from "react";
import {Context} from "./context/Context";
function App()
{
    let id = useParams()
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div className="App">
        <ToTop>
        {/* preloader*/}
        {/*<div id="loader-wrapper">*/}
        {/*    <div id="loader" />*/}
        {/*</div>*/}
        <Navbar />

        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route exact path="/home"   element={<Home/>}/>
        </Routes>
        {user?
            <Routes>
                <Route exact path="/:genre"   element={<Products/>}/>
                {/*<Route exact path="/:genre/:type"   element={<Home/>}/>*/}


            <Route path="*" element={<Page404/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/shop"    element={<Shop/>}/>
                <Route path="/single/:id" element={<SingleProduct/>}/>
                <Route path="/:genre/single/:id" element={<SingleProduct/>}/>
                <Route path="/:genre/:type/single/:id" element={<SingleProduct/>}/>
            <Route path="/allproducts" element={<AllProCrumb/>}/>
                <Route path="/:genre/:type" element={<Shop/>}/>


            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

            {/*    The blog post */}
            <Route path="/blog" exact element={<BlogIndex/>}/>
            <Route path="/about" element={<BlogAbout/>}/>
            <Route path="/author" element={<Author/>}/>
            <Route path="/blogrid" element={<BlogGrid/>}/>
            <Route path="/bloglist" element={<BlogList/>}/>
            <Route path="/blogcategory" element={<BlogCategory/>}/>
            <Route path="/allblogposts" element={<AllBlogPosts/>}/>
            <Route path="/post" element={<PostDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>:
        <Routes>
            <Route exact  path="/login" element={<Login/>} />
            <Route exact  path="/register" element={<Register/>} />
        </Routes>
        }
        <ScrollUp/>
        <Footer/>
        </ToTop>
        </div>
    );
}

export default App;
