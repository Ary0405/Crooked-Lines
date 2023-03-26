import React from 'react'
import '../Styles/Eligible.css'
import star from '../Assets/Star.png'

function Eligible() {
    return (
        <div className='eligible_bg'>
          <p className='box'><span className='heading'>English Writing Competition</span><span className='linetwo'> Rules & eligibility?</span>
          <img className='star' src={star} /><span className='list'>Entries must be between 1000-2000 words.</span></p>
        </div>
    )
}

export default Eligible

