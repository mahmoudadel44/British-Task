import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className="footer pb-3 pt-3" style={{ backgroundColor: '#081D39' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-right">
            <div style={{ color: '#354856', fontSize: '12px' }}>
              Copyright &copy; 2020 <span style={{ color: '#B1B1B1' }}>BUE , </span>
              All rights reserved.
            </div>
          </div>
          <div className="col-md-6 text-right">
            <div style={{ fontSize: '12px', display: 'inline' }}>
              <Link to="#">Home</Link>
              <Link to="#">People</Link>
              <Link to="#">History</Link>
              <Link to="#">Credits</Link>
              <Link to="#">Contact Us</Link>

            </div>
          </div>
        </div>
      </div>
      <div id="scroll-top">
        <i className="fas fa-chevron-up" onClick={returnToTop}></i>
      </div>
    </div>
  );
};

export default Footer;
