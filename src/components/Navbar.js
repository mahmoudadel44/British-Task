import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const address = "https://www.bue.edu.eg/wp-content/uploads/2018/07/BUE-logo.png"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <img src={address} style={{ height: '40px', width: '100px' }}
            alt="myImage"
      />
      <div className="right-side">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li><Link className="navbar-brand" href="#">Home</Link></li>

            <li className="nav-item dropdown">
              <Link className="nav-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About</Link>
              <div className="nav-feat dropdown-menu ">
                <div>
                  <h6 className="feat-head">The University</h6>
                  <Link className="dropdown-item" href="#">LeaderShip And Structure</Link>
                  <Link className="dropdown-item" href="#">Faculties<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Administrative Department<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">internationalization<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">History<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Alumni<i class="fas fa-chevron-right"></i></Link>
                </div>
              </div>

            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Study & BUE          
                </Link>
              <div className="nav-feat dropdown-menu ">
                <div>
                  <h6 className="feat-head">The University</h6>
                  <Link className="dropdown-item" href="#">LeaderShip And Structure</Link>
                  <Link className="dropdown-item" href="#">Faculties<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Administrative Department<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">internationalization<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">History<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Alumni<i class="fas fa-chevron-right"></i></Link>
                </div>
              </div>

            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Research         </Link>
              <div className="nav-feat dropdown-menu ">

                <div>
                  <h6 className="feat-head">The University</h6>
                  <Link className="dropdown-item" href="#">LeaderShip And Structure</Link>
                  <Link className="dropdown-item" href="#">Faculties<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Administrative Department<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">internationalization<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">History<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Alumni<i class="fas fa-chevron-right"></i></Link>
                </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                News & Event          </Link>
              <div className="nav-feat dropdown-menu ">

                <div>
                  <h6 className="feat-head">The University</h6>
                  <Link className="dropdown-item" href="#">LeaderShip And Structure</Link>
                  <Link className="dropdown-item" href="#">Faculties<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Administrative Department<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">internationalization<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">History<i class="fas fa-chevron-right"></i></Link>
                  <Link className="dropdown-item" href="#">Alumni<i class="fas fa-chevron-right"></i></Link>
                </div>
              
              </div>

            </li>
            <li className="nav-item dropdown">
              <i className="fas fa-graduation-cap mr-3 applyIcon" style={{ color: "#fff" }} ></i>
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Apply Now       </Link>
                <div className="nav-feat dropdown-menu last ">

                <Link className="dropdown-item" href="#">For Undergraduate</Link>
                <Link className="dropdown-item" href="#">For Postgraduate</Link>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
