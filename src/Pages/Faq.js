import React from 'react'
import '../Styles/Faq.css'
import faq from '../Assets/faq.png'
import Accordian from '../Components/Accordian'
function Faq() {
    const accordionData = [
        {
            title: 'What is the theme of this competition?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: 'On what bases you will be judged?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Is plagiarism allowed?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];
    return (
        <div className='faq_main_container'>
            <div className='faq_heading_section'>
                <img className='faq_image' src={faq} />
                <p className='faq_heading_section_text'>What do you want to know?</p>
            </div>
            <p className='faq_question'>Do you have questions about This<br /> contest? Check out our FAQ <br />section!</p>
            <div className='faq_sections_questions'>
                {accordionData.map(({ title, content }) => (
                    <Accordian title={title} content={content} />
                ))}
            </div>
        </div>
    )
}

export default Faq