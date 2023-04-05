import React from 'react'
import '../Styles/Home.css'
import Home_image from '../Assets/home_image.png'
import Home_circle_two from '../Assets/home_circle_two.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => [
        console.log("hello"),
        navigate('/submission')
    ]
    return (
        <div id='home_main_container' className='home_main_container'>
            <img className='home_circle' src={Home_circle_two} alt=''/>
            <div className='home_container_one'>
                <p className='home_header'><span className='beyond'>Crooked Lines</span><br />Short Story Competition<br />for Young Writers</p>
                <p className='home_content'>The written word is a crooked line, but a crooked line can also be an astounding break from norm.<br />The Department of English at the Shiv Nadar Institute of Eminence announces its inaugural annual short story competition for young writers.<br/>We welcome entries from Indian residents between the ages of 16 and 18<br />on any topic of their choice.</p>
                {/* <button style={{ "cursor": "pointer" }} onClick={handleClick} className='apply_button'>Apply Now</button> */}
            </div>
            <img className='home_image' src={Home_image} alt=''/>
        </div>
    )
}

export default Home