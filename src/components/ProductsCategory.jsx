import {Link} from "react-router-dom";
import ReactStars from "react-stars";
const ProductsCategory = () =>
{
    return(
    <div>

  {/* bread crumb section start */}
  <nav className="breadcrumb-section breadcrumb-bg1">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bread-crumb-title">shop</h2>
          <ol className="breadcrumb bg-transparent m-0 p-0 justify-content-center align-items-center">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Shop grid left sidebar</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  {/* bread crumb section end */}
  {/* shop page layout start */}
  <div className="shop-page-layout section-padding-bottom">
    <div className="container">
      <div className="row mb-n5">
        <div className="col-lg-9 mb-5">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md-6 ">
              <nav className="shop-grid-nav">
                <ul className="nav nav-tabs justify-content-center justify-content-md-start align-items-center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link grid active" id="home-tab" data-bs-toggle="tab" to="#home" role="tab" />
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link list" id="profile-tab" data-bs-toggle="tab" to="#profile" role="tab" />
                  </li>
                  <li>
                    <span className="total-products text-capitalize">Showing 1–12 of 19 results</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-md-6">
              <div className="shop-grid-button d-flex justify-content-center justify-content-md-end align-items-center">
                <span className="sort-by">Sort by:</span>
                <select className="form-select" aria-label="Default select example">
                  <option  defaultValue={1}>Sort by popularity</option>
                  <option defaultValue={2}>Default sorting</option>
                  <option defaultValue={3}>Sort by popularity</option>
                  <option defaultValue={4}>Sort by average rating</option>
                  <option defaultValue={5}>Sort by latest</option>
                  <option defaultValue={6}>Sort by price: low to high</option>
                  <option defaultValue={7}>Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel">
              <div className="row grid-view mb-n5">
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product1.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">3 Tier Wood With Metal Shelf</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-success">new</span>
                      <img src="../assets/images/products/product2.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">63in. White Stucco Floor Lamp</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price">$85.00</h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product3.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">68in. Bronze Metal Coat Rack</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price">$85.00 - $60.00</h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-success">new</span>
                      <img src="../assets/images/products/product4.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Emmy Green Floral Wood Leg</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-warning">hot!</span>
                      <img src="../assets/images/products/product5.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Gold Circle Mirrored Shelf Bar Cart</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-success">new</span>
                      <img src="../assets/images/products/product6.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Gold Metal Clothing Rack With</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-warning">hot</span>
                      <img src="../assets/images/products/product7.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Gold Metal Fox Design Trinket Tray</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product8.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Heirloom Gold Metal Folding Shelf</Link></h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5">
                  <div className="product-card">
                    <Link to="single" className="product-thumb">
                      <span className="onsale bg-success">new</span>
                      <img src="../assets/images/products/product9.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content">
                      <h4><Link to="single" className="product-title">Parkview 5 Tier Metal &amp; Wood</Link>
                      </h4>
                      <div className="product-group">
                        <h5 className="product-price"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                      </div>
                    </div>
                    {/* actions  */}
                    <ul className="actions actions-verticale">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* pagination */}
                <div className="col-12 mb-5">
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
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              <div className="row mb-n5 grid-view-list overflow-hidden">
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product1.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">3 Tier Wood With Metal Shelf</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product2.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">63in. White Stucco Floor Lamp</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product3.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">68in. Bronze Metal Coat Rack</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product4.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Emmy Green Floral Wood Leg</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product5.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Gold Circle Mirrored Shelf Bar Cart</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product6.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Gold Metal Clothing Rack With</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product7.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Gold Metal Fox Design Trinket Tray</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product8.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Heirloom Gold Metal Folding Shelf</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                <div className="col-12 mb-5">
                  {/* product card list start */}
                  <div className="product-card-list row mb-n5">
                    <Link to="single" className="product-thumb-list col-md-4 mb-5">
                      <span className="onsale bg-danger">sale!</span>
                      <img src="../assets/images/products/product9.jpg" alt="image_not_found" />
                    </Link>
                    {/* thumb end */}
                    <div className="product-content-list col-md-8 mb-5">
                      <div className="product-category-links">
                        <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
                      </div>
                      <h4><Link to="single" className="product-title">Parkview 5 Tier Metal &amp; Wood</Link></h4>
                      <h5 className="product-price-list"><del className="old-price">$85.00</del> <span className="new-price">$60.00</span>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus</p>
                      {/* actions  */}
                      <ul className="actions actions-horizontal">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                        </li>
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* product card list end */}
                </div>
                {/* col-12 mb-5 end */}
                {/* pagination */}
                <div className="col-12 mb-5">
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
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-5 order-lg-first">
          <aside className="aside">
            <div className="sidebar-widget">
              <h3 className="widget-title">Categories</h3>
              <nav id="shop-dropdown" className="offcanvas-menu offcanvas-menu-sm">
                <ul>
                  <li><Link to="#">Acrylic Dining <span>(1)</span></Link></li>
                  <li><Link to="#">Floor Décor <span>(3)</span></Link>
                    <ul>
                      <li><Link to="#">Accessories <span>(1)</span></Link></li>
                      <li><Link to="#">Chalkboards <span>(1)</span></Link></li>
                      <li><Link to="#">Fireplace Screens <span>(1)</span></Link></li>
                      <li><Link to="#">Holders Lanterns <span>(1)</span></Link></li>
                      <li><Link to="#">Mirrors <span>(1)</span></Link></li>
                      <li><Link to="#">Plants Trees <span>(1)</span></Link></li>
                      <li><Link to="#">Sculptures <span>(1)</span></Link></li>
                      <li><Link to="#">Signs Accents <span>(1)</span></Link></li>
                      <li><Link to="#">Vases <span>(1)</span></Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Home Accents <span>(5)</span></Link>
                    <ul>
                      <li><Link to="#">Bookends <span>(2)</span></Link></li>
                      <li><Link to="#">Boxes Trunks <span>(2)</span></Link></li>
                      <li><Link to="#">Candle Holders <span>(2)</span></Link></li>
                      <li><Link to="#">Easels Risers Stands <span className="#">(2)</span></Link></li>
                      <li><Link to="#">Figurines <span>(2)</span></Link></li>
                      <li><Link to="#">Plates, Bowls <span>(2)</span></Link></li>
                      <li><Link to="#">Spheres <span>(2)</span></Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Kitchen Dining<span>(3)</span></Link>
                    <ul>
                      <li><Link to="#">Bar Wine <span>(1)</span></Link></li>
                      <li><Link to="#">Bowls, Gadgets Utensils <span>(1)</span></Link></li>
                      <li><Link to="#">Dinnerware <span>(1)</span></Link> </li>
                      <li><Link to="#">Drinkware <span>(1)</span></Link></li>
                      <li><Link to="#">Flatware Cutlery <span>(1)</span></Link></li>
                      <li><Link to="#">Floor Mats <span>(1)</span></Link></li>
                      <li><Link to="#">Storage <span>(1)</span></Link></li>
                      <li><Link to="#">Table Linens <span>(1)</span></Link> </li>
                      <li><Link to="#">Trash Cans <span>(1)</span></Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Kitchen Cleaning <span>(1)</span></Link></li>
                  <li><Link to="#">Lamps <span>(6)</span></Link>
                    <ul>
                      <li><Link to="#">Accent Lamps <span>(2)</span></Link></li>
                      <li><Link to="#">Buffet Lamps <span>(2)</span></Link></li>
                      <li><Link to="#">Desk Lamps <span>(2)</span></Link></li>
                      <li className={-64}><Link to="#">Floor Lamps <span>(2)</span></Link></li>
                      <li><Link to="#">Kids Lamps <span>(2)</span></Link></li>
                      <li><Link to="#">Mini Accent Lamps <span>(2)</span></Link> </li>
                      <li><Link to="#">Specialty Lamps <span>(2)</span></Link></li>
                      <li><Link to="#">Table Lamps <span>(2)</span></Link> </li>
                      <li><Link to="#">Task Lamps <span>(2)</span></Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Melamine <span>(1)</span></Link> </li>
                  <li><Link to="#">Party Supplies <span>(1)</span></Link> </li>
                  <li><Link to="#">Serveware <span>(2)</span></Link>
                  </li>
                  <li><Link to="#">Uncategorized <span>(2)</span></Link> </li>
                  <li><Link to="#">Wall Décor <span>(6)</span></Link>
                    <ul>
                      <li><Link to="#">Clocks <span>(1)</span></Link> </li>
                      <li><Link to="#">Frames <span>(1)</span></Link> </li>
                      <li><Link to="#">Hangers Hardware <span>(2)</span></Link></li>
                      <li><Link to="#">Kids Wall Décor <span>(1)</span></Link> </li>
                      <li><Link to="#">Mirrors <span>(1)</span></Link></li>
                      <li><Link to="#">Organization <span>(2)</span></Link></li>
                      <li><Link to="#">Wall Accents <span>(1)</span></Link> </li>
                      <li><Link to="#">Wall Art <span>(2)</span></Link></li>
                      <li><Link to="#">Wall Shelves <span>(1)</span></Link> </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            {/* sidebar widget end */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Price Filter</h3>
              <div className="price-filter">
                <div id="slider-range" />
                <div className="price-slider-amount">
                  <span className="price-range">Price:</span>
                  <input type="text" id="amount" name="price" readOnly placeholder="Add Your Price" />
                </div>
              </div>
            </div>
            {/* sidebar widget end */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Price Filter</h3>
              <div className="widget-colors">
                <ul className="colors">
                  <li><Link to="/">Amber <span>(4)</span></Link></li>
                  <li><Link to="/">Beige <span>(4)</span></Link></li>
                  <li><Link to="/">Bronze <span>(4)</span></Link></li>
                  <li><Link to="/">Purple <span>(5)</span></Link></li>
                  <li><Link to="/">Green <span>(5)</span></Link></li>
                  <li><Link to="/">Red <span>(5)</span></Link></li>
                  <li><Link to="/">White <span>(4)</span></Link></li>
                </ul>
              </div>
            </div>
            {/* sidebar widget end */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Price Filter</h3>
              <div className="tag-clouds">
                <Link to="#" className="tag-cloud-link">Bedroom</Link>
                <Link to="#" className="tag-cloud-link">Classic</Link>
                <Link to="#" className="tag-cloud-link">Furniture</Link>
                <Link to="#" className="tag-cloud-link">Kitchen</Link>
                <Link to="#" className="tag-cloud-link">Living Room</Link>
                <Link to="#" className="tag-cloud-link">Modern</Link>
                <Link to="#" className="tag-cloud-link">Rugs</Link>
                <Link to="#" className="tag-cloud-link">Steel</Link>
                <Link to="#" className="tag-cloud-link">Wall</Link>
                <Link to="#" className="tag-cloud-link">Wood</Link>
              </div>
            </div>
            {/* sidebar widget end */}
          </aside>
        </div>
      </div>
    </div>
  </div>
  {/* shop page layout end */}


{/* Modal  THESE ARE TO VIEW THE PRODUCT*/}
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
                        <img src="../assets/images/products/large/1.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/2.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/3.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/4.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="../assets/images/products/large/5.jpg" alt="image_not_found" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-modal-gallery-thumbs">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/">
                          <img src="../assets/images/products/small/1.jpg" alt="image_not_found" />
                        </Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/2.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/3.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/4.jpg" alt="image_not_found" /></Link>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <Link to="/"> <img src="../assets/images/products/small/5.jpg" alt="image_not_found" /></Link>
                      </div>
                    </div>
                  </div>
                  {/* If we need pagination */}
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-7">
              <div className="modal-product-des">
                <h3 className="modal-product-title"><Link to="#">Tropical Juice Drink</Link></h3>
                <ReactStars count={5} size={20} color2={'#ffd700'} />

                <div className="product-price-wrapp-lg">
                  <span className="product-regular-price-lg">€43.80</span>
                  <span className="product-price-on-sale-lg">€39.42</span>
                  <span className="badge badge-lg bg-dark">Save 8%</span>
                </div>
                <div className="product-description-short">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
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
  {/* Modal */}
  <div className="modal fade" id="product-modal-compare">
    <div className="modal-dialog modal-dialog-centered compare-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> <i className="bi bi-check2-circle" /> Product added to compare.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-wishlist">
    <div className="modal-dialog modal-dialog-centered wishlist-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> You must be logged in to manage your wishlist.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="addto-cart-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-dark border-bottom-0 justify-content-center">
          <span className="bi bi-check-lg me-5" />
          <h4 className="modal-title text-center">Product successfully added to your shopping cart</h4>
          <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close">×</button>
        </div>
        <div className="modal-body p-5">
          <div className="row align-items-center align-items-lg-start">
            <div className="col-lg-5">
              <div className="row align-items-center align-items-lg-start">
                <div className="col-md-6">
                  <img className="product-image" src="../assets/images/products/product1.jpg" alt="images_not_found" />
                </div>
                <div className="col-md-6">
                  <h6 className="product-name">Snacking Essentials Walnuts</h6>
                  <ul className="quntity-list">
                    <li>€23.06</li>
                    <li>Color: White</li>
                    <li>Quantity:1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cart-content">
                <p className="title">There are 3 items in your cart.</p>
                <p><span>Total products:</span>€23.06</p>
                <p><span>Total shipping:</span>Free</p>
                <p><span>Taxes:</span> €0.00</p>
                <p><span>Total:</span> €23.06 (tax excl.)</p>
                <div className="cart-content-btn">
                  <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                    shopping</button>
                  <button className="btn btn-sm btn-dark mt-3 mt-sm-0">Proceed to
                    checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default ProductsCategory

