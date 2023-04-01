import React from "react";
import "./About.scss";
import univer from "../../assets/fa-solid_university.svg";
import book from "../../assets/fa-solid_book-reader.svg";
import pencil from "../../assets/fa-solid_pencil-alt.svg";

function About() {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service__wrap">
            <div className="service__wrap__content">
              <div className="img">
                <img src={univer} alt="univer" />
              </div>
              <span>Investmant Banking</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </p>
            </div>
            <div className="service__wrap__content">
              <div className="img">
                <img src={book} alt="book" />
              </div>
              <span>Portfolio Manager</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </p>
            </div>
            <div className="service__wrap__content">
              <div className="img">
                <img src={pencil} alt="pencil" />
              </div>
              <span>Tax & Custudio</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solution">
        <div className="left">
        </div>
        <div className="right">
       <div className="right-content">
       <div className="right-top">What you are looking for</div>
        <div className="right-title">We provide bespoke solutions</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className="button">
          Read More
        </button>
       </div>
      </div>
      </section>
    </>
  );
}

export default About;
