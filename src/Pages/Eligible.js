import React from 'react'
import '../Styles/Eligible.css'
import prize1 from '../Assets/prize1.png'
import prize2 from '../Assets/prize2.png'
import prize3 from '../Assets/prize3.png'

function Eligible() {
  return (
    <div id='eligible_bg' className='eligible_bg'>
      <div className='prizes_container'>
        <img className='prizes' src={prize1} alt='prize1' />
        <img className='prizes' src={prize2} alt='prize2' />
        <img className='prizes' src={prize3} alt='prize3' />
      </div>
      <div className='box'>
        <p className='heading'>CONTEST RULES & ELIGIBILITY </p>
        {/* <span className='linetwo'>RULES & ELIGIBILITY</span> */}
        <ul className='ul_class1'>
          <li className='list'>Word limit for the submission: 1000 - 2000 words </li>
          <li className='list'>Authors must be between 16 to 18 years of<br /> age as of final date of submission. </li>
          <li className='list'>Only unpublished works will be considered </li>
          <li className='list'>Plagiarized entries will be disqualified.</li>
          <li className='list'>A Government of India issued identity document<br /> must be scanned and uploaded as identity proof<br /> by contestants. The competition is open only to <br />Indian residents/citizens. </li>
        </ul>
        <ul className='ul_class1'>
          <li className='list'>All entries must be original and in English </li>
          <li className='list'>No identifying markers allowed in the document<br /> including the document name</li>
          <li className='list'>Only one submission per person is allowed</li>
          <li className='list'>The decision of the jury is final and cannot be<br /> challenged.</li>
          <li className='list'>Entries should be typed, double-spaced,<br /> Times New Roman font (12pt), and to be submitted<br />in DOCX, DOC or PDF format</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Eligible

