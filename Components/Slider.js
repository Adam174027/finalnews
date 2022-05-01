import React from 'react'
import sliderStyles from '../styles/slider.module.css'
import Image from "next/image";
import SliderItem from './SliderItem';


const Slider= ({properties }) => {
  return (
    <>
     <div className={sliderStyles.container}>
     {properties.map(property=> <SliderItem property={property}/>)}
     </div>
    </>
  )
}

export default Slider
