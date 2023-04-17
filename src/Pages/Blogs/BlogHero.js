import React from 'react'
import '../../Styles/Blogs/BlogHero.css'
import blog_crookedlines from '../../Assets/blog_crookedlines.png'

function BlogHero() {
  return (
    <div class="blogHero-container">
        <img src={blog_crookedlines} alt="blog page" id="blogHero-mainimage"></img>
        <div class="blogHero-para">
            <p id="blogHero-heading">
                <h1 class="blogHero-heading1"> LATEST BLOG</h1>
            </p>
            <p class="blogHero-blogcontent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            </p>
            <p class="blogHero-blogcontent" id="blogHero-blogcontent2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            </p>
        </div>
    </div>
  )
}

export default BlogHero