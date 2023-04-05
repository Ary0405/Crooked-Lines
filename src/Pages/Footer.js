import React from 'react';
import facebook from '../Assets/fb.png';
import instagram from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import location from '../Assets/location.png';
import mail from '../Assets/mail.png';
import phone from '../Assets/phone.png';
import logo from '../Assets/logo.png'
import '../Styles/footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    const handleClick = (scrollToId) => {
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='footer_main' style={{ "backgroundColor": "black" }}>
            <div className='footer'>
                <div id='logo' className='info'>
                    <div className='footer-title'>
                        <img src={logo} className='logo' alt='crooked lines logo'></img>
                        <p className='footer-heading-title'>Crooked Lines</p>
                    </div>
                    <div>
                        <p className='footer-content footer-title p-tag'>The written word is a crooked line, but a crooked line can also be an astounding break from norm.</p>
                    </div>
                </div>
                <div id='pages' className='footer-comp'>
                    <p className='footer-heading'>Pages </p>
                    <div className='sub-footer'>
                        <p className='footer-content' onClick={() => handleClick("home_main_container")}> Home</p>
                        <p className='footer-content' onClick={() => handleClick("description_main_container")}> About</p>
                        <p className='footer-content' onClick={() => handleClick("eligible_bg")}> Eligibility</p>
                        <p className='footer-content' onClick={() => handleClick("timeline_main")}> Timeline</p>
                        <p className='footer-content' onClick={() => handleClick("main_container")}> Contact</p>
                        <p className='footer-content' onClick={() => handleClick("faq_main_container")}> FAQ</p>
                    </div>
                </div>
                <div id='contact' className='footer-comp'>
                    <p className='footer-heading'>Contact </p>
                    <div className='sub-footer'>
                        <div className='sub-contact footer-content'>
                            <img className='pic' src={mail} alt=''></img>
                            <p className='footer-content p-tag'>crooked.lines@snu.edu.in</p>
                        </div>
                        <div className='sub-contact footer-content'>
                            <img className='location' src={location} alt=''></img>
                            <p className='footer-content p-tag'>Shiv Nadar Institute of Eminence, Dadri, Uttar Pradesh - 201314</p>
                        </div>
                    </div>
                </div>
                <div id='media' className='footer-comp'>
                    <p className='footer-heading'>Social media</p>
                    <div className='sub-media'>
                        <Link to='https://www.instagram.com/crooked_liness/'><img src={instagram} alt='link to instagram'></img></Link>
                    </div>
                </div>
            </div>
            <hr className='divider' />
            <div className='branding'>
                <Link to='https://www.linkedin.com/in/aryan-sethia' style={{ "cursor": "pointer", "textDecoration": "none", "color": "white", "marginBottom": "10px" }} target='_blank'>Developed with ❤️ Sus Coders</Link>
            </div>
        </div>
    );
}

export default Footer