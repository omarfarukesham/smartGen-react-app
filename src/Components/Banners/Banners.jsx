import React from "react";
import "./Banners.css";
import Banner from "../../images/1.png";
import Banner1 from "../../images/2.png";

const Banners = () => {
  return (
    <div className="container">
      <div className="row gx-4 justify-content-center">
        <div className="d-flex">
          <div className="shadow p-3 mb-5 bg-body rounded w-50 mx-3 d-flex justify-content-between">
            <div className="align-items-center mt-5">
              <h3>DS-LAR</h3>
              <p className="fs-2 fw-bold text-warning">Offer 45%</p>
              <p>$1000</p>
              <button className="btn btn-outline-warning">Buy Now</button>
            </div>
            <div>
              <img className="img-fluid" src={Banner1} alt="" />
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded w-50 mx-3 d-flex justify-content-between">
            <div className="align-items-center mt-5">
              <h3>Laptop</h3>
              <p className="fs-2 fw-bold text-warning">Offer 35%</p>
              <p>$3000</p>
              <button className="btn btn-outline-warning">Buy Now</button>
            </div>
            <div>
              <img className="img-fluid" src={Banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
