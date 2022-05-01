import Head from 'next/head'
import clientPromise from '../lib/mongodb'

import styles from '../styles/global.module.css'
import Slider from '../Components/Slider'
import React from "react";
 import ReactDOM from "react-dom";
 import { useState } from 'react';
import Hero from '../Components/Hero'
var axios = require("axios").default;
import Videogal from '../Components/Videogal'
import List from '../Components/List'






export default function Home({ isConnected,posts,videos }) {






    return (

    <div className={styles.container} >
      <Head>
        <title>TheyAreSay.xyz</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Oswald:wght@300&family=Poppins:ital,wght@1,100&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>




     <Hero posts={posts}/>

     <Videogal videos={videos}/>


     <List lists={posts}/>


    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    const client = await clientPromise;

    const db = await client.db("test");

    let users = await db.collection("test1").find({}).limit(9).sort({ $natural : -1}).toArray();



    const posts = await JSON.parse(JSON.stringify(users));


    let videosResult = await db.collection("videos").find({}).limit(9).toArray();

    const videos = await JSON.parse(JSON.stringify(videosResult));



    return {
      props: { isConnected: true, posts: posts, videos:videos}
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false }
    }
  }
}
