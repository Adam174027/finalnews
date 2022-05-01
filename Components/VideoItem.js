import React from 'react'
import ReactDOM from "react-dom";
import VideoItemStyles from '../styles/videoItem.module.css'
import {FaPlay } from 'react-icons/fa';
import Link from 'next/link'

const VideoItem = ({video}) => {
  return (
    <div className={VideoItemStyles.container}>
      
         <img src={video.imageUrl}  key={video._id} className={VideoItemStyles.image}/>
         <FaPlay className={VideoItemStyles.play}/>

         <Link href={"/videos/"+video.id}>
         <a key={video._id} className={VideoItemStyles.headline}>{video.headline}  </a>
         </Link>
        
    </div>
  )
}

export default VideoItem