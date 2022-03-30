import {useEffect, useState} from "react";
import './Navs.css'
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import StarRating from "react-star-rate";
const Singles = ({images, one, variant})=>
{
    const [mainImg, setMainImg] = useState(true)
    let [n, setN] = useState(0)
    const change1 = () =>{setN(n+1); setMainImg(mainImg);console.log(n)}

    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.cover-img');
    window.addEventListener('DOMContentLoaded', () =>
    {
        allHoverImages[0].parentElement.classList.add('actives');
    });
    allHoverImages.forEach((image) =>
    {
        image.addEventListener('mouseover', () =>
        {
            imgContainer.querySelector('img').src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('actives');
        });
    });
    function resetActiveImg()
    {
        allHoverImages.forEach((img) =>
        {
            img.parentElement.classList.remove('actives');
        });
    }
    return(
    <div>
        <div className="">
            <div className="">
                <div className="pro">
                    <div className="pro-left">
                        <div className="cover-img">
                            {mainImg ? <img src={one?.image} alt="watch"/>
                                : images?.map((item, index) => <img key={index} src={item?.image_url} alt=""/>).at(n)
                            }
                        </div>
                        <div className="hover-container">
                            <div>
                                <img className="hover" src={one?.image} alt="watch"/>
                                {images?.map((item, index) => <img className="hover" onClick={change1} key={index} src={item?.image_url} alt=""/>)}
                            </div>
                        </div>
                    </div>
                    <div className="pro-right">
                        <h2>{one?.name}
                            <div className="btn-groups">
                                <button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>
                                <button type="button" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>
                            </div>
                        </h2>
                        {/*<span className="product-name"></span>*/}
                        <div className="single-product-price">${one?.price}</div>
                        <StarRating count={5} symbol="★" color={'#ffd700'} size="small"/>
                        <p className="product-description">{one?.description}</p>
                        <div className="single-product-action mt-35">
                            <ul>
                                <li><Link to="wishlist"><i className="bi bi-heart" /> add to wishlist</Link></li>
                                <li><Link to="single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>
                            </ul>
                        </div>
                        <span>Sku: <strong>{one?.sku.slice(1,12)}</strong></span>
                        <div className="single-product-category">
                            <ul>
                                <li className="mb-0"><Link to="/" className="title">Categories: </Link></li>
                                <li className="mb-0"><Link to="single">Chair &amp; Table</Link></li>
                                <li className="mb-0"><Link to="single">Chairs</Link></li>
                                <li className="mb-0"><Link to="single">Handbeg</Link></li>
                            </ul>
                        </div>
                        <div className="share-product mt-20">
                            <ul>
                                <li><Link to="/" className="title">Share this product</Link></li>
                                <li><Link to="/" data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook" /></Link></li>
                                <li><Link to="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
                                <li><Link to="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest" /></Link></li>
                                <li><Link to="/" data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
                            </ul>
                        </div>
                        <form action="#" method="POST">
                            <div className="single-product-component mt-15">
                                    <h6>Size</h6>
                                    {variant?.map((item, index)=>
                                    <div key={index} className="size d-inline">
                                        <label  htmlFor="l">{item?.size?.size_name}</label>
                                        <input type="radio" className="d-none" id="l" />
                                    </div>
                                    )}
                            </div>
                            <div className="single-product-component">
                                <h6>Color</h6>
                                    {variant?.map((item, index)=>(
                                        <div key={index} className="color-input">
                                            <label htmlFor="yellow" style={{backgroundColor: item?.color?.color_name}} />
                                            <input type="radio" className="d-none" id="yellow" />
                                            <span>{item?.color?.color_name}</span>
                                        </div>
                                    ))}
                            </div>
                            <div className="btn-groups">
                                {/*<button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>*/}
                                {/*<button type="button" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Singles
