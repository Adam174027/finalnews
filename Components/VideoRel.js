import React from 'react'
import VideoRelStyles from '../styles/VideoRel.module.css'
import Link from 'next/link'

const VideoRel = ({rel}) => {
  return (
    <div className={VideoRelStyles.container}>
        <img className={VideoRelStyles.img} src={rel.imageUrl}/>
        <Link href={"/videos/"+rel.id}>
            <a className={VideoRelStyles.headline}>{rel.headline}</a>
        </Link>
    </div>
  )
}

export default VideoRel