import React from 'react'
import '../Styles/Submission_Complete.css'
import Sub from "../Assets/sub.png";
import { useNavigate } from "react-router-dom";

function SubmissionComplete() {
    const navigate = useNavigate();
    return (
        <div>
            <p style={{"cursor" : "pointer"}} onClick={() => navigate('/')} className='back_to_website'> &#8592;	Back to Main Website</p>
            <div className='submission_complete_main_container'>
                <div className='submission_complete_container'>
                    <p className='crooked'>CROOKED LINES</p>
                    <p className='submission_complete_heading'>Your submission has been recorded!<br />Thankyou for your submission.</p>
                </div>
                <div className='submission_complete_image'>
                    <img className='sub_comp_image' src={Sub} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default SubmissionComplete