import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";
const  Owl = ()=>
{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex,) =>
    {
        setIndex(selectedIndex);
    };
    return (
    <div>
        <Carousel controls={true} fade={true} activeIndex={index}
                  nextIcon={ <i className="bi bi-chevron-right nexticon"> </i>}
                  prevIcon={ <i className="bi bi-chevron-left nexticon"> </i>}
                  onSelect={handleSelect}
                  indicatorLabels="1"
                  pause="hover"
                  keyboard={true}
                  touch={false}
        >
            {/*<span aria-hidden="false" className="carousel-control-prev-icon" />*/}
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/slider/slide5.jpg"

                alt="First slide"
                />
                <Carousel.Caption bsPrefix='carousel-caption'>
                    <div className="hero-slide-content animated">
                        <p className="text text-white animated">
                            new collection
                        </p>
                        <br/>
                        <h2 className="title text-dark delay1 animated">
                            Custom Wooden
                        </h2>
                        <br/>
                        <Link to="allproducts"
                           className="generic-btn mt-70 red-hover-btn text-uppercase roundedAnimation ">Discover Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/slider/slide2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption bsPrefix='carousel-caption'>
                    <div className="hero-slide-content">
                        <p className="text text-white animated">
                            our new design
                        </p>
                        <br/>
                        <h2 className="title text-dark delay1 animated">
                            Capsule Soft
                        </h2>
                        <br/>
                        <h2 className="title text-dark delay2 animated">
                            Seating
                        </h2>
                        <br/>
                        <Link to="allproducts"
                           className="generic-btn mt-70 red-hover-btn text-uppercase roundedAnimation ">Discover Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../assets/images/slider/slide1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption bsPrefix='carousel-caption'>
                    <div className="hero-slide-content">
                        <p className="text text-white animated">
                            new design every week
                        </p>
                        <br />
                        <h2 className="title text-dark delay1 animated">
                            Dinning Table
                        </h2>
                        <br />
                        <h2 className="title text-dark delay2 animated">
                            &amp; Chairs Set
                        </h2>
                        <br />
                        <Link to="allproducts" className="generic-btn mt-70 red-hover-btn text-uppercase roundedAnimation animated">Discover Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../assets/images/slider/slide6.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption bsPrefix='carousel-caption'>
                    <div className="hero-slide-content">
                        <p className="text text-white animated">
                            our new design
                        </p>
                        <br/>
                        <h2 className="title text-dark delay1 animated">
                            Capsule Soft
                        </h2>
                        <br/>
                        <h2 className="title text-dark delay2 animated">
                            Seating
                        </h2>
                        <br/>
                        <Link to="allproducts"
                           className="generic-btn mt-70 red-hover-btn text-uppercase animated roundedAnimation">Discover Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}
export default Owl


