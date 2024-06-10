import React,{useState} from 'react'
import './Followbutton.css'

const Followbutton = () => {

    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(prevState => !prevState);
      };

  return (
    <button className='followbutton' onClick={toggleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default Followbutton
