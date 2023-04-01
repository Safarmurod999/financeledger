import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
// const navbarShrink = ()=>{
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     document.getElementById("nav").classList.add("shrink");
//   } else {
//     document.getElementById("nav").classList.remove("shrink");
//   }
// }
function Navbar() {
  
// const navbarShrink = () => {

// };
// navbarShrink()
  return (
    <nav id="nav" >
      <div className="container">
        <div className="nav__wrap">
          <div className="logo">
            <h2>
              <img src={logo} alt="logo" />
              <span>Finance</span> Ledger
            </h2>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cases</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
 
  );
}

export default Navbar;
