import React from 'react'
import NewsStyle from '../styles/News.module.css'
import { FaLink } from 'react-icons/fa'
import {FaHome,FaAngleDoubleRight} from 'react-icons/fa'
import Related from './Related'
import Meta from '../Components/Meta'

const News = ({news, most}) => {
  return (

    
    <div className={NewsStyle.container}>

      <Meta title={news.title} description={news.description} keywords={news.keywords} author="Adam"/>
      <div className={NewsStyle.dir}>
        <FaHome/><FaAngleDoubleRight/><p className={NewsStyle.txt}>{news.catagory}</p><FaAngleDoubleRight/>
        </div>
        <h1 className={NewsStyle.headline}>{news.headline}</h1>
        <p className={NewsStyle.intro}>{news.intro}</p>
        <p className={NewsStyle.time}>{news.time}</p>
        <p className={NewsStyle.detail}>{news.detail_1}</p>
        <img src={news.image_url} className={NewsStyle.image}/>
        <p className={NewsStyle.detail}>{news.detail_2}</p>
        <a  className={NewsStyle.backlink} href={news.backlink1_link}>{news.backlink1_name}<FaLink/></a>
        <p className={NewsStyle.detail}>{news.detail_3}</p>
        <a className={NewsStyle.backlink} href={news.backlink2_link}>{news.backlink2_name}<FaLink/></a>
        <p className={NewsStyle.detail}>{news.detail_4}</p>
        <a className={NewsStyle.backlink} href={news.backlink3_link}>{news.backlink3_name}<FaLink/></a>
        <p className={NewsStyle.detail}>{news.detail_5}</p>

        <h1 className={NewsStyle.rel}> Most Related</h1>

        {most.map(product=>  <Related rel= {product}/>)}
      
    </div>
  )
}

export default News