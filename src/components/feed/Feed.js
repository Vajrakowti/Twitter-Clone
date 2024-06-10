import React,{useEffect, useState} from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import { db } from '../../firebase'
import FlipMove from 'react-flip-move'

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
        setPosts(snapshot.docs.map(doc => doc.data()))
    })
}, [])

  return (
    <div className='feed'>
        <div className='feed_header'>
            <h2>For You</h2>
        </div>

        <Tweetbox/>

        {/* <Post displayName="VajraKowtilya"
        username="VKowtilya"
        verified={true}
        text="hopooooo"
        image="https://pbs.twimg.com/profile_images/1389821385451606017/OvjRMBbG_400x400.jpg"
        avatar="https://pbs.twimg.com/profile_images/1389821385451606017/OvjRMBbG_400x400.jpg"
        />
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}
        <FlipMove>
        {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}

        </FlipMove>
    </div>
  )
}

export default Feed
