import './App.css';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Products from "./pages/Products";
import Shop from "./components/Shop";
import AllProducts from "./components/AllProducts";
import BigProducts from "./components/BigProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductsCategory from "./pages/ProductsCategory";
import { Route, Routes } from 'react-router-dom';
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
import NavIds from "./items/SubCates/NavIds";
function App()
{
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
                    <Route exact path="/:id"   element={<Home/>}/>

                <Route path="/category"   element={<ProductsCategory/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/shop"    element={<Shop/>}/>
                <Route path="/big" element={<BigProducts/>}/>
                <Route path="/single/:id" element={<SingleProduct/>}/>
                    <Route path="/:id/single/:id" element={<SingleProduct/>}/>

                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/allproducts" element={<AllProCrumb/>}/>

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
            {/*{user &&<Footer/>}*/}
        </div>
    );
}

export default App;
