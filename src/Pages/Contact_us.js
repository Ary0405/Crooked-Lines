import React from 'react'
import '../Styles/Contact_us.css'
import background from '../Assets/contact_us_circle_one.png'
import background_two from '../Assets/contact_us_circle_two.png'
import Faq from './Faq'

function Contact_us() {
    return (
        <>
            <div id='main_container' className='main_container'>
                <img className='bg_1' src={background} />
                <img className='bg_2' src={background_two} />
                <p className='contact_us_heading'><span className='questions'>Got questions?</span> We would love to answer<br /> to make this contest <span className='smoother'>smoother</span></p>
                <p className='contact_us_details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.<br /> Aliquam in hendrerit urna. Pellentesque sit</p>
                <button className='linkedin_button'>LinkedIn</button>
            </div>
        </>
    )
}

export default Contact_us