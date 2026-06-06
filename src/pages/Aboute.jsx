import React from "react";
import HeroCard from "../componants/HeroCard";

import countryData from "../api/countryData.json";

const Aboute = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the intresting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {countryData.map((elem, idx) => {
          return (
            <div key={idx}>
              <HeroCard
                countryName={elem.countryName}
                capital={elem.capital}
                population={elem.population}
                fact={elem.interestingFact}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Aboute;
