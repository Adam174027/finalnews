
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { FaFastForward } from 'react-icons/fa'
import VideogalStyles from '../styles/videogal.module.css'
import VideoItem from './VideoItem'



const Videogal = ({videos}) => {
  const [next, setNext]=useState('');
  return (
    <div className={VideogalStyles.container}>
        <h1 className={VideogalStyles.name}>Video Gallary</h1>
        <div className={VideogalStyles.flex}>
       
        {videos.map(video=> <VideoItem video={video}/>)}
       
      
       </div>
       </div>
  )
}

export default Videogal