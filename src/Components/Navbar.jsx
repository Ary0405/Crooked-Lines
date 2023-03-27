import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const user = useSelector((state) => state.user);
  const phoneNmber = useSelector((state) => state.phone);
  const handleClick = (scrollToId) => {
    // setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar_main_container">
      <p className="heading">Crooked Lines</p>
      <div className="navbar_container">
        <div style={{ cursor: "pointer" }} className="navbar_options">
          <p onClick={() => handleClick("home_main_container")}>Home</p>
          <p onClick={() => handleClick("description_main_container")}>About</p>
          <p>Eligibility</p>
          <p onClick={() => handleClick("timeline_main")}>Timeline</p>
          <p>Submission</p>
          <p onClick={() => handleClick("main_container")}>Contact</p>
          <p onClick={() => handleClick("faq_main_container")}>FAQ</p>
        </div>
        {(user || phoneNmber) ? (
          <p className="login">Apply</p>
        ) : (
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="signin"
          >
            <p className="login">Login</p>
          </Link>   
        )}
      </div>
    </div>
  );
}

export default Navbar;
