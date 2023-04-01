import React from "react";
import arrow from "../../assets/arrow.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <h1>The Sky Is The Limit</h1>
        <p>We provide world class financial assistance</p>
        <button>
          <img src={arrow} alt="" /> Read More
        </button>
      </div>
    </header>
  );
}

export default Header;
