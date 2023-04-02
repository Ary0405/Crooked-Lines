import React from 'react'
import '../Styles/Home.css'
import Home_image from '../Assets/home_image.png'
import Home_circle_two from '../Assets/home_circle_two.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => [
        navigate('/submission')
    ]
    return (
        <div id='home_main_container' className='home_main_container'>
            <img className='home_circle' src={Home_circle_two}/>
            <div className='home_container_one'>
                <p className='home_header'>Think <span className='beyond'>Beyond</span> the<br />Limits at<br />Lorem Epsime</p>
                <p className='home_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>et massa mi. Aliquam in hendrerit urna. Pellentesque sit <br/>amet sapien fringilla, mattis ligula consectetur, ultrices <br/>mauris.</p>
                <button style={{"cursor" : "pointer"}} onClick={handleClick} className='apply_button'>Apply Now</button>
            </div>
            <img className='home_image' src={Home_image}/>
        </div>
    )
}

export default Home