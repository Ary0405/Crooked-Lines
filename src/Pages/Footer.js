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
    return(
        <div className='footer_main' style={{"backgroundColor" : "black"}}>
            <div className='footer'>
                <div id='logo' className='info'>
                    <div className='footer-title'>
                        <img src={logo} className='logo'></img>
                        <p className='footer-heading-title'>Crooked Lines</p>
                    </div>
                    <div>
                        <p className='footer-content footer-title p-tag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div id='pages' className='footer-comp'>
                    <p className='footer-heading'>Pages </p>
                    <div className='sub-footer'>
                        <p className='footer-content'> Lorem ipsum</p>
                        <p className='footer-content'> Lorem ipsum</p>
                        <p className='footer-content'> Lorem ipsum</p>
                    </div>
                </div>
                <div id='service' className='footer-comp'>
                    <p className='footer-heading'>Service </p>
                    <div className='sub-footer'>
                        <p className='footer-content'> Lorem ipsum</p>
                        <p className='footer-content'> Lorem ipsum</p>
                        <p className='footer-content'> Lorem ipsum</p>
                    </div>

                </div>
                <div id='contact' className='footer-comp'>
                    <p className='footer-heading'>Contact </p>
                    <div className='sub-footer'>
                        <div className='sub-contact footer-content'>
                            <img className='pic' src={phone}></img>
                            <p className='footer-content p-tag'>(406) 555-0120</p>
                        </div>
                        <div className='sub-contact footer-content'>
                            <img className='pic' src={mail}></img>
                            <p className='footer-content p-tag'>mangcoding123@gmail.com</p>
                        </div>
                        <div className='sub-contact footer-content'>
                            <img className='location' src={location}></img>
                            <p className='footer-content p-tag'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                        </div>
                    </div>
                </div>
                <div id='media' className='footer-comp'>
                    <p className='footer-heading'>Social media</p>
                    <div className='sub-media'>
                        <a href='#'><img src={facebook} alt='link to facebook'></img></a>
                        <a href='#'><img src={instagram}></img></a>
                        <a href='#'><img src={twitter}></img></a>
                        <a href='#'><img src={linkedin}></img></a>
                    </div>
                </div>
            </div>
            <hr className='divider' />
            <div className='branding'>
                <Link to='https://www.linkedin.com/in/aryan-sethia' style={{"cursor" : "pointer" , "textDecoration" : "none" , "color" : "white" , "marginBottom" : "10px"}} target='_blank'>Made with ❤️ Sus Coders</Link>
            </div>
        </div>
    );
}

export default Footer