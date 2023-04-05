import { useState } from "react";
import { useSelector } from "react-redux";
import Hamburger from "../Assets/hamburg.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import "../Styles/Navbar.css";

function Navbar() {
  const { user, logout } = UserAuth();
  const phoneNmber = useSelector((state) => state.phone);
  const handleClick = (scrollToId) => {
    // setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_heading">
          <Link to="/" className="home_link">
            <p>Crooked Lines</p>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img className="hamburger" src={Hamburger} alt=''></img>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="list_nav">
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("home_main_container")}>Home</p>
            </li>
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("description_main_container")}>
                About
              </p>
            </li>
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("eligible_bg")}>Eligibility</p>
            </li>
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("timeline_main")}>Timeline</p>
            </li>
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("main_container")}>Contact</p>
            </li>
            <li>
              <p style={{"cursor" : "pointer"}} onClick={() => handleClick("faq_main_container")}>FAQ</p>
            </li>
            <li>
              {user ? <p style={{"cursor" : "pointer"}} onClick={() => logout()}>Log Out</p> : null}
            </li>
            <li>
              {user ? (
                <Link
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  to="/submission"
                >
                  <p style={{"cursor" : "pointer"}} className="login">Apply</p>
                </Link>
              ) : (
                <Link
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  to="/signin"
                >
                  <p style={{"cursor" : "pointer"}} className="login">Login</p>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
