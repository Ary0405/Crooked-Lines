import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
    // const [active, setActive] = React.useState(false);
    return (
        <div className='navbar_main_container'>
            <p className='heading'>Crooked Lines</p>
            <div className='navbar_container'>
                <div className='navbar_options'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Eligibility</p>
                    <p>Timeline</p>
                    <p>Submission</p>
                    <p>Contact</p>
                </div>
                <p className='login'>Login</p>
            </div>
        </div>
    )
}

export default Navbar