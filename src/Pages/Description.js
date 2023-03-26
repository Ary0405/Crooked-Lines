import React from 'react'
import '../Styles/Description.css'
import Home_image_two from '../Assets/home_image_two.png'

function Description() {
    return (
        <div className='description_main_container'>
            <div className='image_container'>
                <img className='description_image' src={Home_image_two} alt='home_image' />
            </div>
            <div className='description_container'>
                <p className='description_question'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit.?</p>
                <p className='description_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>
                <p className='description_content'>Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>
                <p className='description_content'>Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
            </div>
        </div>
    )
}

export default Description