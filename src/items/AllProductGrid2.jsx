import {Link} from "react-router-dom";

const AllProductGrid2 = ({article})=>
{
    return(
        <div className="col-xl-4 col-md-4 col-6">
            <div className="product-box mb-40">
                <div className="product-box-wrapper">
                    <div className="product-img">
                        <img src={article.image} className="w-100" alt="" />
                        <Link to="single" className="d-block">
                            <div className="second-img">
                                <img src={article.image_hover} alt="" className="w-100" />
                            </div>
                        </Link>
                        <Link to="" className="product-img-link quick-view-1 text-capitalize">Quick view</Link>
                    </div>
                    <div className="product-desc pb-20">
                        <div className="product-desc-top">
                            <div className="categories">
                                <Link to="shop2" className="product-category"><span>Woman</span></Link>
                            </div>
                            <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                        </div>
                        <Link to="single" className="product-title">{article.name}</Link>
                        <div className="price-switcher">
                            <span className="price switcher-item">${article.price}</span>
                            <Link to="cart" className="add-cart  switcher-item">+Add To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AllProductGrid2
