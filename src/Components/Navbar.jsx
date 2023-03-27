import { useState } from 'react'
import { useSelector } from "react-redux";
import  Hamburger from '../Assets/hamburg.png'
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'

export default function Navbar(){
    const user = useSelector((state) => state.user);
    const phoneNmber = useSelector((state) => state.phone);
  

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleClick = (scrollToId) => {
        // setActiveNavLinkId(navLinkId);
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
      };

    return(
        <nav className="navbar">
            <div className="container">

            <div className="navbar_heading">
                <p>Crooked Lines</p>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={Hamburger}></img>
            </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <p onClick={() => handleClick("home_main_container")}>Home</p>
                    </li>
                    <li>
                        <p onClick={() => handleClick("description_main_container")}>About</p>
                    </li>
                    <li>
                        <p>Eligibility</p>
                    </li>
                    <li>
                        <p onClick={() => handleClick("timeline_main")}>Timeline</p>
                    </li>
                    <li>
                        <p>Submission</p>
                    </li>
                    <li>
                        <p onClick={() => handleClick("main_container")}>Contact</p>
                    </li>
                    <li>
                    <p onClick={() => handleClick("faq_main_container")}>FAQ</p>
                    </li>
                    <li>
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
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );

}