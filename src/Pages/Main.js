import React from 'react'
import Navbar from '../Components/Navbar';
import Contact_us from './Contact_us';
import Description from './Description';
import Faq from './Faq';
import Footer from './Footer';
import Home from './Home';
import Timeline from './Timeline';

function Main() {
    return (
        <div>
            <Navbar />
            <Home />
            <Description />
            <Timeline />
            <Contact_us />
            <Faq />
            <Footer />
        </div>
    )
}

export default Main