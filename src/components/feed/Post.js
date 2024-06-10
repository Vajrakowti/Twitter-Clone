import React, { forwardRef } from 'react'
import './Post.css'
import { MdOutlineReplay } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

const Post= forwardRef(( {displayName,username,verified, text, image, avatar},ref) => {
  return (
    <div className='post'ref={ref}>
        <div className='post_avatar'>

        <img src={avatar} alt="dp" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headertext'>
                    <h3> {displayName}
                    <span className='post_headerspecial'>
                        
                    {verified &&<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/488px-Twitter_Verified_Badge.svg.png'alt="dp" style={{height:"20px",width:"20px",borderRadius:"50%"}}/>}
                       @{username}

                    </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>{text}</p>
                </div>

            </div>
            <img src={image} alt=''/>

            <div className='post_fotter'>
                <MdOutlineReplay/>
                <BiRepost/>
                <IoMdHeartEmpty/>
                <MdBookmarkBorder/>
                <AiOutlineShareAlt/>

            </div>

        </div>

      
    </div>
  )
})

export default Post
