import React from 'react'
import freewheeler_9 from '../Assets/freewheeler_9.jpeg'
import freewheeler_8 from '../Assets/freewheeler_8.jpeg'
import freewheeler_7 from '../Assets/freewheeler_7.jpeg'
import freewheeler_6 from '../Assets/freewheeler_6.jpeg'
import freewheeler_5 from '../Assets/freewheeler_5.jpeg'
import freewheeler_4 from '../Assets/freewheeler_4.jpeg'
import freewheeler_3 from '../Assets/freewheeler_3.jpeg'
import '../Styles/FreeWheeler.css'
import { Link } from 'react-router-dom'

function FreeWheeler() {
    const freewheeler = [
        {
            image: freewheeler_9,
            text: 'Issue 9',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/The-Freewheeler-2022.pdf'
        },
        {
            image: freewheeler_8,
            text: 'Issue 8',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/The-Freewheeler2020-21.pdf'
        },
        {
            image: freewheeler_7,
            text: 'Issue 7',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/snu_freewheeler_2019-20.pdf'
        },
        {
            image: freewheeler_6,
            text: 'Issue 6',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/The%20Freewheeler%202018-19.pdf'
        },
        {
            image: freewheeler_5,
            text: 'Issue 5',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/Freewheeler-2017-2018-D4.pdf'
        },
        {
            image: freewheeler_4,
            text: 'Issue 4',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/Freewheeler-Vol-I-Issue-IV-2016-17_0.pdf'
        },
        {
            image: freewheeler_3,
            text: 'Issue 3',
            link: 'https://snu.edu.in/sites/default/files/sites/snu-university/files/publication/Freewheeler-2015-16-Final.pdf'
        }
    ]
    return (
        <div className='freewheeler_main_container'>
            {freewheeler.map((item) => {
                return (
                    <Link style={{"textDecoration" : "none"}} target='_blank' to={item.link}>
                        <div className='freewheeler_card_main_container'>
                            <img src={item.image} alt='' />
                            <p>{item.text}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default FreeWheeler