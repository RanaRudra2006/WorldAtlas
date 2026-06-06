import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main ">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the detail you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaArrowRight />
          </button>
        </div>
        <div className="hero-imge">
          <img className="banner-image" src="/images/world1.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
