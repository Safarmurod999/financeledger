import React from "react";
import ourteam1 from "../../assets/our-team-1.png";
import ourteam2 from "../../assets/our-team-2.png";
import ourteam3 from "../../assets/our-team-3.png";
import "./OurTeam.css";
function OurTeam() {
  return (
    <section id="ourteam">
      <div className="container">
        <p className="ourteam-top">Who we are</p>
        <div className="ourteam-title">Our Professional Team</div>
        <p className="ourteam-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <div className="ourteam-row">
          <div className="ourteam-card">
            <div className="img-box">
              <div className="hover-box">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <img src={ourteam1} alt="..." />
            </div>
            <div className="text-box">
              <div className="card-title">John Doe</div>
              <p>President</p>
            </div>
          </div>
          <div className="ourteam-card">
            <div className="img-box">
            <div className="hover-box">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <img src={ourteam2} alt="..." />
            </div>
            <div className="text-box">
              <div className="card-title">John Doe</div>
              <p>President</p>
            </div>
          </div>
          <div className="ourteam-card">
            <div className="img-box">
            <div className="hover-box">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <img src={ourteam3} alt="..." />
            </div>
            <div className="text-box">
              <div className="card-title">John Doe</div>
              <p>President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
