import React from 'react'
import '../Styles/Eligible.css'
import prize1 from '../Assets/prize1.png'
import prize2 from '../Assets/prize2.png'
import prize3 from '../Assets/prize3.png'

function Eligible() {
  return (
    <div id='eligible_bg' className='eligible_bg'>
      <div className='prizes_container'>
        <img className='prizes' src={prize1} alt='prize1'/>
        <img className='prizes' src={prize2} alt='prize2'/>
        <img className='prizes' src={prize3} alt='prize3'/>
      </div>
      <div className='box'>
        <p className='heading'>ENGLISH WRITING COMPETITION<span className='linetwo'> Rules & Eligibility?</span></p>
        <ul className='ul_class1'>
          <li className='list'>Entries must be between 1000-2000 words.</li>
          <li className='list'>Contestants must be 16-18 years old and in<br />class 10-12.</li>
          <li className='list'>All entries must be original and in English to<br /> avoid disqualification.</li>
          <li className='list'>Contestants must upload a Government-issued<br /> ID as proof of identity.</li>
        </ul>
        <ul className='ul_class1'>
          <li className='list'>No ID markers allowed in the document.</li>
          <li className='list'>Entries should be typed, double-spaced, Times<br /> New Roman font (12pt), and submitted in DOCX<br />or PDF formats.</li>
          <li className='list'>Plagiarized entries will be disqualified.</li>
          <li className='list'>The decision of the jury is final and cannot be<br /> challenged.</li>
        </ul>
      </div>
    </div>
  )
}

export default Eligible

