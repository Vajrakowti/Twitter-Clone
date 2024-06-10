import React from 'react'
import './Tweetbox.css'
import { useState } from 'react'
import { db } from '../../firebase';


function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState("");   //state and Setstate
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault()                   // it will not refresh whole page when click on tweet button

    db.collection('posts').add({
      displayName : "Vajrakowtilya",
      username: "VKowtilya",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1389821385451606017/OvjRMBbG_400x400.jpg"
    })
    setTweetMessage("")             // After writing post and url automatically it will become empty.
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
        <form>
            <div className='tweetbox_input'>
                {/* <RxAvatar src="https://pbs.twimg.com/profile_images/1389821385451606017/OvjRMBbG_400x400.jpg"/> */}

                <img src='https://pbs.twimg.com/profile_images/1389821385451606017/OvjRMBbG_400x400.jpg'alt="dp" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>

                <input 
                onChange = {(e) => setTweetMessage(e.target.value)}     // value is what ever we write in what's happening
                value = {tweetMessage} 
                type='text' placeholder="What's happening"/>
     
            </div>
            <input 
            onChange = { (e) => setTweetImage(e.target.value) }
            value = {tweetImage} 
            className='tweetbox_imageinput' placeholder="Enter image URL" type='text'/>
            <button
            onClick = { sendTweet } 
            className='tweetbox_button'>Post</button>
            
        </form>
        
    </div>
  )
}

export default Tweetbox
