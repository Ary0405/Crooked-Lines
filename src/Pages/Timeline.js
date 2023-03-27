import React from 'react'
import '../Styles/Timeline.css'
import background from '../Assets/bg_timeline.png'
import arrow from '../Assets/arrow.png'

function Timeline() {
    return (
        <div id='timeline_main' className='timeline_main'>
                <img className='timeline_image' src={background} />
            <div className='main_bg'>
                <p><span className='heading_timeline'>have a look at the </span><span className='timeline'>Timeline</span>
                </p>
                <div className='flex-container'>
                    <p className='smallbox'><span className='date'>03</span><br />April 2023<br /><img className='sarrow' src={arrow} /><span className='smalltext'>call for<br />submission open</span></p>
                    <p className='smallbox2'><span className='date'>05</span><br />August 2023<br /><img className='sarrow' src={arrow} /><span className='smalltext'>submission<br />deadline</span></p>
                    <p className='smallbox2'><span className='date'>05</span><br />October 2023<br /><img className='sarrow' src={arrow} /><span className='smalltext'>longlist<br />annoucement</span></p>
                </div>
                <div className='flex-container'>
                    <p className='smallbox'><span className='date'>26</span><br />October 2023<br /><img className='sarrow' src={arrow} /><span className='smalltext'>shortlist<br />announcement</span></p>
                    <p className='smallbox2'><span className='date'>25</span><br />November 2023<br /><img className='sarrow' src={arrow} /><span className='smalltext'>prize giving<br />ceremony</span></p>
                </div>
            </div>
        </div>
    )
}

export default Timeline

