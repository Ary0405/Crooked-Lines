import React from 'react'
import '../Styles/BlogsCard.css'
import { useNavigate } from 'react-router-dom'
function BlogsCard({title , description , id , writer}) {
    const navigate = useNavigate();
    return (
        <div onClick={() => {navigate(`/content/${id}`)}} className='blogs_card_main_container'>
            <p className='blogs_card_heading'>{title}</p>
            <p className='blogs_card_writer'>By: <span>{writer}</span></p>
            <p className='blogs_card_description'>{description}</p>
        </div>
    )
}

export default BlogsCard