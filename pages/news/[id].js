import React from 'react'


import clientPromise from '../../lib/mongodb'
import News from '../../Components/News'




    
   

  

   
const id = ({news, related}) => {

 
  return (
    <div>
        
        <News news={news} most={related}/>
        
        </div>
  )
}

export default id

export async function getStaticPaths(){

    const client = await clientPromise;

    const db = await client.db("test");

    const data = await db.collection("test1").find({}).toArray();
    
    

    const ids = await data.map(article=> article.id)
    

    const paths = await ids.map(id=>({params : {id : id.toString()}}))
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const client = await clientPromise;

    const db = await client.db("test");
  
    let users = await db.collection("test1").findOne({id: params.id});

   
    const news = await JSON.parse(JSON.stringify(users));

    const filter= await db.collection("test1").find({catagory: news.catagory.toString()}).toArray();
    const related= await JSON.parse(JSON.stringify(filter));
    
  
 
    return{
        props:{
            news,
            related
            
        }
    }
}