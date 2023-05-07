import React from 'react'
import '../Styles/NavbarBlogs.css'
import { actionCreators } from "../State";
import { useDispatch } from "react-redux";

function NavbarBlogs() {
    const dispatch = useDispatch();
    return (
        <div className='navbar_blogs_main_container'>
            <p className='navbar_blogs_heading'>Refine by : </p>
            <div className='navbar_blogs_elements'>
                <p onClick={() => {dispatch(actionCreators.setBlogs('blogs'))}}>Blogs</p>
                <p onClick={() => {dispatch(actionCreators.setBlogs('freewheeler'))}}>FreeWheeler</p>
                <p onClick={() => {dispatch(actionCreators.setBlogs('spotlight'))}}>Spotlight</p>
            </div>
        </div>
    )
}

export default NavbarBlogs