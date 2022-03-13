import {Link} from "react-router-dom";
import ReactStars from "react-stars";
const Category = ()=>
{
    return(
        <div>
            {/* category section start */}
            <section className="category mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 left-category">
                            <div className="category-box">
                                <div className="category-wrapper">
                                    <div className="category-img">
                                        <img src="../assets/img/banner/categorie_1.jpg" className="w-100" alt="" />
                                    </div>
                                    <div className="category-content">
                                        <Link to="shop" className="title">Clothing</Link>
                                        <p className="category-item">(<span>8</span> items)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="row">
                                        <div className="col-12 mb-27">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="../assets/img/banner/categorie_2.jpg" className="w-100" alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="shop" className="title">Handbag</Link>
                                                        <p className="category-item">(<span>20</span> items)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="../assets/img/banner/categorie_3.jpg" className="w-100" alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="shop" className="title">Sneaker</Link>
                                                        <p className="category-item">(<span>11</span> items)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 category-right">
                                    <div className="category-box">
                                        <div className="category-wrapper">
                                            <div className="category-img">
                                                <img src="../assets/img/banner/categorie_4.jpg" className="w-100" alt="" />
                                            </div>
                                            <div className="category-content">
                                                <Link to="shop" className="title">Women</Link>
                                                <p className="category-item">(<span>17</span> items)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* category section end */}
        </div>
    )
}
export default Category
