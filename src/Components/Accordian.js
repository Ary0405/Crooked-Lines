import React, { useState } from 'react';
import '../Styles/Faq.css'
import explore from '../Assets/explore.png'


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className='accordian-title-heading'>{title}</div>
                <img className='accordian-title-button' src={explore} />
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;