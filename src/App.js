import './App.css';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Products from "./pages/Products";
import Shop from "./pages/Shop";
import AllProducts from "./components/AllProducts";
import BigProducts from "./components/BigProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductsCategory from "./pages/ProductsCategory";
import {Route, Routes, useParams} from 'react-router-dom';
import Login from "./pages/Login";
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
function App()
{
    let id = useParams()
    const user = true
    return (
        <div className="App">
         {/*preloader*/}
        {/*<div id="loader-wrapper">*/}
        {/*    <div id="loader" />*/}
        {/*</div>*/}
        {user &&<Navbar />}

        {user?
        <Routes>
            <Route exact path="/"   element={<Home/>}/>
                <Route exact path="/:genre"   element={<Home/>}/>
                {/*<Route exact path="/:genre/:type"   element={<Home/>}/>*/}


            <Route path="*" element={<Page404/>} />
            <Route path="/category"   element={<ProductsCategory/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/shop"    element={<Shop/>}/>
            <Route path="/big" element={<BigProducts/>}/>
                <Route path="/single/:id" element={<SingleProduct/>}/>
                <Route path="/:genre/single/:id" element={<SingleProduct/>}/>
                <Route path="/:genre/:type/single/:id" element={<SingleProduct/>}/>
            <Route path="/allproducts" element={<AllProCrumb/>}/>
                <Route path="/:genre/:type" element={<AllProCrumb/>}/>


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
            <Route exact  path="/" element={<Login/>} />
        </Routes>
        }
        <ScrollUp/>
        {user &&<Footer/>}
        </div>
    );
}

export default App;
