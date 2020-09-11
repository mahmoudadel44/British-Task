import React from "react";
import openDays from '../images/openDays.jpg'
import PlansCards from "./Cards/Plans_Cards";
import Admission from '../images/Admission.jpg'
import campusMap from '../images/campusMap.jpg'
import virtualTour from '../images/virtualTour.jpg'
const width = "100%"
const height = "auto"
const Plans = () => {
  const plans = [
    {
      planImage: <img src={openDays} width={width} height={height} 
      alt="myImage"
      />,
      header: 'Open Days'
    },
    {
      planImage: <img src={Admission} width={width} height={height} 
      alt="myImage"
      />,
      header: 'Admission'
    },
    {
      planImage: <img src={campusMap} width={width} height={height} 
      alt="myImage"
      />,
      header: 'Campus Map'
    },
    {
      planImage: <img src={virtualTour} width={width} height={height} 
      alt="myImage"
      />,
      header: 'Virtual Tour'
    },
  ]

  const allPlans = plans.map((plan) => {
    return <PlansCards plans={plan} />;
  });
  return (
    <div className="allPlans pt-5">
      <div className="container">
        <div className="row">{allPlans}</div>
      </div>
    </div>
  );
}


export default Plans;
