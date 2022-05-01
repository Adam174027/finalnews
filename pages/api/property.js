
import clientPromise from '../../lib/mongodb'

export default async function name(req,res) {

  
  
const id = await 'id'
    const client = await clientPromise;

  const db = await client.db("test");

  let users = await db.collection("test1").find({catagory: 'football'}).limit(10).toArray();
  
  
  res.json(users);

  
   

 
}