import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../images/slider-img.png";
import Banners from "../Banners/Banners";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="carousel--slider  p-3">
        <Carousel variant="white">
          <Carousel.Item>
            <img className="d-block w-50" src={sliderImg} alt="First slide" />
            <Carousel.Caption className="slider--content ">
              <h5>Apple Smart Watch</h5>
              <p>GEN-7, Ultra Slim, Digital Watch</p>
              <button className="btn btn-outline-warning">Buy Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={sliderImg} alt="First slide" />
            <Carousel.Caption className="slider--content ">
              <h5>Apple Smart Watch</h5>
              <p>GEN-7, Ultra Slim, Digital Watch</p>
              <button className="btn btn-outline-warning">Buy Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={sliderImg} alt="First slide" />
            <Carousel.Caption className="slider--content ">
              <h5>Apple Smart Watch</h5>
              <p>GEN-7, Ultra Slim, Digital Watch</p>
              <button className="btn btn-outline-warning">Buy Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="my-4"></div>
      <Banners></Banners>
      <div className="my-4"></div>
      <h1 className="text-center fs-2 fw-bold">Latest Products</h1>
      <Products></Products>
      <div className="my-4"></div>
  
    </>
  );
};

export default Home;
