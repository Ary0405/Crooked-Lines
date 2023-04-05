import React, { useRef } from 'react'
import '../Styles/Contact_us.css'
import background from '../Assets/contact_us_circle_one.png'
import background_two from '../Assets/contact_us_circle_two.png'
import emailjs from '@emailjs/browser';
import Faq from './Faq'
// service_00wzxvg
function Contact_us() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_00wzxvg', 'template_r3bpwfl', form.current, 'Yl_H0JmFhB7PWMsMZ')
            .then((result) => {
                alert('Email sent successfully')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div id='main_container' className='main_container'>
                <img className='bg_1' src={background} />
                <img className='bg_2' src={background_two} />
                <p className='contact_us_heading'><span className='questions'>Got questions?</span> We would love to answer<br /> to make this contest <span className='smoother'>smoother</span></p>
                <p className='contact_us_details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.<br /> Aliquam in hendrerit urna. Pellentesque sit</p>
                {/* <button className='linkedin_button'>LinkedIn</button> */}
                <div className='form_group'>
                    <form ref={form} className='submit_form' onSubmit={sendEmail}>
                        {/* <label for="name" className='label_title'>Name</label> */}
                        <input 
                            className="submission_input_contact"
                            type={"text"} 
                            name="name" 
                            placeholder='Name' 
                        />
                        {/* <label for="email" className='label_title'>Email</label> */}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email' 
                            className="submission_input_contact"
                            required
                        />
                        {/* <label for="message" className='label_title'>Message</label> */}
                        <textarea 
                            rows={5}
                            cols={50}
                            name="message"
                            className="message_input"
                            placeholder='Your queries here'
                        />
                        
                        <input type="submit" value="Send" className='send-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact_us