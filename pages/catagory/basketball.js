import React from 'react'
import clientPromise from '../../lib/mongodb'
import Catagories from '../../Components/Catagories'


const basketball = ({posts}) => {
    
    
    return (
      <>
  
      <Catagories list={posts}/>
    
   
    </>
    )
  
}

export default basketball


export async function getServerSideProps(context) {
    try {
      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      const client = await clientPromise;
  
      const db = await client.db("test");
    
      let users = await db.collection("test1").find({catagory:'Basketball'}).limit(9).toArray();
      
    
     
      const posts = await JSON.parse(JSON.stringify(users));
  
  
      let videosResult = await db.collection("videos").find({}).limit(9).toArray();
     
      const videos = await JSON.parse(JSON.stringify(videosResult));
  
      
       
      return {
        props: { isConnected: true, posts: posts, videos:videos}
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
  