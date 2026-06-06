import React from "react";

const HeroCard = (props) => {
  return (
    <div className="card">
      <div className="container-card bg-blue-box">
        <p className="card-title">{props.countryName}</p>
        <p>
          <span className="card-description">Capital:</span>
          {props.capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {props.population}
        </p>

        <p>
          <span className="card-description">Intesting Fact:</span> {props.fact}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
