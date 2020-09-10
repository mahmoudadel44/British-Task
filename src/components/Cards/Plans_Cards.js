import React from "react";
const Plans_Cards = ({ plans }) => {
  return (
    <div className="plans col-lg-3 col-md-6 col-sm-12 " key={plans.header}>
      <div className="card plansCard">
        <div className="card-img-top"
          src="..." alt="Card image cap">{plans.planImage}
        </div>
        <div className="activitiesheader">
          <h6>{plans.header}</h6>
        </div>
      </div>
    </div>
  );


};

export default Plans_Cards;
