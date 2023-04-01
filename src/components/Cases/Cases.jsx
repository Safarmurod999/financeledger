import React from "react";
import "./Cases.scss";
import Cases6 from "../../assets/cases6.png";

function Cases() {
  return (
    <div className="cases">
      <div className="container">
        <div className="cases__top">This is what we do</div>
        <div className="cases__title">Business Cases</div>
        <div className="cases__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </div>
        <ul>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
          <li>
            <img src={Cases6} alt="cases6" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cases;
