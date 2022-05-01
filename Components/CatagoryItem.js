import React from 'react'
import CatagoryItemStyles from '../styles/catagoryItem.module.css'
import Link from 'next/link'

const CatagoryItem = ({item}) => {
  return (
    <div className={CatagoryItemStyles.container}>
       <img src={item.image_url} key={item._id} className={CatagoryItemStyles.image}/>
       <Link href={"../news/"+item.id} className={CatagoryItemStyles.headline} key={item._id}><a>{item.headline} </a></Link>
        
        <p className={CatagoryItemStyles.time}>{item.time}</p>
    </div>
  )
}

export default CatagoryItem