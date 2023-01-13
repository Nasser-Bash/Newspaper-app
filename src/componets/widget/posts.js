import React from 'react';
import Fade from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
 const PostCategory = ({post}) => {
  return (
    <Fade>
    <div className='posts d-lg-flex d-block text-center  mb-3'>
        <Link to={`/postpage`}>
        <img src={post.imageUrl}/>
        </Link>
        <div className='post-info mx-4  p-2'>
                <div className='post-category mb-4'>
                    
                    <span className='d-flex justify-content-around'>
                    <h6 className='text-muted'>{post.date}</h6>
                    <h6>{post.author}</h6>
                    <h6 className='text-muted'>{post.time}</h6>
                    </span>
                </div>
                <div className='post-body'>
                    <h2 className='post-title'>{post.title}</h2>
                    <p className='post-desc'>{post.content}</p>
                </div>
        </div>
    </div>
      </Fade>
  )
}
export default PostCategory;