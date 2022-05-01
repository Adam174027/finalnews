import React from 'react'
import CatagoryItem from '../Components/CatagoryItem'
import CatagoriesStyle from '../styles/Catagories.module.css'

const Catagories = ({list}) => {
  return (
    <div className={CatagoriesStyle.container}>{list.map((listItem)=> (
        <CatagoryItem item={listItem}/>))}</div>
  )
}

export default Catagories