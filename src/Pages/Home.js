import React from 'react'
import '../Styles/Home.css'
import Home_image from '../Assets/home_image.png'
import Home_circle_two from '../Assets/home_circle_two.png'
import Apply_button from '../Assets/apply_button.png'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";


function Home() {
    const { user } = UserAuth();
    const navigate = useNavigate();
    const handleClick = () => {
        if (user) {
            navigate('/submission')
        } else {
            navigate('/signin')
        }
    }
    return (
        <div id='home_main_container' className='home_main_container'>
            <img className='home_circle' src={Home_circle_two} alt='' />
            <div style={{ "zIndex": "100" }} className='home_container_one'>
                <p className='home_header'><span className='beyond'>Crooked Lines</span><p className='shortStoryComp'>Short Story Competition</p>for Young Writers</p>
                <p className='home_content'><span style={{"fontSize" : "18px", "fontWeight" : "600"}}><p className='subHeading'> The written word is a crooked line, but a crooked line can also be an astounding break from norm.</p></span><span className='para'>The Department of English at the Shiv Nadar Institute of Eminence announces its inaugural annual short story competition for young writers. We welcome entries from Indian residents between the ages of 16 and 18 on any topic of their choice. Click <i>Enter Now</i> button below to begin your application process.</span></p>
                <img alt='' src={Apply_button} className='apply_button' onClick={handleClick} />
            </div>
            <img className='home_image' src={Home_image} alt='' />
        </div>
    )
}

export default Home