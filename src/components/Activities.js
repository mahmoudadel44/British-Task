import React from 'react'
import { Link } from 'react-router-dom'
const Activities = () => {
  return (
    <div className="allactivities pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <div className="card activitiesCard">
              <div className="card-img-top">
                <img src="https://www.bue.edu.eg/wp-content/uploads/2019/07/52602521_1991822284456724_4261850439563083776_o-1024x683.jpg"
                  style={{ width: '100%', height: '180px' }}
                  className="myImage"
                  alt="myImage"
                />
              </div>
              <div className="plansheader">
                <h6>Student Activities</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <Link to="#">
              <div className="card activitiesCard1">
                <div className="card-img-top smallImage">
                  <img src="https://www.bue.edu.eg/wp-content/uploads/2018/08/24131537_1755642154741406_3627706506929357463_n.jpg" 
                  alt="myImage"
                  style={{ width: '100%', height: 'auto' }} />
                  <div className="overlay">
                    <div className="headerCard1 text-center">Student Union</div>
                    <div className="textCard">Together We Stand</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <Link to="#">
              <div className="card activitiesCard2">
                <div className="card-img-top smallImage">
                  <img src="https://www.bue.edu.eg/wp-content/uploads/2018/08/FAQ-banner.jpg" style={{ width: '100%', height: 'auto' }}
                  alt="myImage"
                  />
                  <div className="overlay">
                    <div className="headerCard2 text-center">FAQ</div>
                    <div className="textCard">What You Need</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
