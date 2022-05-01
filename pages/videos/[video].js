import React from 'react'
import Video from '../../Components/Video'
import VideoRel from '../../Components/VideoRel'

import clientPromise from '../../lib/mongodb'
import News from '../../Components/News'
import VideoStyles from '../../styles/video.module.css'



    
   

  

   
const video = ({post, rel}) => {

  return (
    <div className={VideoStyles.container}>
        <div className={VideoStyles.main}>
        <Video video={post} />
        </div>
        <div className={VideoStyles.side}>
        {rel.map(product=><VideoRel rel={product} />)}
        </div>
        
        </div>
  )
}

export default video

export async function getStaticPaths(){

    const client = await clientPromise;

    const db = await client.db("test");

    const data = await db.collection("videos").find({}).toArray();
    
    

    const ids = await data.map(article=> article.id)
    

    const paths = await ids.map(id=>({params : {video : id.toString()}}))
    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps({params}){
    const client = await clientPromise;

    const db = await client.db("test");
  
    let users = await db.collection("videos").findOne({id: params.video});
   

   
    const post = await JSON.parse(JSON.stringify(users));
  
    const collection= await db.collection("videos").find({}).toArray();
    const rel = await JSON.parse(JSON.stringify(collection));
   
 
    return{
        props:{
            post,
            rel
            
        }
    }
}