import React from 'react'
import ListItemStyles from '../styles/ListItem.module.css'
import Link from 'next/link'

const ListItem = ({list}) => {
  return (
    <div className={ListItemStyles.container}>

      <Link href={"news/"+list.id}>
      <a className={ListItemStyles.headline}>{list.headline}</a>
      </Link>
        
    </div>
  )
}

export default ListItem