import React from 'react'
import HeroItem from './HeroItem'
import HeroStyles from '../styles/hero.module.css'

const Hero = ({posts}) => {
  return (
    <div className={HeroStyles.container}>
        {posts.map((post)=> (
        <HeroItem post={post}/>))}
    </div>
  )
}

export default Hero