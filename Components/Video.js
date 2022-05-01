import React from 'react'
import ReactPlayer from 'react-player'
import VideosStyle from '../styles/Videos.module.css'


const Video = ({video}) => {
  return (
    <div className={VideosStyle.container}>
        <h1 className={VideosStyle.headline}>{video.headline}</h1>
        <div className={VideosStyle.video}>
        <ReactPlayer url={video.videoUrl}  width='100%'/>
        </div>
    </div>
  )
}

export default Video