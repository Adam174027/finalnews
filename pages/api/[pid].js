import clientPromise from '../../lib/mongodb'

export default async function name(req,res) {

    const {pid} = req.query;
    const client = await clientPromise;

    const db = await client.db("images");
  
    let users = await db.collection("imgBlog").findOne({
        id: pid});

  res.json(users);
}