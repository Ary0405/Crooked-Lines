import React from 'react'
import '../Styles/Description.css'
import Home_circle_one from '../Assets/home_circle_one.png'
import About_us_section from '../Assets/about_us_section.png'
import { Link } from 'react-router-dom'
import apply_now from '../Assets/apply_now.png'
import submit from '../Assets/submit.png'

function Description() {
    return (
        <div id='description_main_container' className='description_main_container'>
            <div className='image_container'>
                <img className='description_image' src={About_us_section} alt='home_image' />
            </div>
            <img className='description_image_circle' src={Home_circle_one} alt=''/>
            <div className='description_container'>
                <p className='description_question'>ABOUT THE ORGANIZERS</p> 
                {/* <span className='organizers'>ORGANIZERS</span> */}
                <p className='description_content'>The Department of English at Shiv Nadar Institute of Eminence came into existence in July 2011, when the university was founded. Our faculty is highly regarded with PhDs from eminent universities across the world.</p>
                <p className='description_content'>We combine intellectual rigor with continuous innovation inside and outside the classroom offering a wide range of undergraduate and graduate courses.</p>
                <p className='description_content'>In addition to critical thinking and interpretation, we also emphasize creative writing in both our BA and MA degrees. To find out more <Link to='about' style={{"zIndex" : "100"}}> click here </Link> </p>
                <div className='admissions_box'>
          {/* <img alt='admissions' className='admissions_image' src={submit} /> */}
          <Link target='_blank' to='https://snuadmissions.com/'><img alt='' className='admissions_image' src={apply_now} /></Link>
        </div>
            </div>
        </div>
    )
}

export default Description