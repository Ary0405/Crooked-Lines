import React from 'react'
import Navbar from '../Components/Navbar';
import ContactUs from './Contact_us';
import Description from './Description';
import Eligible from './Eligible';
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
            <Eligible />
            <Timeline />
            <ContactUs />
            <Faq />
            <Footer />
        </div>
    )
}

export default Main