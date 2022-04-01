import {Link} from "react-router-dom";
import StarRating from "react-star-rate";
import {useEffect, useState} from "react";
import axios from "axios";

const AllProductItem = ({article})=>
{
    const [variant, setVariant] = useState()
    useEffect(()=>
    {
        // const getVariant = async ()=>
        // {
        //     const res = await axios.get(`/variants/`)
        //     setVariant(res.data)
        //     console.log(res.data)
        // }
        // getVariant().then(()=>{})

    },[])
    return(
    <>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product-box mb-40">
                    <div className="product-box-wrapper">
                        <div className="product-img">
                            <img src={article.image} className="article-img" alt="" />
                            <Link to={`single/${article.id}`} className="d-block">
                                <div className="second-img">
                                    <img src={article.image_hover} alt="" className="article-img" />
                                </div>
                            </Link>
                            <Link to="" className="product-img-link quick-view-1" data-bs-toggle="modal" data-bs-target="#product-modal">Quick view</Link>
                            <span className="sale bg-red text-white">{article?.onsale}</span>
                        </div>
                        <div className="product-desc pb-20">
                            <div className="product-desc-top">
                                <div className="categories">
                                    <Link to="shop2" className="product-category"><span>Shoes</span></Link>
                                    <Link to="shop2" className="product-category"><span>Sneaker</span></Link>
                                </div>
                                <ul className="color-list">
                                    {/*{variant?.map((item, index)=>(*/}
                                    {/*    <li key={index} style={{backgroundColor: variant?.color?.color_name}} />*/}
                                    {/*))}*/}
                                    <li style={{backgroundColor: 'white'}} />
                                    <li style={{backgroundColor: '#1E73BE'}} />
                                    <li style={{backgroundColor: '#FFD700'}} />
                                    <li style={{backgroundColor: '#DD3333'}} />
                                </ul>
                                <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                            </div>
                            <Link to="single" className="product-title">{article.name}</Link>
                            <div className="price-switcher">
                                <span className="price switcher-item text-danger">${article.price}</span>
                                <Link to="cart" className="add-cart text-capitalize switcher-item">+add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div className="modal fade" id="product-modal">
                <div className="modal-dialog modal-dialog-centered product-modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        <div className="modal-body">
                            <div className="row mb-n7">
                                <div className="col-md-5 mb-7">
                                    <div className="modal-gallery-slider">
                                        <div className="product-modal-gallery">
                                            <div className="swiper-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide product-modal-gallery-item">
                                                        <img src={article.image} alt="NF" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-modal-gallery-thumbs">
                                            <div className="swiper-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide product-modal-gallery-thumbs-item">
                                                        {/*<Link to="/"> <img src={article.image} alt="NF" /></Link>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-7">
                                    <div className="modal-product-des">
                                        <h3 className="modal-product-title"><Link to="#">{article.name}</Link></h3>
                                        <StarRating count={5} symbol="★"  color2={'#ffd700'} />

                                        <div className="product-price-wrapp-lg">
                                            <span className="product-regular-price-lg">{article.discount_id}</span>
                                            <span className="product-price-on-sale-lg">${article.price}</span>
                                            <span className="badge badge-lg bg-dark">Save 8%</span>
                                        </div>
                                        <div className="product-description-short">
                                            <p>{article.description}</p>
                                        </div>
                                        <div className="product-variants">
                                            <div className="product-variants-item">
                                                <span className="control-label">Size</span>
                                                <select className="form-control form-control-select">
                                                    <option defaultValue={1} title="S" >S</option>
                                                    <option defaultValue={2} title="M">M</option>
                                                    <option defaultValue={3} title="L">L</option>
                                                    <option defaultValue={4} title="XL">XL</option>
                                                </select>
                                            </div>
                                            <div className="product-variants-item">
                                                <span className="control-label">color</span>
                                                <ul>
                                                    <li className="input-container">
                                                        <label>
                                                            <input className="input-color" type="checkbox" />
                                                            <span className="color" />
                                                        </label>
                                                    </li>
                                                    <li className="input-container">
                                                        <label>
                                                            <input className="input-color" type="checkbox" defaultChecked="checked" />
                                                            <span className="color" />
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-add-to-cart">
                                            <span className="control-label">Quantity</span>
                                            <div className="product-count style d-flex my-4">
                                                <div className="count d-flex">
                                                    <input type="number" min={1} max={100} step={1} defaultValue={1} />
                                                    <div className="button-group">
                                                        <button className="count-btn increment">
                                                            <span className="bi bi-chevron-up" />
                                                        </button>
                                                        <button className="count-btn decrement">
                                                            <span className="bi bi-chevron-down" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button data-bs-toggle="modal" data-bs-target="#add-to-cart" className="btn btn-dark">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-add-to-card">
                                                <Link className="product-add-to-card-item" to="#"><i className="bi bi-heart" /> Add to wishlist</Link>
                                                <Link className="product-add-to-card-item" to="#"><i className="bi bi-arrow-repeat" /> My wishlist</Link>
                                            </div>
                                            <div className="product-social-sharing">
                                                <span>Share</span>
                                                <ul>
                                                    <li className="facebook"><Link to="#" target="_blank"><i className="bi bi-facebook" /></Link></li>
                                                    <li className="twitter"><Link to="#" target="_blank"><i className="bi bi-twitter" /></Link></li>
                                                    <li className="pinterest"><Link to="#" target="_blank"><i className="bi bi-pinterest" /></Link></li>
                                                    <li className="google"><Link to="#" target="_blank"><i className="bi bi-google" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
export default AllProductItem
