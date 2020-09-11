import React from 'react'
import { Link } from 'react-router-dom'
import LondonUniversity from '../images/LondonUniversity.png'
import QueenUniversity from '../images/QueenUniversity.png'
const University = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-3 mb-3 pt-3 pb-3" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="col-md-6 col-sm-12">
            <Link to="#">
              <div className="media londonUniversity">
                <img src={LondonUniversity} alt="Generic"
                />
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12 text-center QueenUniversity">
            <Link to="#">
              <img src={QueenUniversity} alt="Generic" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default University
