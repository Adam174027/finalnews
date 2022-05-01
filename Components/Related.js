import React from 'react'
import RelatedStyles from '../styles/Related.module.css'
import Link from 'next/link'

const Related = ({rel}) => {
  return (
    <div className={RelatedStyles.container}>
        

        
          <div className={RelatedStyles.pic}>

          
            <img src={rel.image_url} className={RelatedStyles.image}/>

            </div>
            <div className={RelatedStyles.text}>
             <Link href={"/news/"+rel.id}>
            <a className={RelatedStyles.headline}>{rel.headline}</a>
            </Link>
            <p className={RelatedStyles.intro}>{rel.intro}</p>
            <p className={RelatedStyles.time}>{rel.time}</p>
            </div>
            
        
    </div>
  )
}

export default Related