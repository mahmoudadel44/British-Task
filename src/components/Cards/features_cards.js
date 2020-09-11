import React from "react";
const features_cards = ({ features }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="feat-box text-center">
        <div className="iconStyle m-auto pt-2">{features.icon}</div>
        <h5 className="mt-2">{features.header}</h5>
        <p>{features.paragraph}</p>
      </div>
    </div>
  );
};

export default features_cards;
