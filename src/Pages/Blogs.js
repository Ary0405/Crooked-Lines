import React from 'react'
import Navbar from '../Components/Navbar';
import NavbarBlogs from '../Components/NavbarBlogs';
import Footer from './Footer';
import '../Styles/Blogs.css'
import BlogsContainer from './BlogsContainer';
import FreeWheeler from './FreeWheeler';
import SpotLight from './SpotLight';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Blogs() {
    const state = useSelector(state => state.blogs);
    console.log(state);

    return (
        <>
            <Navbar />  
            <div className='blogs_main_container'>
                <NavbarBlogs />
                {state === 'blogs' ? <BlogsContainer /> : 
                    state === 'freewheeler' ? <FreeWheeler /> :
                        <SpotLight />} 
            </div>
            <Footer />
        </>
    )
}

export default Blogs