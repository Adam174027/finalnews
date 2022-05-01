import React from 'react'
import ReactDOM from "react-dom";
import HeroItemStyles from '../styles/heroItem.module.css'
import Link from 'next/link';

const HeroItem = ({post}) => {
  return (
    <div className={HeroItemStyles.container} key={post._id}>
         <img src={post.image_url} className={HeroItemStyles.image} />
         <Link href={"/news/"+post.id} className={HeroItemStyles.headline} ><a>{post.headline} </a></Link>
         <p className={HeroItemStyles.time} key={post._id}>{post.time}</p>
        
    </div>
  )
}

export default HeroItem