import React, { useRef } from 'react'
import '../Styles/Contact_us.css'
import background from '../Assets/contact_us_circle_one.png'
import background_two from '../Assets/contact_us_circle_two.png'
import emailjs from '@emailjs/browser';
function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3751zek', 'template_v170v12', form.current, 'R8PaA9v1My6UlqV8L')
            .then((result) => {
                alert('Email sent successfully')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div id='main_container' className='main_container'>
                <img className='bg_1' src={background} alt=''/>
                <img className='bg_2' src={background_two} alt=''/>
                <p className='contact_us_heading'><span className='questions'>Got Questions?</span></p>
                <p className='contact_us_details'>Fill out the form if you have any queries related to the competition</p>
                <div className='form_group'>
                    <form ref={form} className='submit_form' onSubmit={sendEmail}>
                        <input 
                            className="submission_input_contact"
                            type={"text"} 
                            name="name" 
                            placeholder='Name' 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email' 
                            className="submission_input_contact"
                            required
                        />
                        <textarea 
                            rows={5}
                            cols={50}
                            name="message"
                            className="message_input"
                            placeholder='Your queries here'
                        />
                        
                        <input style={{"cursor" : "pointer"}} type="submit" value="Send" className='send-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs