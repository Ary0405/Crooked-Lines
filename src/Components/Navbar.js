import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
    const handleClick = (scrollToId) => {
        // setActiveNavLinkId(navLinkId);
        console.log("HELLO")
        console.log(scrollToId)
        console.log(document.getElementById(scrollToId))
        document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='navbar_main_container'>
            <p className='heading'>Crooked Lines</p>
            <div className='navbar_container'>
                <div className='navbar_options'>
                    <p onClick={() => handleClick('home_main_container')}>Home</p>
                    <p onClick={() => handleClick('description_main_container')}>About</p>
                    <p>Eligibility</p>
                    <p onClick={() => handleClick('timeline_main')}>Timeline</p>
                    <p>Submission</p>
                    <p onClick={() => handleClick('main_container')}>Contact</p>
                    <p onClick={() => handleClick('faq_main_container')}>FAQ</p>
                </div>
                <p className='login'>Login</p>
            </div>
        </div>
    )
}

export default Navbar