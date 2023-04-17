import React from 'react'
import '../Styles/Faq.css'
import faq from '../Assets/faq.png'
import Accordian from '../Components/Accordian'
function Faq() {
    const accordionData = [
        {
            title: 'Does the competition have a theme?',
            content: `This year there is no theme for the contest. All topics are welcome.`
        },
        {
            title: 'Do I have to adhere to the word limit? Will my entry be disqualified if I go over/under by just a little bit?',
            content: `Please ensure your entry adheres closely to the 1000-2000 word range to maximize your chances of winning!`
        },
        {
            title: 'Is there a submission fee?',
            content: `There is no submission fee for this year's contest. However, only one submission per individual is allowed.`
        },
        {
            title: 'Can I submit poetry?',
            content: `Sure, if your poem(s) tell a story, we would love to read your work.`
        },
        {
            title: 'Can I submit more than one piece of flash fiction?',
            content: `As long as there is a compelling unified narrative, we are happy to receive your entry.`
        },
        {
            title: 'Is there a longlist and a shortlist? Will I be notified if my entry makes it through them?',
            content: `You will be notified if your entry has made the shortlist and invited to the SNIoE campus for a day of creative writing workshops with our distinguished jury.`
        },
        {
            title: 'Do I need to be an Indian citizen to enter the competition?',
            content: `This year we require all entrants to submit a Government of India approved identity proof.`
        },
        {
            title: 'How to register for the competition?',
            content:  `To begin the application process, please click on the Login button located in the navigation bar, and sign up using either your email address or phone number. Once you have successfully logged in, the "Enter Now" button will transform into "Apply Now". Click on the "Apply Now" button and fill out the necessary details before submitting your work.`
        },
    ];
    return (
        <div id='faq_main_container' className='faq_main_container'>
            <div className='faq_heading_section'>
                <img className='faq_image' src={faq} alt=''/>
                <p className='faq_heading_section_text'>What do you want to know?</p>
            </div>
            <p className='faq_question'>FAQ</p>
            <div className='faq_sections_questions'>
                {accordionData.map(({ title, content }) => (
                    <Accordian title={title} content={content} />
                ))}
            </div>
        </div>
    )
}

export default Faq