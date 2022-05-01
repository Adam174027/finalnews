import React from 'react'
import {useRouter} from 'next/router'



const catagory = () => {
    const router= useRouter();
  return (
    <div>{router.query}</div>
  )
}

export default catagory
export async function getStaticPaths(){
    return{
        paths:[],
        fallback:true
    }
}