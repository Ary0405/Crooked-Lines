import React from 'react'
import '../Styles/Description.css'
import Home_image_two from '../Assets/home_image_two.png'
import Home_circle_one from '../Assets/home_circle_one.png'
import { Link } from 'react-router-dom'

function Description() {
    return (
        <div id='description_main_container' className='description_main_container'>
            <div className='image_container'>
                <img className='description_image' src={Home_image_two} alt='home_image' />
            </div>
            <img className='description_image_circle' src={Home_circle_one}/>
            <div className='description_container'>
                <p className='description_question'>About The Competition</p>
                <p className='description_content'>The Department of English at Shiv Nadar Institute of Eminence came into existence in July 2011, when the university was founded. Our faculty is highly regarded with PhDs from eminent universities across the world.</p>
                <p className='description_content'>We combine intellectual rigor with continuous innovation inside and outside the classroom offering a wide range of undergraduate and graduate courses.</p>
                <p className='description_content'>In addition to critical thinking and interpretation, we also emphasize creative writing in both our BA and MA degrees. To find out more <Link to='about'> click here </Link> </p>
            </div>
        </div>
    )
}

export default Description