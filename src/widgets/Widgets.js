import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed'
import { GoSearch } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import Followbutton from './Followbutton';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <GoSearch className='widgets_searchicon'/>
        <input placeholder='Search'type='text'/>
  
      </div>
      <div className='widgets_weightcontainer'>
        <h2>Whats's happening</h2>
      

      <TwitterTweetEmbed tweetId = {"1374945251916324864"} />

      <TwitterTimelineEmbed 
        sourceType = "profile"
        screenName = "VKowtilya"
        options = {{ height: 4000 }}
      /> 
  
      <TwitterShareButton 
          url = {"https://www.youtube.com/channel/UCy4mrgilDj4nOohQwyT22-g"}
          options = { { text : "Subscribe my Youtube Channel #VKowtilya" , via :  "VKowtilya" }}
      />
      </div>


      <div className='Container'>
        <div className='Trends'>
          <div className='Trends_4u'>
            Trending
          </div>
          <div className='setting_icon'>
            <IoSettingsSharp fontSize="1.5rem" />
          </div>
        </div>
        <div className='Trending_worldwide'>
          <div className='Trending_show'>
            Entertainment.Trending
          </div>
          <div className='tag'>
            #Kalki2898ADonJune27
          </div>
          <div className='tweet_people'>
            13.5k posts
          </div>
        </div>
        <div className='Trending_worldwide'>
          <div className='Trending_show'>
            Politics.Trending
          </div>
          <div className='tag'>
            Councli of Ministers
          </div>
          <div className='tweet_people'>
            22.5k posts
          </div>
        </div>
        <div className='Trending_worldwide'>
          <div className='Trending_show'>
            Trending in India
          </div>
          <div className='tag'>
            #UninstallInstagram
          </div>
          <div className='tweet_people'>
            15k posts
          </div>
        </div>
        <div className='Trending_worldwide'>
          <div className='Trending_show'>
            Sports.Trending
          </div>
          <div className='tag'>
            #ParisOlympics 
          </div>
          <div className='tweet_people'>
            5k posts
          </div>
        </div>
        <div className='seemore'>
          See More
        </div>

      </div>

      <div className='iContainer'>
        <div className='Trends'>
          <div className='Trends_4u'>
            Who To Follow
          </div>
        </div>
        <div className='follow_worldwide'>
          <div className='Trending_show'>
            <img src='https://pbs.twimg.com/profile_images/1782306480055832576/A_INPDHP_400x400.jpg' style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
            Elon musk
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/488px-Twitter_Verified_Badge.svg.png'alt="dp" style={{height:"20px",width:"20px",borderRadius:"50%"}}/>
          </div>
          <div className='tweetid'>
            @elonmusk
          </div>
          <div>
            <Followbutton/>
          </div>
        </div>
        <div className='follow_worldwide'>
          <div className='Trending_show'>
            <img src='https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg' style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
            Bill Gates
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/488px-Twitter_Verified_Badge.svg.png'alt="dp" style={{height:"20px",width:"20px",borderRadius:"50%"}}/>
          </div>
          <div className='tweetid'>
            @BillGates
          </div>
          <div>
            <Followbutton/>
          </div>
        </div>
        <div className='follow_worldwide'>
          <div className='Trending_show'>
            <img src='https://pbs.twimg.com/profile_images/1592560747707600897/6_8AjTmK_400x400.jpg' style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
            National Geographic
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/488px-Twitter_Verified_Badge.svg.png'alt="dp" style={{height:"20px",width:"20px",borderRadius:"50%"}}/>
          </div>
          <div className='tweetid'>
            @NatGeo
          </div>
          <div>
            <Followbutton/>
          </div>
        </div>

        <div className='seemore'>
          See More
        </div>



      </div>


      
    </div>
  )
}

export default Widgets
