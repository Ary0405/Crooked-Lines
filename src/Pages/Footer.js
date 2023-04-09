import React from 'react';
import instagram from '../Assets/instagram.png';
import location from '../Assets/location.png';
import mail from '../Assets/mail.png';
import logo from '../Assets/logo.png'
import '../Styles/footer.css';
import { Link,useNavigate } from 'react-router-dom';


function Footer() {
    const navigate = useNavigate();
    const handleClick = (scrollToId) => {
        if(!document.getElementById(scrollToId)){
            navigate('/');
        }else{
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
        } 
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
                        <p className='footer-content' onClick={() => handleClick("main_container")}> Contact</p>
                        <p className='footer-content' onClick={() => handleClick("faq_main_container")}> FAQ</p>
                    </div>
                </div>
                <div id='contact' className='footer-comp'>
                    <p className='footer-heading'>Contact </p>
                    <div className='sub-footer'>
                        <div className='sub-contact footer-content'>
                            <img className='pic' src={mail} alt=''></img>
                            <p className='footer-content p-tag'><a className="home_link" href='mailto:crooked.lines@snu.edu.in' rel='noreferrer' target='_blank'>crooked.lines@snu.edu.in</a></p>
                        </div>
                        <div className='sub-contact footer-content'>
                            <img className='location' src={location} alt=''></img>
                            <p className='footer-content p-tag'><a href='https://goo.gl/maps/vyjrn8ztuVQ6DXnk7' className="home_link" rel='noreferrer' target='_blank'>Shiv Nadar Institute of Eminence, Dadri, Uttar Pradesh - 201314</a></p>
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
                <Link to='https://www.linkedin.com/in/aryan-sethia' style={{ "cursor": "pointer", "textDecoration": "none", "color": "white", "marginBottom": "10px"}} target='_blank'>Developed By Sus Coders</Link>
            </div>
        </div>
    );
}

export default Footer