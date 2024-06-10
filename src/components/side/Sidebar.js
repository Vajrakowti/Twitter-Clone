import React from 'react'
import './Sidebar.css'
import Sidebaroptions from './Sidebaroptions';
import { BsTwitterX } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

function Sidebar() {
  return (
    <div className="sidebar">
        <BsTwitterX className="twitter" fontSize="2.3rem"/>
        <div className='icons'>
            <MdHomeFilled fontSize="1.5rem"/>
            <div>Home</div>
        </div>
        <div className='icons'>
            <FaSearch fontSize="1.5rem"/>
            <div>Explore</div>
        </div>
        <div className='icons'>
            <FaBell fontSize="1.5rem"/>
            <div>Notificatios</div>
        </div>
        <div className='icons'>
            <IoMdMail fontSize="1.5rem"/>
            <div>Messages</div>
        </div>
        <div className='icons'>
            <FaBookmark fontSize="1.5rem"/>
            <div>FaBookmark</div>
        </div>
        <div className='icons'>
            <BsPeopleFill fontSize="1.5rem"/>
            <div>Communities</div>
        </div>
        <div className='icons'>
            <FaXTwitter fontSize="1.5rem"/>
            <div>Premium</div>
        </div>
        <div className='icons'>
            <IoPerson fontSize="1.5rem"/>
            <div>Profile</div>
        </div>
        <div className='icons'>
            <CgMoreO fontSize="1.5rem"/>
            <div>More</div>
        </div>
        <button className='side_tweet' variant = "outlined">
            Post
        </button>
        



        

      
    </div>
  )
}

export default Sidebar
