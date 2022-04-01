import {useEffect, useState} from "react";
import Crumb from "../little/Crumb";
import {Link, useParams} from "react-router-dom";
import StarRating from "react-star-rate";
import ProductGrid from "../items/ProductGrid";
import AllProductItem from "../items/AllProductItem";
import AllProductTab2 from "../items/AllProductTab2";
import AllProductGrid2 from "../items/AllProductGrid2";
import AllProductList from "../items/AllProductList";
import axios from "axios";
const AllProducts = ()=>
{
  const [isOpen, setIsOpen] = useState(false);
  const [article, setArticle] = useState([])
  const [variant, setVariant] = useState()

  const togglePopup = () =>{setIsOpen(!isOpen)}
  const close = ()=>{setIsOpen(false)}
  if(!isOpen)
  {
    setTimeout(close, 15000)
  }
  let genre = location.pathname.split('/')[1]
  // let type = location.pathname.split('/')[2]
  // let {genre} = useParams()
  let {type} = useParams()
  useEffect(()=>
  {
    const getArticles = async ()=>
    {
      if(type)
      {
        const response = await fetch(`/catename/${genre}/${type}`)
        const data = await response.json()
        setArticle(data)
      }
      else
      {
        const response = await fetch("/all/")
        const data = await response.json()
        setArticle(data)
      }
    }
    getArticles(genre, type).then(()=>{})

  },[genre, type])

    return(
    <div>

  {/* All products start       */}
  <div className="shop-body mb-90">
    <div className="container-fluid">
      <div className="shop-wrapper">
        <div className="row">
          <div className="col-12">
            {/* /. filter heading */}
            <div className="filter-heading">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="filter-shown-item">
                    <p className="mb-0">Showing <span>1</span>–<span>24</span> of <span className="total_count">56</span> results</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="shop-filter-tab">
                    <ul className="nav nav-pills">
                      <li><span>Views</span></li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-3" data-placement="top" title="4 grid" className="active "><i className="bi bi-grid-3x3-gap" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-2" data-placement="top" title="3 grid"><i className="bi bi-grid" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-1" data-placement="top" title="2 grid"><i className="bi bi-layout-split" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-4" data-placement="top" title="list view"><i className="bi bi-list-stars" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex justify-content-end position-static">
                  <div className="sorting d-inline-block">
                    <select name="sort" id="shop-sort">
                      <option value="default">Default sorting</option>
                      <option value="default">Short by popularity</option>
                      <option value="default">Sort by average rating</option>
                      <option value="default">Sort by latest</option>
                      <option value="default">Sort by price: low to high</option>
                      <option value="default">Sort by price: high to low</option>
                    </select>
                  </div>
                  {/* The filter*/}
                  <div className="filter">
                    <h6 className="d-inline-block filter-widget-toggle" onClick={togglePopup}>Filter <i className="bi bi-chevron-down"/></h6>
                    {isOpen && <div className="filter-popup">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="filter-popup-item">
                            <div className="widget">
                              <h4 className="mb-30">Filter By Color</h4>
                              <ul className="color-list">
                                <li style={{backgroundColor: '#000'}} />
                                <li style={{backgroundColor: '#1E73BE'}} />
                                <li style={{backgroundColor: '#FFD700'}} />
                                <li style={{backgroundColor: '#C9C9C9'}} />
                                <li style={{backgroundColor: '#008000'}} />
                                <li style={{backgroundColor: '#FFFF00'}} />
                                <li style={{backgroundColor: '#FFFFFF'}} />
                                <li style={{backgroundColor: '#DD3333'}} />
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Size</h4>
                            <div className="size-link">
                              <Link to="shop2">3xl</Link>
                              <Link to="shop2">l</Link>
                              <Link to="shop2">m</Link>
                              <Link to="shop2">s</Link>
                              <Link to="shop2">xl</Link>
                              <Link to="shop2">xxl</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Price</h4>
                            <form action="#">
                              <div className="price-filter">

                                <div className="filter-form-submit mt-35">
                                  <button type="submit">Filter</button>
                                  <div className="filter-price d-inline-block pl-20">
                                    Price: <input type="button" id="amount-2" defaultValue="$75 - $300" /></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 position-static">
                          <div className="widget">
                            <h4 className="mb-30">Popular Tags</h4>
                            <div className="category-list">
                              <ul>
                                <li><Link to="shop2">Accessories</Link></li>
                                <li><Link to="shop2">Clothing</Link></li>
                                <li><Link to="shop2">fashion</Link></li>
                                <li><Link to="shop2">Fly</Link></li>
                                <li><Link to="shop2">Glasses</Link></li>
                                <li><Link to="shop2">men</Link></li>
                                <li><Link to="shop2">Product</Link></li>
                                <li><Link to="shop2">version</Link></li>
                                <li><Link to="shop2">women</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  </div>
                  {/* The filter end*/}

                </div>
              </div>
            </div>

            <div className="filter-content">
              <div className="tab-content">
                {/*Tab one start*/}
                <div className="tab-pane fade  show active" id="shop-tab-3">
                  <div className="product-wrapper mt-55">
                    <div className="row">

                      {/********************/}
                      {article.map((no, index)=>
                          <AllProductItem key={index} article={no}/>
                      )}
                      {/********************/}
                    </div>
                  </div>
                </div>
                {/*Tab one end*/}
                {/*Second tab*/}
                <div className="tab-pane fade" id="shop-tab-1">
                  <div className="product-wrapper mt-55">
                    <div className="row">

                      {/********************/}
                      {article.map((no, index)=>
                          <AllProductTab2 key={index} article={no}/>
                      )}
                      {/********************/}
                    </div>
                  </div>
                </div>
                {/*second tab end*/}
                <div className="tab-pane fade" id="shop-tab-2">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      {/********************/}
                      {article.map((no, index)=>
                          <AllProductGrid2 key={index} article={no}/>
                      )}
                      {/********************/}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-4">
                  {/********************/}
                  {article.map((no, index)=>
                      <AllProductList key={index} article={no}/>
                  )}
                  {/********************/}
                </div>
              </div>
            </div>
            {/* /. filter content end */}
            <div className="text-center mt-20">
              <Link to="shop" className="load-more">LOAD MORE...</Link>
            </div>
            {/* pagination */}
            <div className="col-12 mb-5 mt-60">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      <span className="bi bi-caret-left-fill" title="Back" />
                    </Link>
                  </li>
                  <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <span className="bi bi-caret-right-fill" title="Next" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* /. shop products */}
        </div>
      </div>
    </div>
  </div>
  {/*  All products ended*/}
</div>
    )
}
export default AllProducts
