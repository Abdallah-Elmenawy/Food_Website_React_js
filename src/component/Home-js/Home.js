import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import Data from "../../data.js";
import { Navbar , Carousel } from "react-bootstrap";

const Home = () => {

    const blogitem = Data.map((item) => {
        return(
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img}/>
                    <div className="info">
                        <h5>{item.title}</h5>
                        <span>{item.time}</span>
                        <h6>{item.price}</h6>
                    </div>
                </div>
                <button>
                    <a href="#">Order Now </a>
                </button>
            </div>
        )
    })
    return(
        <Fragment>
            <Header/>
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <span>SAVINGS</span>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <span>PHOTOS</span>
                        </div>
                        <div className="col-md-3">
                            <h2>1444+</h2>
                            <span>ROCKETS</span>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <span>GLOBES</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require("../../assests/1.png")} alt="pride"></img>
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button><a href="#"> Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by band with the best possible ingredients</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.
                            </p>
                            <ul>
                                <li>printing and typesetting industry.</li>
                                <li>making real food from the best ingredients</li>
                                <li>simply dummy text of the printing. </li>
                            </ul>
                            <button><a href="#"> Learn More</a></button>
                        </div>
                        <div className="col-md-6">
                            <img src={require("../../assests/2.png")} alt="ingredients"></img>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="paralex">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's Stomach is full it makes no difference Whether he is  rich ou poor.</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="#">Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Explore Our Foods</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {blogitem}
                    </div>
                </div>
            </section>

            <section className="sliderOne">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Carousel className="carousel">
                                <Carousel.Item >
                                    <img
                                        src={require("../../assests/2.jpg")}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <span>Back-End Developer</span>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        src={require("../../assests/1.jpg")}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <span>Front-End Developer</span>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        src={require("../../assests/2.jpg")}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <span>Web Designer</span>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe text-center text-md-start">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="texts fw-bold fs-5 mb-3">Subscribe to our Newsletter : </div>
                        </div>
                        <div className="col-md-6 col-lg-7 mb-5">
                            <input className="w-100 text-light p-2 bg-transparent" type="text" placeholder="Enter Email Address"></input>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <input className="btn rounded-pill" type="submit" value="Subscribe"></input>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer text-center text-md-start" id="Contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="info">
                                <Navbar.Brand className="logo" href="#home">Food..</Navbar.Brand>
                                <p className="mb-4">
                                    Blanditiis provident inventore vitae accusantium optio consectetur adipisicing elit.
                                </p>
                                <div className="copyright">
                                    Created by : <span>Abdallah ,Egypt</span> 
                                    <div> &copy; 2023 - <span>Food..</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="links">
                                <h5 className="text-light">links</h5>
                                <ul className=" list-unstyled">
                                    <li>Home</li>
                                    <li>Our Services</li>
                                    <li>Portfolio</li>
                                    <li>Testimonials</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="links">
                                <h5 className="text-light">About Us</h5>
                                <ul className="list-unstyled">
                                    <li>Sign In</li>
                                    <li>Register</li>
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="contant">
                                <h5 className="text-light">Contact Us</h5>
                                <p className="lh-lg mt-3 mb-5">
                                    Get in touch with us via mail phone.We are waiting for 
                                    your call or message
                                </p>
                                <a className="btn rounded-pill main-btn w-100"  href="">graphberry@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="social col-12">
                        <ul className="d-flex mt-5 list-unstyled gap-5">
                            <li>
                                <a className="d-block " href="#">
                                    <i className="fa-brands fa-facebook-f fa-lg facebook rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a className="d-block" href="#">
                                    <i className="fa-brands fa-twitter fa-lg twitter rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a className="d-block " href="#">
                                    <i className="fa-regular fa-paper-plane fa-lg paper-plane rounded-circle p-2"></i>
                                </a>
                            </li>
                            <li>
                                <a className="d-block " href="#">
                                    <i className="fa-brands fa-youtube fa-lg youtube rounded-circle p-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;