import React from 'react'
import clientPromise from '../../lib/mongodb'
import Search from '../../Components/Search'
import TermStyles from '../../styles/Term.module.css'

const term = ({post}) => {

  return (
    <div className={TermStyles.container}>
        {post.map(products=> <Search product={products}/>)}
    </div>
  )
}

export default term



export async function getServerSideProps({params}){
  const pipeline= [
    {
      '$search': {
        'index': 'search',
        'text': {
          'query': `${params.term}`,
          'path': {
            'wildcard': '*'
          }
        }
      }
    }
  ]
    const client = await clientPromise;

    const db = await client.db("test");
  
    let users = await db.collection("test1").aggregate(pipeline).toArray();

   
    const post = await JSON.parse(JSON.stringify(users));

  
    
   
 
    return{
        props:{
            post
            
        }
    }
}