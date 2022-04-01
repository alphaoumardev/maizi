import {Link} from "react-router-dom";
import StarRating from "react-star-rate";

const AllProductList = ({article})=>
{
    return(
        <div className="product-wrapper mt-55">
            <div className="product-box mb-40">
                <div className="product-box-wrapper">
                    <div className="list-product mb-50">
                        <div className="list-product-wrapper">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="list-product-img">
                                        <div className="product-img">
                                            <img src={article?.image} className="article-img" alt="" />
                                            <Link to={`single/${article.id}`} className="d-block">
                                                <div className="second-img">
                                                    <img src={article?.image_hover} alt="" className="article-img" />
                                                </div>
                                            </Link>
                                            <Link to="" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                                            <span className="sale bg-red text-white">{article.onsale}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8">
                                    <div className="list-product-desc">
                                        <h3><Link to="single" className="title mb-15">{article.name}</Link></h3>
                                        <StarRating count={5} symbol="★" color2={'#ffd700'} />
                                        <div className="price"><span>$90.00</span></div>
                                        <div className="desc">
                                            <p>{article.description}</p>
                                            <ul>
                                                <li>– Light green crewneck sweatshirt.</li>
                                                <li>– Hand pockets.</li>
                                                <li>– Relaxed fit.</li>
                                            </ul>
                                            <Link to="cart" className="list-add-cart-btn mt-40">+Add To Cart</Link>
                                            <Link to="wishlist" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                            <Link to="" data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. list product */}
                </div>
            </div>

            {/* /. product box */}
        </div>

    )
}
export default AllProductList
