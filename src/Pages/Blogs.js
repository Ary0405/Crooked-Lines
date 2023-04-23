import React from 'react'
import Navbar from '../Components/Navbar';
import NavbarBlogs from '../Components/NavbarBlogs';
import '../Styles/Blogs.css'
import BlogsContainer from './BlogsContainer';
function Blogs() {
    return (
        <div className='blogs_main_container'>
            <Navbar />
            <NavbarBlogs />
            <BlogsContainer />
        </div>
    )
}

export default Blogs