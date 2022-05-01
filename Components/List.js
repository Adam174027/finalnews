import React from 'react'
import ListStyles from '../styles/List.module.css'
import ListItem from './ListItem'

const List = ({lists}) => {
  return (
    <div className={ListStyles.container}>

        <h1 className={ListStyles.intro}>More News</h1>

        <div className={ListStyles.grid}>
        {lists.map(list=> <ListItem list={list}/>)}
        </div>

    
    </div>
  )
}

export default List