import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import "../Styles/Navbar.css";

function Navbar() {
  const userA = useSelector((state) => state.user);
  const { user, logout } = UserAuth();
  const phoneNmber = useSelector((state) => state.phone);
  const handleClick = (scrollToId) => {
    // setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar_main_container">
      <p className="navbar_heading">Crooked Lines</p>
      <div className="navbar_container">
        <div style={{ cursor: "pointer" }} className="navbar_options">
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("home_main_container")}>Home</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("description_main_container")}>About</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("eligible_bg")}>Eligibility</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("timeline_main")}>Timeline</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("main_container")}>Contact</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => handleClick("faq_main_container")}>FAQ</p>
          <p style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => logout()}>LogOut</p>
        </div>
        {user || phoneNmber ? (
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="submission"
          >
            <p style={{ textDecoration: "none", cursor: "pointer" }} className="login">Apply</p>
          </Link>
        ) : (
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="signin"
          >
            <p style={{ textDecoration: "none", cursor: "pointer" }} className="login">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
