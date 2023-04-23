import React from 'react'
import Navbar from '../Components/Navbar';
import NavbarBlogs from '../Components/NavbarBlogs';
import '../Styles/Blogs.css'
import BlogsContainer from './BlogsContainer';
import FreeWheeler from './FreeWheeler';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Blogs() {
    const state = useSelector(state => state.blogs);
    console.log(state);

    return (
        <div className='blogs_main_container'>
            <Navbar />
            <NavbarBlogs />
            {state === 'blogs' ? <BlogsContainer /> : <FreeWheeler />}
            {/* <BlogsContainer /> */}
            {/* <FreeWheeler /> */}
        </div>
    )
}

export default Blogs