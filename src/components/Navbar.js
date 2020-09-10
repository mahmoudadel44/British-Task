import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const address = "https://www.bue.edu.eg/wp-content/uploads/2018/07/BUE-logo.png"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <img className="nav-img" src={address} style={{ height: '40px', width: '100px' }} />
      <div className="right-side" style={{ display: 'inline' }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li>        <a className="navbar-brand" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About         </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <div>
                  <a className="dropdown-item" href="#">The University</a>
                  <a className="dropdown-item" href="#">LeaderShip And Structure</a>
                  <a className="dropdown-item" href="#">Faculties<i class="fas fa-chevron-right ml-5"></i></a>
                  <a className="dropdown-item" href="#">Administrative Department<i class="fas fa-chevron-right ml-5"></i></a>
                  <a className="dropdown-item" href="#">internationalization<i class="fas fa-chevron-right ml-5"></i></a>
                  <a className="dropdown-item" href="#">History<i class="fas fa-chevron-right ml-5"></i></a>
                  <a className="dropdown-item" href="#">Alumni<i class="fas fa-chevron-right ml-5"></i></a>

                </div>
                <div>
                  <a className="dropdown-item" href="#">Strategy</a>
                  <a className="dropdown-item" href="#">Bue Strategy</a>
                  <a className="dropdown-item" href="#">Vision & Mission</a>


                </div>
                <div>
                  <a className="dropdown-item" href="#">Community & Campus</a>
                  <a className="dropdown-item" href="#">Campus Map</a>
                  <a className="dropdown-item" href="#">Virtual Tour</a>
                  <a className="dropdown-item" href="#">Campus Facilities</a>
                  <a className="dropdown-item" href="#">Community Services</a>

                </div>
                <div>
                  <a className="dropdown-item" href="#">Useful Links</a>
                  <a className="dropdown-item" href="#">Job Vacancies</a>
                  <a className="dropdown-item" href="#">Hrm</a>
                  <a className="dropdown-item" href="#">Bue Mail</a>
                  <a className="dropdown-item" href="#">Contact Us</a>

                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Study & BUE          </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Research         </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                News & Event          </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <i
                className="fas fa-graduation-cap mr-3 applyIcon"
                style={{ color: "#fff" }}
              ></i>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Apply Now          </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">For Undergraduate</a>
                <a className="dropdown-item" href="#">For Postgraduate</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
