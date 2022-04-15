import React from "react";
import "./Footer.css";
const Footer = () => {
  const d = new Date();
  const getYear = d.getFullYear();
  return (
    <div className="footer--design d-flex h-100 justify-content-around align-items-center">
      <div className="text-white">@all Right Reserved by - {getYear}</div>
      <div className="text-white mt-3">
        <p>Join with Social Media</p>
        <div className="d-flex social--icon">
          <p className="mx-2">
            <i class="fa-brands fa-facebook"></i>
          </p>
          <p className="mx-2">
            <i class="fa-brands fa-youtube"></i>
          </p>
          <p className="mx-2">
            <i class="fa-brands fa-twitter"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
